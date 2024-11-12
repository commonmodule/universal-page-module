import DomSelector from "./DomSelector.js";
import ElementOrSelector from "./ElementOrSelector.js";
import ElementProperties from "./ElementProperties.js";
import InferElementType from "./InferElementType.js";
export type DomChild<EOS extends ElementOrSelector = ElementOrSelector> = ElementProperties<InferElementType<EOS>> | string | undefined;
declare function el<S extends DomSelector, RT>(selector: S, ...children: DomChild<S>[]): RT;
declare namespace el {
    var impl: (elementOrSelector: any, ...children: any) => any;
}
export default el;
//# sourceMappingURL=el.d.ts.map