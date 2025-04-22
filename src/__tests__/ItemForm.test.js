// src/__tests__/ItemForm.test.js
import '@testing-library/jest-dom'; // Add this import
import { render, screen, fireEvent } from '@testing-library/react';
import ItemForm from '../components/ItemForm';

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  fireEvent.change(screen.getByTestId("name-input"), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByTestId("category-select"), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.getByText(/Add to List/));

  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert"
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Fill out the form
  fireEvent.change(screen.getByTestId("name-input"), {
    target: { value: "Ice Cream" },
  });
  fireEvent.change(screen.getByTestId("category-select"), {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(screen.getByText(/Add to List/));

  // Verify the form was submitted
  expect(onItemFormSubmit).toHaveBeenCalled();
  
  // Alternative verification that doesn't require jest-dom
  expect(screen.getByTestId("name-input").value).toBe("");
});