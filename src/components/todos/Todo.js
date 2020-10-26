import React from 'react'

const Todo = props =>{
  console.log('todo');
  return(
  <li>{props.text}</li>
  )
}

export default Todo;