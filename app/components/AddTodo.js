import React from 'react'
import { connect } from 'react-redux'
import actions from 'actions'

export class AddTodo extends React.Component {
  onSubmit(e) {
    e.preventDefault()
    const todoText = this.refs.todoText.value

    if (todoText.length > 0) {
      this.refs.todoText.value = ''
      this.props.dispatch(actions.addTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }

  render() {
    return (
      <div className='container__footer'>
        <form ref='form' onSubmit={(e) => this.onSubmit(e)} className='add-todo'>
          <input type='text' ref='todoText' placeholder='What do you want to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
