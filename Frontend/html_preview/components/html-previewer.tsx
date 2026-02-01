'use client';
import React, { ChangeEvent, useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { predefinedHtml } from './Predefined_Html';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { sanitizeHtml, createSafePreviewIframe } from '@/lib/security';
import { ErrorHandler } from '@/lib/error-handler';
import ErrorBoundary from './error-boundary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function HtmlPreviewer() {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [previewHtml, setPreviewHtml] = useState<string>('');
  const [isPreviewLoading, setIsPreviewLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on mount to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);
  const backgroundRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const previewFrameRef = useRef<HTMLIFrameElement>(null);
  const debouncedTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const htmlEditorRef = useRef<HTMLTextAreaElement>(null);
  const htmlLineNumbersRef = useRef<HTMLDivElement>(null);

  // Animation setup with GSAP
  useGSAP(() => {
    // Background color animation
    gsap.to(backgroundRef.current, {
      backgroundColor: 'transparent',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Shape 1 animation (Circle)
    gsap.to(shape1Ref.current, {
      rotate: 360,
      x: 'random(-250, 250)',
      y: 'random(-250, 250)',
      scale: 'random(0.8, 1.2)',
      duration: 'random(4, 6)',
      repeat: -1,
      ease: 'none',
      yoyo: true,
    });

    // Shape 2 animation (Square)
    gsap.to(shape2Ref.current, {
      rotate: -360,
      x: 'random(-250, 250)',
      y: 'random(-100, 450)',
      scale: 'random(0.5, 1.5)',
      duration: 'random(2, 8)',
      repeat: -1,
      ease: 'power1.inOut',
      yoyo: true,
    });

    // Shape 3 animation (Triangle)
    gsap.to(shape3Ref.current, {
      rotate: 'random(-360, 360)',
      x: 'random(-175, 175)',
      y: 'random(-175, 175)',
      scale: 'random(0.7, 1.3)',
      duration: 'random(2, 12)',
      repeat: -1,
      ease: 'sine.inOut',
      yoyo: true,
    });
  }, []);

  // Debounced preview update function
  const updatePreviewDebounced = useCallback(() => {
    if (debouncedTimeoutRef.current) {
      clearTimeout(debouncedTimeoutRef.current);
    }

    setIsPreviewLoading(true);

    debouncedTimeoutRef.current = setTimeout(() => {
      try {
        let fullHtml = htmlCode;

        // Ensure proper HTML structure
        if (!fullHtml.includes('<html>') && !fullHtml.includes('<!DOCTYPE html>')) {
          fullHtml = `<html><head></head><body>${fullHtml}</body></html>`;
        }

        // Validate HTML
        const validation = ErrorHandler.validateHtml(fullHtml);
        setValidationErrors(validation.errors);

        if (validation.isValid) {
          // Sanitize HTML for security
          const sanitizedHtml = sanitizeHtml(fullHtml);
          setPreviewHtml(sanitizedHtml);
        } else {
          setPreviewHtml(`<div class="text-red-500 p-4">HTML validation errors detected: ${validation.errors.join(', ')}</div>`);
        }
      } catch (error) {
        const errorMessage = ErrorHandler.handleError(error);
        setPreviewHtml(`<div class="text-red-500 p-4">${errorMessage}</div>`);
      } finally {
        setIsPreviewLoading(false);
      }
    }, 500); // 500ms debounce
  }, [htmlCode]);

  // Update preview when code changes
  useEffect(() => {
    updatePreviewDebounced();
  }, [htmlCode, updatePreviewDebounced]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debouncedTimeoutRef.current) {
        clearTimeout(debouncedTimeoutRef.current);
      }
    };
  }, []);

  // Synchronize scrolling between HTML editor and line numbers
  useEffect(() => {
    const htmlEditor = htmlEditorRef.current;
    const htmlLineNumbers = htmlLineNumbersRef.current;

    if (htmlEditor && htmlLineNumbers) {
      const handleScroll = () => {
        htmlLineNumbers.scrollTop = htmlEditor.scrollTop;
      };

      htmlEditor.addEventListener('scroll', handleScroll);
      return () => {
        htmlEditor.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);



  // Handler for updating HTML code state on textarea change
  const handleHtmlChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };






  // Initialize with sample template
  useEffect(() => {
    if (!htmlCode) {
      setHtmlCode(predefinedHtml);
    }
  }, []); // Only run once on mount

  return (
    <div className="flex flex-col min-h-screen px-4 py-6 relative z-10">
      {/* Background and Shapes */}
      <div ref={backgroundRef} className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Circles */}
        <div
          ref={shape1Ref}
          className="absolute top-1/4 left-1/6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-600/30 blur-sm"
        />
        {/* Squares */}
        <div
          ref={shape2Ref}
          className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 bg-purple-600/30 blur-sm"
        />

        {/* Triangles */}
        <div
          ref={shape3Ref}
          className="absolute bottom-1/4 right-1/6 w-0 h-0
          border-l-[60px] md:border-l-[100px] border-l-transparent
          border-b-[90px] md:border-b-[150px] border-b-green-600/30
          border-r-[60px] md:border-r-[100px] border-r-transparent blur-sm"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HTML Previewer
          </h1>
          <p className="text-muted-foreground mt-2">Write code and see instant results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Editor */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">HTML Editor</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Write HTML to see live preview</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* HTML Editor */}
                <div className="mb-4">
                  <h3 className="text-lg font-medium">HTML Editor</h3>
                </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="html-editor" className="text-sm font-medium">HTML Code</Label>
                      <span className="text-xs text-muted-foreground">Write HTML to see live preview</span>
                    </div>
                    <div className="code-editor-container rounded-md overflow-hidden border">
                      <div className="code-editor-line-numbers" ref={htmlLineNumbersRef}>
                        {htmlCode.split('\n').map((_, i) => (
                          <div key={i}>{String(i + 1).padStart(3, ' ')}</div>
                        ))}
                        {/* Add an extra line in case the content ends with a newline */}
                        {htmlCode.endsWith('\n') && <div>{String(htmlCode.split('\n').length + 1).padStart(3, ' ')}</div>}
                      </div>
                      <Textarea
                        id="html-editor"
                        ref={htmlEditorRef}
                        value={htmlCode}
                        onChange={handleHtmlChange}
                        placeholder="Enter your HTML code here..."
                        className="code-editor-textarea p-0 text-foreground text-sm md:text-base font-mono min-h-[300px] bg-white dark:bg-gray-900"
                      />
                    </div>
                  </div>



                {/* Validation Errors */}
                {validationErrors.length > 0 && (
                  <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-md">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <h4 className="text-sm font-medium text-destructive">Validation Warnings</h4>
                    </div>
                    <ul className="text-xs text-destructive/80 list-disc pl-5 mt-2 space-y-1">
                      {validationErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

          </div>

          {/* Right Panel - Preview */}
          <div className="flex flex-col gap-4">
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-xl h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Live Preview</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">See your code in action</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {isPreviewLoading && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span>Loading...</span>
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      Real-time
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <ErrorBoundary fallback={<div className="p-4 text-destructive flex items-center justify-center h-full">Preview failed to load</div>}>
                    <iframe
                      ref={previewFrameRef}
                      srcDoc={previewHtml || '<div class="flex items-center justify-center h-full text-muted-foreground"><p>Enter HTML code to see preview</p></div>'}
                      title="HTML Preview"
                      className="w-full h-full min-h-[300px]"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                  </ErrorBoundary>
                </div>

                {/* Stats bar */}
                <div className="mt-3 text-xs text-muted-foreground">
                  Lines: {htmlCode.split('\n').length}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => {
                      setHtmlCode(predefinedHtml);
                    }}
                    className="h-9"
                  >
                    <span>Load Sample</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setHtmlCode('');
                    }}
                    className="h-9"
                  >
                    Clear All
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => navigator.clipboard.writeText(htmlCode)}
                    className="h-9 col-span-2"
                  >
                    Copy HTML
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">How to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0">1</div>
                    <p>Write HTML in the HTML tab to create your document structure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0">2</div>
                    <p>Your code updates in real-time in the preview panel</p>
                  </div>
                  <div className="pt-2 border-t mt-2">
                    <p className="text-xs text-muted-foreground">Tip: Include CSS directly in your HTML using &lt;style&gt; tags</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>HTML Previewer • Real-time code editing • Secure preview</p>
        </div>
      </div>
    </div>
  );
}
