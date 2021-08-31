import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) =>
{                                                            //we can have multiple state inside a component
    const [enteredTitle, setEnteredTitle] = useState('');   //varable to store the datas
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');     //reason for giivng cotes => see amountChange function

                            //now this uses more useState, we can also do it in single useState
    // const [userInput, setUserInput] = useState({    //here insted of passing string, we pass a object of datas
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''

    // });

                            
    const titleChangeHandle = (event) =>         //here we get the input value through a object => event{object}
    {
			//inside event - target - value is present, every time value changes this function runs again
			setEnteredTitle(event.target.value);
			//...userInput => is for writting all the useState datas, at last we update one varible data

			//  setUserInput({                          //this is how we update, by updating we replace all the existing useState so we use ...userInput

			//     ...userInput,
			//     enteredTitle : event.target.value
			// })
		//
            // in above  //here we have a problem of getting previously updated state => can cause problems sharing,(get outdated value)
            //do like this: 

            // setUserInput( (prevState) =>
            // {
            //     return 
            //     { ...prevState, enteredTitle : event.target.value };
            // });


			// console.log(event.target.value);
		};

    const amountChangeHandle = (event) =>
    {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
        // console.log(event.target.value);            //it will return a number in the form of string
    }
    const dateChangeHandle = (event) => {
			setEnteredDate(event.target.value);
            // setUserInput({
            //     ...userInput,
            //     enteredDate : event.target.value
            // })
			// console.log(event.target.value);
		};

        //extra my work
        const clearHandler = () =>
        {
            props.cancelEditing();
        }
        



        const submitHandler = (
				event //when we try to click submit the page gets refreshed => which tries to hand submit at backed
			) => {
				//here we don't do that so we stop it happening by
				event.preventDefault();
				const expenseData = {
					name: enteredTitle, 
					amount: enteredAmount,
					date: new Date(enteredDate),
				};

				//stoing data inside object
				//after submission empties the whole input boxes

				//after reading all => we gona send data from child to parent by passing data as a argument to a function in the parent
				//first get the function using props, access and attatch the object to it
                //calling a parent function from child component
				//using props we brought the function
                props.onSaveExpenseData(expenseData);       //its the function which carries object
				setEnteredTitle("");
				setEnteredAmount("");
				setEnteredDate("");
			};

        //2-way binding => get the value and give again the value to the input
        

    
    return (
			<form onSubmit = {submitHandler}>
				<div>
					<div className="new-expense__controls">
						<div className="new-expense__controls">
							<label>Name</label>
							<input type="text" value={enteredTitle} onChange={titleChangeHandle }/>
						</div>
						
						<div className="new-expense__controls">
							<label>Date Of Birth</label>
							<input type="date" min="2019-01-01" value={enteredDate} onChange={dateChangeHandle} max="2021-8-29" />
						</div>
					</div>
					<div className="new-expense_actions">
                        <button onClick={clearHandler}>Clear All</button>
						<button type="submit">Add</button>
					</div>
				</div>
			</form>
		);
}

export default ExpenseForm;