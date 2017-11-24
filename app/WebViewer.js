import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  WebView,
  LayoutChangeEvent,
  Dimensions,
  Platform,
} from 'react-native';

const HEADER_HEIGHT = Platform.OS === 'ios' ? 62 : 70;


export default class WebViewer extends PureComponent {

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get('window');

    this.state = {
      width,
      flexBasis: height - HEADER_HEIGHT,
      minHeight: height - HEADER_HEIGHT,
    };
  }

  reCalculateLayout(event) {
    const { height, width } = Dimensions.get('window');
    // console.log(height, width);
    // console.log(event.nativeEvent.layout.height, event.nativeEvent.layout.width);
    this.setState({
      width,
      flexBasis: height - HEADER_HEIGHT,
      minHeight: height - HEADER_HEIGHT,
    });
  }


  render() {
    console.log('I RENDER!!');
    return (
        <View style={styles.container} onLayout={event => this.reCalculateLayout(event)}>
          <WebView
              source={{ uri: this.props.url }}
              onMessage={this.onMessage}
              style={[
                styles.webview, {
                  flexBasis:this.state.flexBasis,
                  width:this.state.width,
                  minHeight:this.state.minHeight,
                },
              ]}
              // onLoadStart={() => console.log('Started loading webview')}
              // onLoad={() => console.log('Finished loading webview')}
          />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
  },
  webview:{
    flexGrow:1,
  },
});
