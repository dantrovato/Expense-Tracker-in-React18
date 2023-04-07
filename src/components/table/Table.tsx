import Category from "../categories/Category";
import { useState } from "react";

interface Props {
  descriptionArr: string[];
  amountArr: number[];
  categoryArr: string[];
}

const Table = ({ descriptionArr, amountArr, categoryArr }: Props) => {
  const [category, setCategory] = useState("All categories");
  const onSelect = () => {
    console.log("selected");
  };

  return (
    <>
      <Category onSelecta={onSelect} value={category}></Category>
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
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
