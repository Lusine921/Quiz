import React from "react";
import Layout from "./Hoc/Layout";
import Quiz from "./Container/Quiz/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
