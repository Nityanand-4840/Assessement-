import React, { useState } from "react";
import Category from "./Category";
import AddWidget from "./AddWidget";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 101, name: "Cloud Accounts", text: "Random text 1" },
        { id: 102, name: "Cloud Account Risk Assessment", text: "Random text 2" },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        { id: 201, name: "Top 5 Namespace Specific Alerts", text: "Random text 3" },
        { id: 202, name: "Workload Alerts", text: "Random text 4" },
      ],
    },
  ]);

  const addWidget = (categoryId, widget) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          return { ...category, widgets: [...category.widgets, widget] };
        }
        return category;
      })
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          return { ...category, widgets: category.widgets.filter((widget) => widget.id !== widgetId) };
        }
        return category;
      })
    );
  };

  return (
    <div className="dashboard">
      <AddWidget categories={categories} addWidget={addWidget} />
      {categories.map((category) => (
        <Category key={category.id} category={category} removeWidget={removeWidget} />
      ))}
    </div>
  );
};

export default Dashboard;
