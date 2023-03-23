import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type SyntaxHighlighterProps = {
  code: string;
};

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code }) => {
  return (
    <div style={{ width: 500 }}>
      <CopyToClipboard text={code} onCopy={(text) => console.log(text)}>
        <button>Copy This Code</button>
      </CopyToClipboard>
      <ReactSyntaxHighlighter language="typescript" style={darcula}>
        {code}
      </ReactSyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlighter;
