import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import Todo from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call onAddTodo prop with valid data', () => {
    const todoData = {
      id: 11,
      text: 'Test',
      completed: true
    }

    const spy = expect.createSpy()
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)
    const $el = $(ReactDOM.findDOMNode(todo))

    TestUtils.Simulate.click($el[0])
    expect(spy).toHaveBeenCalledWith(todoData.id)
  })
})
