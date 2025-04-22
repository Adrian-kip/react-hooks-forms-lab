// src/components/ItemForm.js
import React, { useState } from 'react';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: Math.random().toString(36).substr(2, 9),
      name,
      category
    });
    setName(""); // Reset form
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label htmlFor="name-input">
        Name:
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          data-testid="name-input"
        />
      </label>

      <label htmlFor="category-select">
        Category:
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="category-select"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;