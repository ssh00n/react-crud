import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const onAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
    toast.dismiss();
    toast.success("항목이 추가되었습니다!");
  };

  const calculateTotalCost = () => {
    return expenses.reduce(
      (total, expense) => total + parseFloat(expense.cost),
      0
    );
  };

  const clearList = () => {
    setExpenses([]);
  };

  return (
    <div className="App">
      <h1 className="title">예산 계산기</h1>
      <div className="content-box">
        <ExpenseForm onAddExpense={onAddExpense}></ExpenseForm>
        <ExpenseList
          expenses={expenses}
          setExpenses={setExpenses}
        ></ExpenseList>
        <Button
          variant="outlined"
          onClick={clearList}
          startIcon={<DeleteIcon />}
          sx={{ color: "black", margin: "10px 0" }}
        >
          목록 비우기
        </Button>
      </div>
      <div className="total-cost">총 지출: {calculateTotalCost()}원</div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        style={{ top: 0 }}
      />
    </div>
  );
}

export default App;
