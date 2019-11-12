import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Screen from './screen';
import { RefreshControl, ScrollView } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      /*refreshing: false,*/
    };
  }
  
    async componentDidMount() {
     
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
    this.setState({ isReady: true,});
  }

 
  /*_onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };*/
  

render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      /*<ScrollView 
      contentContainerStyle={{flex: 1}}
      refreshControl={ 
      <RefreshControl 
      refreshing={this.state.refreshing} 
      onRefresh={this._onRefresh} 
      /> 
      } 
    >*/
               <Screen>

               </Screen>

      /*</ScrollView>*/
    );
  }

  
}

