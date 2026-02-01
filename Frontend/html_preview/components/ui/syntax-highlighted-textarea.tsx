'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface SyntaxHighlightedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  language?: string;
  showLineNumbers?: boolean;
}

const SyntaxHighlightedTextarea = React.forwardRef<HTMLTextAreaElement, SyntaxHighlightedTextareaProps>(
  ({ className, language = 'html', showLineNumbers = true, ...props }, ref) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [value, setValue] = React.useState(props.value || '');

    React.useEffect(() => {
      if (typeof props.value === 'string') {
        setValue(props.value);
      }
    }, [props.value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      props.onChange?.(e);
    };

    return (
      <div className="relative group">
        <textarea
          ref={ref}
          data-slot="textarea"
          className={cn(
            'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-mono',
            'absolute inset-0 z-10 opacity-0 cursor-text',
            className
          )}
          {...props}
          value={value}
          onChange={handleChange}
          onFocus={(e) => {
            setIsEditing(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsEditing(false);
            props.onBlur?.(e);
          }}
        />

        <div
          className={cn(
            'pointer-events-none relative z-0 break-words font-mono text-sm',
            className
          )}
          aria-hidden="true"
        >
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              background: 'transparent',
              overflowX: 'auto',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
            }
          }}
          >
            {value || props.placeholder || ''}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
);

SyntaxHighlightedTextarea.displayName = 'SyntaxHighlightedTextarea';

export { SyntaxHighlightedTextarea };