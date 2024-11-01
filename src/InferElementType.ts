import ElementOrSelector from "./ElementOrSelector.js";
import InferElementTypeByTag from "./InferElementTypeByTag.js";

type InferElementType<EOS extends ElementOrSelector> = EOS extends HTMLElement
  ? EOS
  : (
    EOS extends "" ? HTMLDivElement
      : (
        EOS extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[EOS]
          : (
            EOS extends `${infer TT}#${string}` ? InferElementTypeByTag<TT>
              : (
                EOS extends `${infer TT}.${string}` ? InferElementTypeByTag<TT>
                  : HTMLElement
              )
          )
      )
  );

export default InferElementType;
