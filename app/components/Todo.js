import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import actions from 'actions'

export class Todo extends React.Component {
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
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props
    let todoClassName = completed ? 'todo todo-completed' : 'todo'

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id))
      }}>
        <div>
          <input type='checkbox' checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{this.renderDate(completed, createdAt, completedAt)}</p>
        </div>
      </div>
    )
  }
}

export default connect()(Todo)
