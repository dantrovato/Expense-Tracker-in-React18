import React from "react";

interface Props {
  children: string;
  selected: string;
}

const Category = ({ children, selected }: Props) => {
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
          <option selected>{selected}</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
};

export default Category;
