import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) =>
{
    const [EditingBoxResult, setEditingBoxResult] = useState(0);
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        setEditingBoxResult(0);
        console.log(expenseData);
        props.onAddExpense(expenseData);
        
        

    }

    const createNewExpenseButton = () =>
    {
        
        setEditingBoxResult(1);
    }
    
    const cancelEditingHandler = () =>
    {
        setEditingBoxResult(0);
    }
    

    return (
			<div className="new-expense">
				{EditingBoxResult === 0 && (
					<button onClick={createNewExpenseButton}>
						
						Add a New Person's D'Birth
					</button>
				)}
				{EditingBoxResult > 0 && (
					<ExpenseForm
						onSaveExpenseData={saveExpenseDataHandler}
						cancelEditing={cancelEditingHandler}
					/>
				)}
			</div>
		);
}

export default NewExpense;