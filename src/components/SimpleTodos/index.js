import {Component} from 'react'
import '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}
  render() {
    const {todoList} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1 className="main-heading">Sipmle Todos</h1>
          <ul>
            {todoList.map(eachTodo => (
              <TodoItem todoDetails={eachTodo} key={eachTodo.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
