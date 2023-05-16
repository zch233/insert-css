export interface SuperHTMLStyleElement extends HTMLStyleElement {
  styleSheet?: CSSStyleSheetWithCssText;
}

interface CSSStyleSheetWithCssText extends CSSStyleSheet {
  cssText?: string;
}

export interface Options {
  replace?: boolean;
  container?: HTMLElement;
  prepend?: boolean;
}