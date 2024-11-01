export default function el(selector, ...children) {
    return el.impl(selector, ...children);
}
el.impl = (elementOrSelector, ...children) => {
    throw new Error("Not implemented");
};
//# sourceMappingURL=el.js.map