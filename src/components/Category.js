import React from "react";
import "../styles/Category.css";

const Category = ({ category, removeWidget }) => {
  return (
    <div className="category">
      <h2 className="category-title">{category.name}</h2>
      <div className="widget-container">
        {category.widgets.map((widget) => (
          <div key={widget.id} className="widget-card">
            <h3 className="widget-title">{widget.name}</h3>
            <p className="widget-text">{widget.text}</p>
            <button className="remove-widget-button" onClick={() => removeWidget(category.id, widget.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
