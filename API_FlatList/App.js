//import * as React from 'react';
import React, { Component } from 'react';
import { Text, View, StyleSheet,FlatList ,SafeAreaView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default class App extends Component 
{
  state = {
        data: [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]
,
results : [],
    };
  
  componentDidMount(){
     fetch("https://randomuser.me/api/?results=100&inc=name").then(data=>data.json()).then(data2=>{
       console.log(data2)
      // this.state.results=data2.results
       this.setState({ results: data2.results })
     })
  }
  render() {
return (
    <SafeAreaView >
      {this.state.results.length != 0 ?<FlatList
        data={this.state.results}
        renderItem={({ item})=>{
          return <Text>{item.name.title } {item.name.first} {item.name.last}</Text>
        }
        }
        keyExtractor={item => item.id}
      />:null} 
    </SafeAreaView>
  );
}
    }



