// src/App.js
import React from "react";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import AreaChartComponent from "./components/AreaChartComponent";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Recharts Demo</h1>
      <section className="section">
        <h2>Line Chart</h2>
        <LineChartComponent />
      </section>
      <section className="section">
        <h2>Bar Chart</h2>
        <BarChartComponent />
      </section>
      <section className="section">
        <h2>Pie Chart</h2>
        <PieChartComponent />
      </section>
      <section className="section">
        <h2>Area Chart</h2>
        <AreaChartComponent />
      </section>
    </div>
  );
};

export default App;
