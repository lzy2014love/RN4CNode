import React, { Component } from 'react'
import { View, Text, Button, ToolbarAndroid, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Header from '../../component/Header.component'
import AppView from '../../component/AppView.component'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <AppView>
        <Header />
      </AppView>
    )
  }
}
