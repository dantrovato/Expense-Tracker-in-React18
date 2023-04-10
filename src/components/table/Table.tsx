import Category from "../categories/Category";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Item } from "../Item";

interface Props {
  items: Item[];
  onDelete: (item: Item) => void;
}

const Table = ({ items, onDelete }: Props) => {
  const [category, setCategory] = useState("All categories");

  const handleSelect = (value: string) => {
    setCategory(value);
  };

  const handleDelete = (item: Item) => {
    onDelete(item);
  };

  const itemsToDisplay = items.filter((item) => {
    console.log("category: ", category);
    console.log("item.category: ", item.category);
    return category === "All categories" || item.category === category;
  });

  const getTotal = () => {
    let total = 0;
    items.forEach((item) => (total += item.amount));
    return total;
  };

  return (
    <>
      <Category onSelect={handleSelect} value={category}></Category>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>£{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>£{getTotal()}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
