declare module '*.module.scss' {
  const classes: Record<string, string>; // Любой ключ строки

  export default classes;
}

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export { ReactComponent };
  const src: string;

  export default src;
}
