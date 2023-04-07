import React from "react";

interface Props {
  value: string;
  onSelecta: () => void;
  // onSelect: (event: React.SyntheticEvent) => void;
}

const Category = ({ value, onSelecta }: Props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"></label>
        <select
          id="category"
          className="form-select"
          aria-label="Default select example"
          onChange={onSelecta}
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
