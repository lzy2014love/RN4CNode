import styled from 'styled-components/native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styledView = styled.View`
  flex: 1;
  height: 30px;
  background-color: red;
  align-items: center;
  justify-content: center;
`

export default class header extends Component {
  render() {
    return (
      <styledView>
        <Icon name="menu" size={26} color="#300" />
        {/* <Text>主页</Text> */}
        <Icon name="notifications" size={26} color="#999" />
      </styledView>
    )
  }
}
