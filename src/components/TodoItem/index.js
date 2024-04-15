import './index.css'
const TodoItem = props => {
  const {todoDetails, key} = props
  const {title} = todoDetails
  return (
    <li>
      <p>{title}</p>
      <button>Delete</button>
    </li>
  )
}

export default TodoItem
