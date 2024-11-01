import DomSelector from "./DomSelector.js";
import ElementOrSelector from "./ElementOrSelector.js";
import ElementProperties from "./ElementProperties.js";
import InferElementType from "./InferElementType.js";

export type DomChild<EOS extends ElementOrSelector = ElementOrSelector> =
  | ElementProperties<InferElementType<EOS>>
  | string
  | undefined;

export default function el<S extends DomSelector, RT>(
  selector: S,
  ...children: DomChild<S>[]
): RT {
  return el.impl(selector, ...children);
}

el.impl = (
  elementOrSelector: any,
  ...children: any
): any => {
  throw new Error("Not implemented");
};
