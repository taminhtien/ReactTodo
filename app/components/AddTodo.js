import React from 'react'

class AddTodo extends React.Component {
  onSubmit(e) {
    e.preventDefault()
    const todoText = this.refs.todoText.value

    if (todoText.length > 0) {
      this.refs.todoText.value = ''
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todoText.focus()
    }
  }

  render() {
    return (
      <div>
        <form ref='form' onSubmit={(e) => this.onSubmit(e)} className='add-todo'>
          <input type='text' ref='todoText' placeholder='What do you want to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
