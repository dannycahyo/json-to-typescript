import dynamic from "next/dynamic";
import { useState } from "react";
const JSONEditor = dynamic(() => import("@/components/JSONEditor"), {
  ssr: false,
});
const SyntaxHighlighter = dynamic(
  () => import("@/components/SyntaxHighlighter"),
  {
    ssr: false,
  }
);

const JsonToTSPage = () => {
  const [value, setValue] = useState<string>("");
  const [tsValue, setTsValue] = useState<string>("");
  const postJsonData = async () => {
    const response = await fetch("/api/jsontots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jsonData: value }),
    });
    const data = await response.json();
    setTsValue(data.result);
  };
  return (
    <main
      style={{ display: "grid", placeItems: "center", minHeight: "100vvh" }}
    >
      <h1>JSON To TypeScript Type</h1>
      <div style={{ marginTop: 40 }}>
        <JSONEditor setValue={setValue} />
      </div>
      <button
        style={{ marginTop: 10, cursor: "pointer" }}
        onClick={() => postJsonData()}
      >
        Convert
      </button>

      <div style={{ marginTop: 20 }}>
        <SyntaxHighlighter code={tsValue} />
      </div>
    </main>
  );
};

export default JsonToTSPage;
