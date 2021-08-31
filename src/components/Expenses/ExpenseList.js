import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"

const ExpenseList = (props) =>
{
    if(props.items.length == 0)
    {
        return <h2 className="expenses-list__fallback">NONE</h2>
    }
    return(
           <ul className = "expenses-list">
				{props.items.map((expense) => (
					<ExpenseItem
						key = {expense.id}
						title={expense.name}
						age={expense.age}
						date={expense.date}
					/>
					
				))}
            </ul>
            
    )
}

export default ExpenseList;