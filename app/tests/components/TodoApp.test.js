import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import { Provider } from 'react-redux'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

const configureStore = require('configureStore')

import { TodoApp } from 'TodoApp'
import TodoList from 'TodoList'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })
  
  it('should render TodoList', () => {
    const store = configureStore.configure()
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    )

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })
})
