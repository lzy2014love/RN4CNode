import React, { Component } from 'react'
import { View, Text, Button, ToolbarAndroid, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Header from '../../component/Header.component'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  _drawerToggle = () => {
    this.setState({ count: this.state.count + 2 })
  }
  _alert = e => {
    Alert.alert('ss')
  }
  render() {
    return (
      <View>
        <Header>
          <Text>hahaha</Text>
        </Header>
        <View>
          <Icon name="menu" size={26} color="#300" />
          <Text>主页</Text>
          <Icon name="notifications" size={26} color="#999" />
          <TouchableOpacity>
            <Icon.Button name="school" size={36} color="#999" onPress={this._drawerToggle}>
              schoolsssdsdfssfdsfdfsfds
            </Icon.Button>
          </TouchableOpacity>
          <TouchableHighlight onPress={this._alert} underlayColor="#ccc">
            <View style={{ height: 30 }}>
              <Text>我是TouchableWithoutFeedback,单击我</Text>
            </View>
          </TouchableHighlight>
          <Text>您单击了:{this.state.count}次</Text>
        </View>
      </View>
    )
  }
}
