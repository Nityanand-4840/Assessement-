import React, { useState } from "react";
import "../styles/AddWidget.css";
import { Plus } from "lucide-react"; // Assuming you're using lucide-react for icons

const AddWidget = ({ categories, addWidget }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(), // For simplicity, using timestamp as ID
      name: widgetName,
      text: widgetText,
    };
    addWidget(parseInt(selectedCategory), newWidget);
    // Reset the form fields after adding a widget
    setSelectedCategory("");
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <h3>Add Widget</h3>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input 
          type="text" 
          placeholder="Widget Name" 
          value={widgetName} 
          onChange={(e) => setWidgetName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Widget Text" 
          value={widgetText} 
          onChange={(e) => setWidgetText(e.target.value)} 
        />
        <button className="add-widget-button" onClick={handleAddWidget}>
          <Plus size={16} /> Add Widget
        </button>
      </div>
    </div>
  );
};

export default AddWidget;
