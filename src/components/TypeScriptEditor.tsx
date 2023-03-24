import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import type React from "react";

type TextEditorProps = {
  setValue?: (value: string) => void;
  readonly?: boolean;
};

const TypeScriptEditor: React.FC<TextEditorProps> = ({
  setValue,
  readonly,
}) => {
  return (
    <>
      <AceEditor
        placeholder="Please type or copy paste the TypeScript Type"
        theme="monokai"
        mode="typescript"
        fontSize={14}
        showPrintMargin
        showGutter
        highlightActiveLine
        setOptions={{ tabSize: 2 }}
        onChange={setValue}
        readOnly={readonly}
      />
    </>
  );
};

export default TypeScriptEditor;
