import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleSubmit = (data: FieldValues) => {
    const { description, amount, category } = data;
    const newItems = [...items];
    newItems.push({ description, amount, category });
    setItems(newItems);
  };

  const handleDelete = (item: Item) => {
    const index = items.indexOf(item);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit} />
      <Table onDelete={handleDelete} items={items} />
    </div>
  );
}

export default App;
