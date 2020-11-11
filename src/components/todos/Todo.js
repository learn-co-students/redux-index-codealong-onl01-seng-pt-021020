//this is presentational, it will actually show the todos

import React from 'react'

const Todo = props => {
  return(
    <li>{props.text}</li>
  );
};

export default Todo;
