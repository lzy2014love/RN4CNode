/*
 * @Author: lzy
 * @Date: 2017-11-30 00:33:51
 * @Last Modified by: lzy
 * @Last Modified time: 2017-11-30 00:34:28
 */
import React, { Component } from 'react'
import { Provider } from 'redux'
import config from './config'
import Navigator from './navigator'
import store from './store'

export default class App extends Component {

  render() {
    return (
      // <Provider >
      <Navigator ></Navigator>
      // </Provider>
    )
  }
}
