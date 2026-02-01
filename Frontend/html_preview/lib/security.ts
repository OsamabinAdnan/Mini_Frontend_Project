import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param html - Raw HTML string to sanitize
 * @returns Sanitized HTML string
 */
export const sanitizeHtml = (html: string): string => {
  // Configure DOMPurify with safe tags and attributes
  const config: DOMPurify.Config = {
    ALLOWED_TAGS: [
      'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio',
      'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button',
      'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content',
      'data', 'datalist', 'dd', 'del', 'detals', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt',
      'element', 'em', 'embed',
      'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
      'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex',
      'kbd', 'keygen',
      'label', 'legend', 'li', 'link', 'listing',
      'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'multicol',
      'nav', 'nobr', 'noembed', 'noframes', 'noscript',
      'object', 'ol', 'optgroup', 'option', 'output',
      'p', 'param', 'picture', 'plaintext', 'pre', 'progress',
      'q',
      'rp', 'rt', 'ruby',
      's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup',
      'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt',
      'u', 'ul',
      'var', 'video', 'wbr',
      // SVG elements
      'svg', 'animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'switch', 'symbol', 'text', 'textPath', 'tspan', 'use', 'view',
    ],
    ALLOWED_ATTR: [
      'accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border',
      'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols',
      'colspan', 'coords', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype',
      'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id',
      'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength',
      'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap',
      'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup',
      'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan',
      'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang',
      'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'target', 'title',
      'type', 'usemap', 'valign', 'value', 'width', 'wrap',
      // SVG attributes
      'accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'calcmode', 'cap-height', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'show', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'surfaceScale', 'systemlanguage', 'tablevalues', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan',
      // ARIA attributes
      'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-expanded', 'aria-hidden', 'aria-pressed', 'aria-selected', 'aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-invalid', 'aria-required', 'aria-multiline', 'aria-readonly', 'aria-owns', 'aria-activedescendant', 'aria-autocomplete', 'aria-haspopup', 'aria-level', 'aria-posinset', 'aria-setsize', 'aria-sort', 'aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-valuetext',
    ],
    FORBID_TAGS: ['script', 'object', 'embed', 'style'],
    FORBID_ATTR: ['on*', 'data:', 'srcdoc'],
    KEEP_CONTENT: true,
  };

  return DOMPurify.sanitize(html, config);
};

/**
 * Creates a safe iframe for previewing HTML content
 * @param html - HTML content to preview
 * @returns Safe iframe element
 */
export const createSafePreviewIframe = (html: string): string => {
  const sanitizedHtml = sanitizeHtml(html);

  // Create a complete HTML document with proper headers
  const fullDocument = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body {
            margin: 0;
            padding: 1rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            overflow: auto;
          }
        </style>
      </head>
      <body>${sanitizedHtml}</body>
    </html>
  `;

  // Convert to data URI
  const dataUri = `data:text/html;charset=utf-8,${encodeURIComponent(fullDocument)}`;

  return dataUri;
};