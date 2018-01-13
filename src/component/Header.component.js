import styled from 'styled-components/native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const StyledView = styled.View`
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  background-color: #eee;
`

const StyledText = styled.Text`
  color: red;
`

const StyleIcon = styled.View`
  flex: 1;
  height: 20px;
`

export default class Header extends Component {
  render() {
    return (
      <StyledView>
        <StyleIcon>
          <Icon name="menu" size={30} color="#300" />
        </StyleIcon>
        <StyleIcon>
          <StyledText>主页</StyledText>
        </StyleIcon>
        <StyleIcon>
          <Icon name="notifications" size={30} color="#999" />
        </StyleIcon>
      </StyledView>
    )
  }
}
