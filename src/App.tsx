import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

function App() {
  const [descriptionArr, setDescriptionArr] = useState<string[]>([]);
  const [amountArr, setAmountArr] = useState<number[]>([]);
  const [categoryArr, setCategoryArr] = useState<string[]>([]);
  const handleSubmit = (data: FieldValues) => {
    const { description, amount, category } = data;
    const newDescriptionArr = [...descriptionArr];
    const newAmountArr = [...amountArr];
    const newCategoryArr = [...categoryArr];
    newDescriptionArr.push(description);
    newAmountArr.push(amount);
    newCategoryArr.push(category);
    setDescriptionArr(newDescriptionArr);
    setAmountArr(newAmountArr);
    setCategoryArr(newCategoryArr);
  };
  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit} />
      <Table
        descriptionArr={descriptionArr}
        amountArr={amountArr}
        categoryArr={categoryArr}
      />
    </div>
  );
}

export default App;
