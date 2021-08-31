import ExpenseDate from "./ExpenseDate";
import React, {useState} from "react";		//all the hooks components starts with use, here its useState
import Card from "../UI/card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);		//initially title = props.title					
								//its basically a array, first item is the varible name that holds the value, 
								//second a function which updates current value and re-executes the function
								//function name should be of the form => set{Varible name with 1st letter caps} EX: here setTitle
								//it should be called only inside the function, one of the hooks concept, 
								//a change in the varable of useState => re runs the whole function and updates the varable in all places 
	 							//when whole thing runs again but, the useState will run only one time ie. for the first time[speaking about initializing]
	const clickHandler = () =>
	{
		setTitle("Updated dude")		//this is how we update it
		console.log(title)
	}
	var getYear = 0;
	var dob = props.date;
	//calculate month difference from current date in time
	var month_diff = Date.now() - dob.getTime();

	//convert the calculated difference in date format
	var age_dt = new Date(month_diff);

	//extract year from date
	var year = age_dt.getUTCFullYear();

	//now calculate the age of the user
	var age = Math.abs(year - 1970);

	
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}  />
			<div className="expense-item__description">
				<h2>{title}</h2>

				<div className="expense-item__price">Age: {age}</div>
				<button onClick={clickHandler}>ChangeTitle</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
