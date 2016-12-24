import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Check mail'
      }
    ]

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todoComponents.length).toBe(todos.length)
  })
})
