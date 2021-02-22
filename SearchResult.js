'use strict';

var React = require('react-native');
var PropertyView = require('./PropertyView')
// Deconstructing assignment
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component,
} = React;


var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer:{
    flex: 4,
  },
  seperator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  price : {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Cochin',
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    flex: 4,
    justifyContent: 'center',
  },
  updatedTime: {
    fontSize: 10,
    color: '#959595',
    textAlign: 'right',
    // transform: [{ rotateZ: '-45 deg' }],

  },
  meta:{
  }
})

class SearchResults extends Component {

  constructor(props){
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  rowPressed(propertyGuid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    this.props.navigator.push({
      title: 'Property',
      component: PropertyView,
      passProps: {property: property},
    });
  }

  renderRow(rowData, sectionID, rowID){
    var price = rowData.price_formatted.split(' ')[0];

    return (
      <TouchableHighlight
        onPress={() => this.rowPressed(rowData.guid)}
        underlayColor='#ddd'>

        <View>
          <View style={styles.rowContainer}>
            <View>
              <Image style={styles.thumb} source={{uri: rowData.img_url}} />
              <Text style={styles.updatedTime}>
                {rowData.updated_in_days_formatted}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.price}>
                ${price}
              </Text>
              <Text style={styles.title} numberOfLines={4}>
                {rowData.title}
              </Text>
            </View>
          </View>

          <View style={styles.seperator}/>
        </View>
      </TouchableHighlight>
    )
  }

  render (){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    );
  }
}

module.exports = SearchResults;
