import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import WebViewer from './WebViewer';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Tabs extends PureComponent {
 

  // _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar scrollEnabled {...props} />;

  _renderScene = ({ route }) => {
    // console.log('RENDER SCEEEEENEEEEE MOFO');
    return (
      <WebViewer url={route.url} />
    );
  }

  // _addRoute = (route) => {
  //   this.setState((prevState, props) =>{
  //     routes: [...prevState.routes, route]
  //   })
  // }

  // _removeRoute = (route) => {
  //   this.setState((prevState, props) =>{
  //     routes: prevState.routes.filter(r => r.key === route.key)
  //   })
  // }

  render() {
    console.log(this.props)    
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.props.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this.props.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});