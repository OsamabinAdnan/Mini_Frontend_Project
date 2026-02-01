'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
  tags: string[];
}

interface TemplateSearchProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
  onSearchChange?: (searchTerm: string) => void;
  placeholder?: string;
}

const TemplateSearch: React.FC<TemplateSearchProps> = ({
  templates,
  onSelectTemplate,
  onSearchChange,
  placeholder = 'Search templates...',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [recentTemplates, setRecentTemplates] = useState<Template[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load recent templates and favorites from localStorage
  useEffect(() => {
    const savedRecent = localStorage.getItem('htmlPreviewer-recentTemplates');
    const savedFavorites = localStorage.getItem('htmlPreviewer-favorites');

    if (savedRecent) {
      try {
        setRecentTemplates(JSON.parse(savedRecent));
      } catch (e) {
        console.error('Failed to parse recent templates', e);
      }
    }

    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
  }, []);

  // Save recent templates to localStorage
  const saveRecentTemplate = (template: Template) => {
    const updatedRecent = [template, ...recentTemplates.filter(t => t.id !== template.id)].slice(0, 5);
    setRecentTemplates(updatedRecent);
    localStorage.setItem('htmlPreviewer-recentTemplates', JSON.stringify(updatedRecent));
  };

  // Toggle favorite status
  const toggleFavorite = (templateId: string) => {
    const updatedFavorites = favorites.includes(templateId)
      ? favorites.filter(id => id !== templateId)
      : [...favorites, templateId];

    setFavorites(updatedFavorites);
    localStorage.setItem('htmlPreviewer-favorites', JSON.stringify(updatedFavorites));
  };

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(templates.map(template => template.category)));
    return ['all', ...uniqueCategories];
  }, [templates]);

  // Filter templates based on search term and category
  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [templates, searchTerm, selectedCategory]);

  // Handle search term change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange?.(value);
  };

  // Handle template selection
  const handleSelectTemplate = (template: Template) => {
    saveRecentTemplate(template);
    onSelectTemplate(template);
  };

  return (
    <div className="w-full space-y-4">
      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-3">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow"
        />

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Recent templates section */}
      {recentTemplates.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Recently Used</h3>
          <div className="flex flex-wrap gap-2">
            {recentTemplates.map(template => (
              <Button
                key={`recent-${template.id}`}
                variant="outline"
                size="sm"
                onClick={() => handleSelectTemplate(template)}
                className="text-xs"
              >
                {template.name}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Favorites section */}
      {favorites.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Favorites</h3>
          <div className="flex flex-wrap gap-2">
            {favorites
              .map(favId => templates.find(t => t.id === favId))
              .filter(Boolean)
              .map(template => (
                <Button
                  key={`fav-${template!.id}`}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleSelectTemplate(template!)}
                  className="text-xs"
                >
                  {template!.name}
                </Button>
              ))}
          </div>
        </div>
      )}

      {/* Search results */}
      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        <h3 className="text-sm font-medium text-muted-foreground">
          {filteredTemplates.length} {filteredTemplates.length === 1 ? 'Result' : 'Results'}
        </h3>

        {filteredTemplates.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No templates found. Try a different search term.
          </p>
        ) : (
          <div className="grid gap-2">
            {filteredTemplates.map(template => (
              <div
                key={template.id}
                className="p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => handleSelectTemplate(template)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{template.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(template.id);
                    }}
                    className="h-6 w-6 p-0"
                  >
                    {favorites.includes(template.id) ? '★' : '☆'}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {template.tags.map(tag => (
                    <span
                      key={`${template.id}-${tag}`}
                      className="text-xs bg-muted px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSearch;