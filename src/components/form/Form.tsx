import { z } from "zod";

const Form = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
