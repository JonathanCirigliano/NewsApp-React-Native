import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';
import { Alert, View, ActivityIndicator, Text, ScrollView,RefreshControl } from 'react-native'; 
import { getArticles } from '../servizi/news';
import DataItem from '../component/dataItem'
import Modal from '../component/modal';

// tab Business

export default class Tab2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false, 
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData 
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    })
  }

  componentDidMount() {
    getArticles('business').then(data => {
      this.setState({
        isLoading: false,
        data: data,
        refreshing: false,
      });
    },error => {
      Alert.alert('Error', 'Something went wrong');}
    )
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };
 


  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{flexDirection: 'row', justifyContent:'space-around', padding: 10}}>
        <ActivityIndicator animating={this.state.isLoading} color="#333"/>
      </View>
    ) : (
      <List 
            keyExtractor={(item, index) => index.toString()}
            dataArray={this.state.data}
            renderRow={(item) => {
              return <DataItem onPress={this.handleItemDataOnPress} data={item} />
            }
          }
       />
    )


    return (
      <Container>
        <ScrollView 
          contentContainerStyle={{flex: 1}}
          refreshControl={ 
          <RefreshControl 
          refreshing={this.state.refreshing} 
          onRefresh={this._onRefresh} 
          /> 
          } 
        >   
        <Content  style={{ backgroundColor: '#ecf0f1'}}>
         {view} 
        </Content>
        </ScrollView>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}