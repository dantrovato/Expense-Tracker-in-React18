import Category from "../categories/Category";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Item } from "../Item";

interface Props {
  // descriptionArr: string[];
  // amountArr: number[];
  // categoryArr: string[];
  items: Item[];
}

const Table = ({ items }: Props) => {
  const [category, setCategory] = useState("All categories");

  const handleSelect = (value: string) => {
    setCategory(value);
  };

  console.log(items);
  const itemsToDisplay = items.filter((item) => {
    console.log("category: ", category);
    console.log("item.category: ", item.category);
    return category === "All categories" || item.category === category;
  });

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
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
