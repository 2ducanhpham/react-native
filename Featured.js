'use strict';

var React = require('react-native');
var BookList = require('./BookList');

var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        color:'red',
        backgroundColor: 'red',
    }
});

class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Home',
            component: BookList
            }}/>            
        );
    }
}

module.exports = Featured;