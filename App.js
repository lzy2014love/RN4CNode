/*
 * @Author: lzy
 * @Date: 2017-11-30 00:33:51
 * @Last Modified by: lzy
 * @Last Modified time: 2017-11-30 00:34:28
 */
import React, { Component } from 'react'
import SC from 'styled-components/native'
import { Platform } from 'react-native'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,
  Cmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,
  Shake or press menu button for dev menu`
})

const SCView = SC.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ff0;
`
const SCTextWelcome = SC.Text`
  font-size: 35px;
  text-align: center;
  margin: 10px;
`
const SCTextInstructions = SC.Text`
  text-align: center;
  color: #33e;
  margin-bottom: 50px;
  color: #fff;

`

export default class App extends Component {
  render() {
    return (
      <SCView>
        <SCTextWelcome>Welcome to React Native!</SCTextWelcome>
        <SCTextInstructions>To get started, edit App.jshaha</SCTextInstructions>
        <SCTextInstructions>{instructions}</SCTextInstructions>
      </SCView>
    )
  }
}

