import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Grid from "@material-ui/core/Grid";

export function Layout({ aside, children, header }) {
  return (
    <div style={{ padding: 100 }}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>{header}</div>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={4}>
          {aside}
        </Grid>
        <Grid item xs={4}>
          {children}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

export function Code({ children, language, size }) {
  return (
    <div style={size ? { fontSize: size } : {}}>
      <SyntaxHighlighter
        language={language || "javascript"}
        style={monokaiSublime}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export function B({ children }) {
  return <b style={{ color: "yellow" }}>{children}</b>;
}

export function N({ children }) {
  return (
    <b style={{ display: "block", marginTop: "1rem", color: "lightblue" }}>
      {children}
    </b>
  );
}

export function Book({ children }) {
  return (
    <div
      style={{
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        maxWidth: "40%",
        textAlign: "center"
      }}
    >
      <i>{children}</i>
    </div>
  );
}
