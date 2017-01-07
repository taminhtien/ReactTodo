import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import { TodoSearch } from 'TodoSearch'

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'Check email'
    const spy = expect.createSpy()
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

    todoSearch.refs.searchText.value = searchText

    TestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith({
      type: 'SET_SEARCH_TEXT',
      searchText
    })
  })

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const spy = expect.createSpy()
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

    todoSearch.refs.showCompleted.checked = true

    TestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_SHOW_COMPLETED'
    })
  })
})
