import DomSelector from "./DomSelector.js";

type ElFunction<TNode, TChild> = (
  selector: DomSelector,
  ...children: TChild[]
) => TNode;

export default ElFunction;
