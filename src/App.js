import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
	{
		id: "e1",
		name: "John",
		age: 0,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		name: "Han",
		age: 0,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		name: "Darwin",
		age: 0,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		name: "Brad",
		age: 0,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(initialExpenses);
	const addExpenseHandler = (enteredExpenseData) =>
	{
		
		setExpenses( previousData => {
			return [enteredExpenseData, ...previousData];
		} );
		
	};

	return (
		<div>
			<NewExpense onAddExpense = {addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
