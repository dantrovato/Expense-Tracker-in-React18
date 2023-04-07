import React from "react";

interface Props {
  children: string;
  value: string;
}

const Category = ({ children, value }: Props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          {children}
        </label>
        <select
          id="category"
          className="form-select"
          aria-label="Default select example"
        >
          <option>{value}</option>
          <option>2CB</option>
          <option>Molly</option>
          <option>Charlie</option>
          <option>ket</option>
        </select>
      </div>
    </>
  );
};

export default Category;
