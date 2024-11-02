export default function html<RT>(htmlContent: string): RT {
  return html.impl(htmlContent);
}

html.impl = (htmlContent: string): any => {
  throw new Error("Not implemented");
};
