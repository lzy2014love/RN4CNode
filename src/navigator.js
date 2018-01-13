import { Dimensions, Alert } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from './page/Home'
import Mine from './page/Mine'

export const deviceWidth = Dimensions.get('window').width // 设备的宽度
export const deviceHeight = Dimensions.get('window').height // 设备的高度

const routeConfigMap = {
  Home: { screen: Home },
  Mine: { screen: Mine }
}

const drawerConfig = {
  drawerWidth: deviceWidth * 0.86,
  drawerPosition: 'left',
  contentOptions: {
    initialRouteName: 'Home', // 默认页面组件
    activeItemKey: 'Notifications',
    labelStyle: {
      // 标签样式
      height: 30
    },
    activeTintColor: 'white', // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666', // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {
      // 样式
      marginVertical: 0
    }
  }
}

const Navigator = DrawerNavigator(routeConfigMap, drawerConfig)
export default Navigator
