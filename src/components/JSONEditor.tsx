import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import type React from "react";

type TextEditorProps = {
  setValue?: (value: string) => void;
  readonly?: boolean;
};

const JSONEditor: React.FC<TextEditorProps> = ({ setValue, readonly }) => {
  return (
    <>
      <AceEditor
        placeholder="Please type or copy paste the JSON data you would like to convert to TS type"
        theme="monokai"
        mode="json"
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

export default JSONEditor;
