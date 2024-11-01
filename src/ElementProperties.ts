import ElementOrSelector from "./ElementOrSelector.js";
import InferElementType from "./InferElementType.js";

type ElementProperties<EOS extends ElementOrSelector> =
  & Partial<Omit<InferElementType<EOS>, "style">>
  & { style?: Partial<CSSStyleDeclaration> };

export default ElementProperties;
