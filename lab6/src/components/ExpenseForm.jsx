import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { editExpense, addExpense } from "../store";
import { FormControl, InputLabel, FormHelperText } from "@mui/material";
import CustomButton from "./ui/CustomButton/CustomButton";
import TextInput from "./ui/TextInput/TextInput";
import Selection from "./ui/Selection/Selection";

const schema = yup.object().shape({
  description: yup.string().required("Description is required."),
  category: yup.string().required("Category is required."),
  amount: yup
    .number()
    .required("Amount is required.")
    .positive("Amount must be positive."),
  funds: yup
    .number()
    .required("Funds are required.")
    .positive("Funds must be positive."),
});
export const ExpenseForm = ({ expenseToEdit, onEditComplete }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      description: expenseToEdit?.description || "",
      category: expenseToEdit?.category || "",
      amount: expenseToEdit?.amount || "",
      funds: expenseToEdit?.funds || "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const expense = {
      id: expenseToEdit?.id || Date.now(),
      ...data,
      amount: parseFloat(data.amount),
      funds: parseFloat(data.funds),
    };

    if (expenseToEdit) {
      editExpense(expense);
      onEditComplete();
    } else {
      addExpense(expense);
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
        <TextInput
          label="Description"
          type="text"
          width="25%"
          register={register("description")}
          errorMessage={errors.description?.message}
        />
        <TextInput
          label="Amount"
          type="number"
          width="20%"
          register={register("amount")}
          errorMessage={errors.amount?.message}
        />
        <TextInput
          label="Funds (₴)"
          type="number"
          width="20%"
          register={register("funds")}
          errorMessage={errors.funds?.message}
        />

        <FormControl sx={{ width: "20%" }} margin="normal" error={!!errors.category}>
          <InputLabel>Category</InputLabel>
          <Selection
            value={setValue("category")}
            onChangeHandler={(e) => setValue("category", e.target.value)}
            label="Category"
            error={errors.category}
          />
          {errors.category && <FormHelperText>{errors.category.message}</FormHelperText>}
        </FormControl>

        <CustomButton
          submit={true}
          handler={onEditComplete}
          text={expenseToEdit ? "Edit Expense" : "Add Expense"}
          color="primary"
        />
    </form>
  );
};

export default ExpenseForm;
