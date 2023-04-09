import React from "react";

interface Props {
  value: string;
  onSelect: (value: string) => void;
}

const Category = ({ value, onSelect }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onSelect(value);
    console.log(value);
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"></label>
        <select
          id="category"
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
          value={value}
        >
          <option value="All categories">All categories</option>
          <option value="2CB">2CB</option>
          <option value="Molly">Molly</option>
          <option value="Charlie">Charlie</option>
          <option value="Ket">Ket</option>
        </select>
      </div>
    </>
  );
};

export default Category;
