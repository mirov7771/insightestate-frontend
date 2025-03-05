declare module '*.module.scss' {
  const classes: Record<string, string>; // Любой ключ строки

  export default classes;
}

declare module '*.svg?react' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export { ReactComponent };
  const src: string;

  export default src;
}

declare module '*.svg' {
  const content: string;

  export default content;
}

// src/declarations.d.ts
declare module '*.jpeg' {
  const content: string;

  export default content;
}

declare module '*.jpg' {
  const content: string;

  export default content;
}

declare module '*.png' {
  const content: string;

  export default content;
}

declare module '*.gif' {
  const content: string;

  export default content;
}

declare module '*.webp' {
  const content: string;

  export default content;
}
