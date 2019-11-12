import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import { FlatList, RefreshControl, ScrollView } from 'react-native';

class TabsExample extends Component {
 
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#333'}} hasTabs >
        <Left style={{flex: 1}}/>
          <Body style={{flex: 3}}>
            <Title style={{alignSelf: "center"}}>JOJO 
            </Title>
          </Body>
            <Right style={{flex: 1}}/>
        </Header>
       <Tabs tabBarUnderlineStyle={{backgroundColor: '#ecf0f1'}}>
          <Tab heading="SPORT" tabStyle={{ backgroundColor: '#333'}} activeTabStyle={{backgroundColor:'#333'}} textStyle={{color: '#bdc3c7'}} activeTextStyle={{color: '#ecf0f1'}}>
            <Tab1 />
          </Tab>
          <Tab heading="BUSINESS" tabStyle={{ backgroundColor: '#333'}} activeTabStyle={{backgroundColor:'#333'}} textStyle={{color: '#bdc3c7'}} activeTextStyle={{color: '#ecf0f1'}}>
            <Tab2 />
          </Tab>
        </Tabs>
       
      </Container>
    );
  }
}

export default TabsExample;