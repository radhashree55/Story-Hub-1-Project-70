import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class ReadStoryScreen extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text>Read a Story is Coming soon...</Text>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });