import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Item } from "./components/Item";

// interface Item {
//   description: string;
//   amount: number;
//   category: string;
// }

function App() {
  // const [descriptionArr, setDescriptionArr] = useState<string[]>([]);
  // const [amountArr, setAmountArr] = useState<number[]>([]);
  // const [categoryArr, setCategoryArr] = useState<string[]>([]);

  const [items, setItems] = useState<Item[]>([]);

  const handleSubmit = (data: FieldValues) => {
    const { description, amount, category } = data;
    const newItems = [...items];
    newItems.push({ description, amount, category });
    setItems(newItems);

    // const newDescriptionArr = [...descriptionArr];
    // const newAmountArr = [...amountArr];
    // const newCategoryArr = [...categoryArr];
    // newDescriptionArr.push(description);
    // newAmountArr.push(amount);
    // newCategoryArr.push(category);
    // setDescriptionArr(newDescriptionArr);
    // setAmountArr(newAmountArr);
    // setCategoryArr(newCategoryArr);
  };
  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit} />
      <Table
        // descriptionArr={descriptionArr}
        // amountArr={amountArr}
        // categoryArr={categoryArr}
        items={items}
      />
    </div>
  );
}

export default App;
