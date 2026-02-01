/**
 * Template management utilities for the HTML Previewer app
 */

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export class TemplateManager {
  private static STORAGE_KEY = 'htmlPreviewer-templates';
  private static CUSTOM_TEMPLATES_KEY = 'htmlPreviewer-customTemplates';

  /**
   * Get all available templates (built-in + custom)
   * @returns Array of all templates
   */
  static getAllTemplates(): Template[] {
    const builtInTemplates = this.getBuiltInTemplates();
    const customTemplates = this.getCustomTemplates();

    return [...builtInTemplates, ...customTemplates];
  }

  /**
   * Get built-in templates
   * @returns Array of built-in templates
   */
  static getBuiltInTemplates(): Template[] {
    // In a real implementation, this would come from a data file
    // For now, we'll return an empty array that will be populated later
    return [];
  }

  /**
   * Get custom user-defined templates
   * @returns Array of custom templates
   */
  static getCustomTemplates(): Template[] {
    const stored = localStorage.getItem(this.CUSTOM_TEMPLATES_KEY);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored);
      return parsed.map((template: any) => ({
        ...template,
        createdAt: new Date(template.createdAt),
        updatedAt: new Date(template.updatedAt),
      }));
    } catch (error) {
      console.error('Failed to parse custom templates', error);
      return [];
    }
  }

  /**
   * Save a new custom template
   * @param template - Template to save
   */
  static saveCustomTemplate(template: Omit<Template, 'id' | 'createdAt' | 'updatedAt'>): Template {
    const id = `custom-${Date.now()}`;
    const newTemplate: Template = {
      ...template,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const customTemplates = this.getCustomTemplates();
    const updatedTemplates = [newTemplate, ...customTemplates];

    localStorage.setItem(this.CUSTOM_TEMPLATES_KEY, JSON.stringify(updatedTemplates));

    return newTemplate;
  }

  /**
   * Update an existing custom template
   * @param templateId - ID of template to update
   * @param updates - Updates to apply
   */
  static updateCustomTemplate(templateId: string, updates: Partial<Omit<Template, 'id' | 'createdAt'>>): boolean {
    const customTemplates = this.getCustomTemplates();
    const templateIndex = customTemplates.findIndex(t => t.id === templateId);

    if (templateIndex === -1) return false;

    const updatedTemplate = {
      ...customTemplates[templateIndex],
      ...updates,
      updatedAt: new Date(),
    };

    const updatedTemplates = [...customTemplates];
    updatedTemplates[templateIndex] = updatedTemplate;

    localStorage.setItem(this.CUSTOM_TEMPLATES_KEY, JSON.stringify(updatedTemplates));

    return true;
  }

  /**
   * Delete a custom template
   * @param templateId - ID of template to delete
   */
  static deleteCustomTemplate(templateId: string): boolean {
    const customTemplates = this.getCustomTemplates();
    const updatedTemplates = customTemplates.filter(t => t.id !== templateId);

    if (updatedTemplates.length === customTemplates.length) return false;

    localStorage.setItem(this.CUSTOM_TEMPLATES_KEY, JSON.stringify(updatedTemplates));

    return true;
  }

  /**
   * Get templates by category
   * @param category - Category to filter by
   * @returns Array of templates in the specified category
   */
  static getTemplatesByCategory(category: string): Template[] {
    return this.getAllTemplates().filter(template => template.category === category);
  }

  /**
   * Search templates by name, description, or tags
   * @param searchTerm - Term to search for
   * @returns Array of matching templates
   */
  static searchTemplates(searchTerm: string): Template[] {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return this.getAllTemplates().filter(template =>
      template.name.toLowerCase().includes(lowerSearchTerm) ||
      template.description.toLowerCase().includes(lowerSearchTerm) ||
      template.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
    );
  }

  /**
   * Get unique categories from all templates
   * @returns Array of unique categories
   */
  static getCategories(): string[] {
    const categories = new Set<string>();
    this.getAllTemplates().forEach(template => {
      categories.add(template.category);
    });

    return Array.from(categories);
  }

  /**
   * Get templates by tags
   * @param tags - Tags to filter by
   * @returns Array of templates with matching tags
   */
  static getTemplatesByTags(tags: string[]): Template[] {
    return this.getAllTemplates().filter(template =>
      tags.some(tag => template.tags.includes(tag))
    );
  }

  /**
   * Import templates from JSON
   * @param templatesJson - JSON string containing templates
   */
  static importTemplates(templatesJson: string): boolean {
    try {
      const importedTemplates = JSON.parse(templatesJson);

      if (!Array.isArray(importedTemplates)) {
        throw new Error('Imported data is not an array');
      }

      // Validate template structure
      for (const template of importedTemplates) {
        if (!this.isValidTemplate(template)) {
          throw new Error(`Invalid template structure: ${JSON.stringify(template)}`);
        }
      }

      // Add imported templates to custom templates
      const existingCustomTemplates = this.getCustomTemplates();
      const updatedTemplates = [...importedTemplates, ...existingCustomTemplates];

      localStorage.setItem(this.CUSTOM_TEMPLATES_KEY, JSON.stringify(updatedTemplates));

      return true;
    } catch (error) {
      console.error('Failed to import templates', error);
      return false;
    }
  }

  /**
   * Export custom templates to JSON
   * @returns JSON string of custom templates
   */
  static exportCustomTemplates(): string {
    const customTemplates = this.getCustomTemplates();
    return JSON.stringify(customTemplates, null, 2);
  }

  /**
   * Validate template structure
   * @param template - Template to validate
   * @returns True if template is valid, false otherwise
   */
  private static isValidTemplate(template: any): template is Template {
    return (
      typeof template === 'object' &&
      typeof template.id === 'string' &&
      typeof template.name === 'string' &&
      typeof template.category === 'string' &&
      typeof template.description === 'string' &&
      typeof template.code === 'string' &&
      Array.isArray(template.tags) &&
      template.tags.every((tag: any) => typeof tag === 'string')
    );
  }

  /**
   * Get template by ID
   * @param id - ID of template to find
   * @returns Template if found, null otherwise
   */
  static getTemplateById(id: string): Template | null {
    const allTemplates = this.getAllTemplates();
    return allTemplates.find(template => template.id === id) || null;
  }
}