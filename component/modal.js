import React, { Component } from 'react'
import { Dimensions, WebView, Modal, Share } from 'react-native';
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';


export default class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    

    render() {
        const {showModal, articleData} = this.props;
        const { url } = articleData;
        if( url != undefined) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal} 
                onRequestClose={this.handleClose}   
            >
                <Container style={{margin:15, marginBottom: 0, backgroundColor:"#fff"}}>
                    <Header style={{backgroundColor:'#333'}}>
                        <Left style={{flexGrow: 1}}>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: '#bdc3c7', fontSize: 14}}/>
                            </Button>
                        </Left>
                        <Body style={{flexGrow: 3}}>
                            <Title children={articleData.title} style={{color: '#bdc3c7'}}/>
                        </Body>
                        <Right style={{flexGrow: 1}}/>
                    </Header>
                    <Content contentContainerStyle={{flexGrow: 1}}>
                        <WebView source={{uri:url}} style={{flex: 1}} onError={this.handleClose} startInLoadingState scalesPageToFit 
                        />
                    </Content>
                </Container>
            </Modal>
        );
      } else {
          return null;
      }
    }
}
