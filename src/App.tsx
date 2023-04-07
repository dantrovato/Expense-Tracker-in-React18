import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

function App() {
  const [description, setDescription] = useState([]);
  const [amount, setAmount] = useState([]);
  const [category, setCategory] = useState([]);
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="m-3">
      <Form />
      <Table />
    </div>
  );
}

export default App;
