import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input } from "@mui/material";

export default function ExpenseForm({ onAddExpense }) {
  const [expenseItem, setExpenseItem] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  const handleItemChange = (event) => {
    setExpenseItem(event.target.value);
  };

  const handleCostChange = (event) => {
    setExpenseCost(event.target.value);
  };

  const handleSubmit = () => {
    if (!expenseItem || !expenseCost) {
      return;
    }
    onAddExpense({ item: expenseItem, cost: expenseCost });
    console.log(`item: ${expenseItem}, cost: ${expenseCost}`);

    setExpenseItem("");
    setExpenseCost("");
  };

  const isFormEmpty = () => {
    return expenseItem.trim() === "" || expenseCost.trim() === "";
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="expense-item">지출 항목</InputLabel>
        <Input
          id="expense-item"
          placeholder="예)렌트비"
          value={expenseItem}
          onChange={handleItemChange}
        ></Input>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="expense-cost">비용</InputLabel>
        <Input
          id="expense-cost"
          placeholder="0"
          value={expenseCost}
          onChange={handleCostChange}
        ></Input>
      </FormControl>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={isFormEmpty()}
      >
        제출
      </Button>
    </Box>
  );
}
