import Category from "../categories/Category";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface Props {
  descriptionArr: string[];
  amountArr: number[];
  categoryArr: string[];
}

const Table = ({ descriptionArr, amountArr, categoryArr }: Props) => {
  const [category, setCategory] = useState("All categories");

  const handleSelect = (value: string) => {
    setCategory(value);
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
          {descriptionArr.map((description, index) => (
            <tr key={index}>
              <td>{description}</td>
              <td>{amountArr[index]}</td>
              <td>{categoryArr[index]}</td>
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
