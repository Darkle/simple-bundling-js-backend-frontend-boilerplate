// @flow
// @flow-ignore-line
if (module.hot) module.hot.accept()
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/index.css'

const mountNode = document.getElementById('app')

mountNode && ReactDOM.render(<h1>Hello</h1>, mountNode)
