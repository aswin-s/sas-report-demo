import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { registerDataDrivenContent } from "@sassoftware/va-report-components";

const App = () => {
  const registerContent = () => {
    const ddcHandle = registerDataDrivenContent(
      {
        authenticationType: "credentials",
        url: "[REPORT_URL]",
        reportUri: "[URI]",
        objectName: "[OBJECT_NAME]"
      },
      (message: any) => {
        if (message && message.rowCount >= 0) {
          const resultName = message.resultName;
          const selectedIndex = message.data.findIndex(
            (value: any) => value[0] === "München"
          );
          selectedIndex >= 0 &&
            ddcHandle.dispatch({
              resultName,
              selections: [{ row: selectedIndex }]
            });
        }
      }
    );
  };

  useEffect(() => {
    registerContent();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
