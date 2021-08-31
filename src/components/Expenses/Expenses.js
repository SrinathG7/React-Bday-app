import React, {useState} from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
	const [expenseYear, setExpenseYear] = useState('2021');
	

	const expenseYearHandler = (enteredExpenseYear) =>
	{
		const expenseYear = enteredExpenseYear;
		console.log("Its expense js dude")
		console.log(expenseYear);
		setExpenseYear(expenseYear)
	}

	const filterHandler = props.items.filter(expense => {
		const year = expense.date.getFullYear().toString();
		return year === expenseYear;
	});
	
	

	return (
		<li>
			<Card className="expenses">
				
				 <ExpensesFilter
					onSaveExpenseYear={expenseYearHandler}
					currentEnteredExpenseYear={expenseYear}
					
				/> 
				<ExpensesChart expenses = {filterHandler} />
				<ExpenseList items = {filterHandler}/>
				
			</Card>
		</li>
	);
}

export default Expenses;
