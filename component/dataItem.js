import React, { Component } from 'react';
import { ListItem, Left, Thumbnail, Body, Text, Button, Right} from 'native-base';
import { Alert, View, ActivityIndicator } from 'react-native'; 
import TimeAgo from './time';


export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
        const {url, title} = this.data;
        this.props.onPress({url, title});
    }

    render() {
        return(

            <ListItem thumbnail>
        <Left>
            <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://pngimage.net/grey-png-1/' }} />
        </Left>
          <Body>
        <Text numberOfLines={2} onPress={this.handlePress}>{this.data.title}</Text>
            <Text note numberOfLines={1}>{ this.data.description }</Text>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 6, marginBottom: 2}}>
                <Text note>{this.data.source.name}</Text>
                <TimeAgo time={this.data.publishedAt}/>
            </View>
          </Body>
        <Right>
        <Button transparent onPress={this.handlePress}>
            <Text style={{color: '#000000'}}>Leggi</Text>
        </Button>
    </Right>
</ListItem>
        );
    }
}