import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { toast } from "react-toastify";

function ExpenseList({ expenses, setExpenses }) {
  const [editItem, setEditItem] = useState(null);

  const onEdit = (expense) => {
    setEditItem(expense);
  };

  const onSave = (editedItem, editedCost) => {
    const updatedExpenses = expenses.map((exp) => {
      if (exp.item === editItem) {
        return { ...exp, item: editedItem, cost: editedCost };
      }
      return exp;
    });
    setExpenses(updatedExpenses);
    toast.dismiss();
    toast.info("항목이 수정되었습니다!");
  };

  const onDelete = (itemToDelete) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.item !== itemToDelete
    );
    setExpenses(updatedExpenses);
    toast.dismiss();
    toast.error("항목이 삭제되었습니다!");
  };
  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          item={expense.item}
          cost={expense.cost}
          onEdit={onEdit}
          onDelete={onDelete}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
