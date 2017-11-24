import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tabs from './app/Tabs';

const someRoutes = [
  { key: '2', title: 'Facebook', url:'https://www.facebook.com' },
  { key: '3', title: 'Twitter', url:'https://www.twitter.com' },
  { key: '4', title: 'Apple', url:'https://www.apple.com' },
];
let someIndex = -1;
export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'static', title: 'STATIC', url:'http://www.wcantin.ca' },
      { key: '0', title: 'Google', url:'https://www.google.com' },      
      { key: '1', title: 'Github', url:'https://www.github.com' },      
    ],
  };

  _addRoute = () => {
    this.setState((prevState, props) =>{
      someIndex++;    
      return {
        index: prevState.index++,
        routes: [someRoutes[someIndex],...prevState.routes]
      }
    })
  }

  _removeRoute = () => {
    const route = this.state.routes[this.state.routes.length-1];
    this.setState((prevState, props) =>{
      return {
        index: prevState.index--,        
        routes: prevState.routes.filter(r => r.key !== route.key)
      }
    })
  }

  _handleIndexChange = index => this.setState({ index });

  

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Button title="Add me" onPress={this._addRoute}/>  
          <Button title="Remove me" onPress={this._removeRoute}/>  
        </View>
        <View>
          <Tabs state={this.state} handleIndexChange={this._handleIndexChange} />        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    // flex:1,
    marginTop: 150,
    // height:150,
  }
});