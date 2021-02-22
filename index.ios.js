'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage.js')

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
  },
  container:{
    flex: 1,
  }
})

class HelloWorld extends React.Component {
  render(){
    // return React.createElement(React.Text, {style: styles.text}, "Hello World!");
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
  }
}

class MyNewProject extends React.Component {
  render (){
    return (
      <React.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: SearchPage,
      }}
      >
      </React.NavigatorIOS>
    );
  }
}

React.AppRegistry.registerComponent('MyNewProject', function(){ return MyNewProject });

// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class MyNewProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to Testing out one more
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#555',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('MyNewProject', () => MyNewProject);
