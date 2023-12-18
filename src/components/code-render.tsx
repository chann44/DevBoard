import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
export function CodeRender() {
  const codeString = "(num) => num + 1";
  return (
    <div className="border">
      <SyntaxHighlighter showLineNumbers language="javascript" style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
