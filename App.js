import React from 'react';
import {Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component{
  render(){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home!!!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component{
  render(){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'baseline'}}>
      <Text>Settings !!!!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(//createBottomTabNavigator가 위에 적힌 {HomeScreen 및 SettingsScreen}을 가져온다.
  {Home : HomeScreen,
  Settings : SettingsScreen },
//마찬가지로 () <--가 닫히지 않았으므로 아래의 defaultNavigationOptions역시 createBottomTabNavigator의 값으로 받아온다.
  {defaultNavigationOptions :({navigation}) => ({ //defaultNavigationOptions 안에서도 navigation값을 부르는데 이 값은 32번째 줄의
    tapBarIcon : ({focused,horizontal,tinColor}) => {//navigation.state;의 값을 각각 받은 tapBarIcon안의 {focused,horizontal,tinColor}를 받는다.
      const {routName} = navigation.state; // 젠장 내가 써놓고도 햇갈릴 정도로 더럽게 복잡하네....
    }



  })
  }
)