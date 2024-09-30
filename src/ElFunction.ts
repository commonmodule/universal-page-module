import DomSelector from "./DomSelector.js";

type ElFunction<TNode> = (
  selector: DomSelector,
  ...children: (TNode | string)[]
) => TNode;

export default ElFunction;
