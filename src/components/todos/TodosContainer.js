import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

//Now our TodosContainer is mapping over the todos it received from Redux, passing the value of each todo into a child
//component, Todo. Todo in this case doesn't have any Redux related code, and is a regular, functional component.

export default connect()(TodosContainer);


//Now, we aren't worried about dispatching actions here, only getting state from Redux,
//so we'll need to write out a mapStateToProps() function and include it as an argument for connect():

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);

//Now that we have a way to get data from Redux, we can create a presentational component to handle displaying our todos.


//This component just gets data from Redux. It doesn't show or present anything.
