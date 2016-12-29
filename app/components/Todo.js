import React from 'react'
import moment from 'moment'

class Todo extends React.Component {
  renderDate(completed, createdAt, completedAt) {
    let message = 'Created '
    let timestamp = createdAt

    if (completed) {
      message = 'Completed '
      timestamp = completedAt
    }

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
  }

  render() {
    const { id, text, completed, createdAt, completedAt } = this.props

    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{this.renderDate(completed, createdAt, completedAt)}</p>
      </div>
    )
  }
}

export default Todo
