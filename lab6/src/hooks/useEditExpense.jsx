import { useState } from "react";

const useEditExpense = () => {
    const [editingExpense, setEditingExpense] = useState(null);
    
    const handleEdit = (expense) => {
        setEditingExpense(expense);
      };
    
      const handleEditComplete = () => {
        setEditingExpense(null);
      };
      return { editingExpense, handleEdit, handleEditComplete }
}
export default useEditExpense