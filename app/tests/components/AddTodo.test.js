import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  it('should call onAddTodo prop with valid data', () => {
    const todoText = 'Check email'
    const spy = expect.createSpy()
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    const $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText

    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(todoText)
  })

  it('should not call onAddTodo prop with invalid data', () => {
    const todoText = ''
    const spy = expect.createSpy()
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    const $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText

    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
