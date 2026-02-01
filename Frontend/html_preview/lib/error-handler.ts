/**
 * Centralized error handling utilities for the HTML Previewer app
 */

export interface ErrorHandlerOptions {
  logToConsole?: boolean;
  showUserMessage?: boolean;
  captureError?: (error: Error) => void;
}

export class ErrorHandler {
  /**
   * Handles application errors gracefully
   * @param error - The error object
   * @param options - Configuration options for error handling
   */
  static handleError(error: unknown, options: ErrorHandlerOptions = {}): string {
    const { logToConsole = true, showUserMessage = true, captureError } = options;

    let errorMessage = 'An unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    // Log to console if requested
    if (logToConsole) {
      console.error('Application Error:', error);
    }

    // Send to error monitoring service if provided
    if (captureError && error instanceof Error) {
      captureError(error);
    }

    // Return user-friendly message
    if (showUserMessage) {
      return this.getUserFriendlyMessage(errorMessage);
    }

    return errorMessage;
  }

  /**
   * Gets a user-friendly error message
   * @param error - Original error message
   * @returns User-friendly error message
   */
  private static getUserFriendlyMessage(error: string): string {
    // Map technical errors to user-friendly messages
    const errorMap: Record<string, string> = {
      'Network Error': 'Unable to connect to the server. Please check your internet connection.',
      'Failed to fetch': 'Unable to load the requested content. Please try again.',
      'Invalid HTML': 'The HTML code contains errors that prevent preview. Please check your code.',
      'XSS detected': 'Potentially unsafe content detected and blocked for security reasons.',
    };

    // Check for exact matches first
    if (errorMap[error]) {
      return errorMap[error];
    }

    // Check for partial matches
    for (const [key, value] of Object.entries(errorMap)) {
      if (error.toLowerCase().includes(key.toLowerCase())) {
        return value;
      }
    }

    // Default message for unknown errors
    return 'Something went wrong. Please try again.';
  }

  /**
   * Validates HTML content for common issues
   * @param html - HTML string to validate
   * @returns Validation result
   */
  static validateHtml(html: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check if HTML is empty
    if (!html.trim()) {
      errors.push('HTML content is empty');
    }

    // Check for unclosed tags (basic check)
    const openTags = (html.match(/<(?!\/)([a-zA-Z]+)/g) || []).map(tag => tag.substring(1));
    const closeTags = (html.match(/<\/([a-zA-Z]+)/g) || []).map(tag => tag.substring(2));

    // Simple check for potential unclosed div tags
    const openDivs = html.match(/<(?!\/)div\b/g)?.length || 0;
    const closeDivs = html.match(/<\/div\b/g)?.length || 0;

    if (openDivs > closeDivs) {
      errors.push(`Potential unclosed div tag (${openDivs} opened, ${closeDivs} closed)`);
    }

    // Check for script tags
    if (/<script/i.test(html)) {
      errors.push('Script tags detected - these may be blocked for security reasons');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Logs performance metrics
   * @param metricName - Name of the metric
   * @param value - Value of the metric
   */
  static logPerformance(metricName: string, value: number): void {
    if (typeof window !== 'undefined' && window.performance) {
      // In a browser environment, we can log performance metrics
      console.debug(`${metricName}: ${value}ms`);
    }
  }
}