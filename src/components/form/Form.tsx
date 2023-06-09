import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(0),
  category: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: FieldValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="text"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        {/* <Category value="">Category</Category> */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
            aria-label="Default select example"
          >
            <option></option>
            <option>Groceries</option>
            <option>Clothing</option>
            <option>House Stuff</option>
            <option>Transport</option>
            <option>Leisure</option>
          </select>
        </div>

        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
