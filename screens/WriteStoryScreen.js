import React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {

  render() {
    return(
      <View style={styles.container}>

        <TouchableOpacity style={styles.header}>
          <Text style={styles.headertext}>📝 Story Hub 📝</Text>
        </TouchableOpacity>

       <TextInput 
        style={styles.inputBox}
        placeholder="Title"
        multiline={true}/>

       <TextInput
        style={styles.inputBox}
        placeholder="Author"
        multiline={true}/>

       <TextInput
        style={styles.storyBox}
        placeholder=" Start Writing"
        multiline={true}/>

       <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
       </TouchableOpacity>

      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
      justifyContent: 'center',
      width: 400,
      height: 50,
      borderWidth: 3,
      fontSize: 20,
      marginTop: 10,
      textAlign:'center',
      backgroundColor:'floralwhite',
    },
    storyBox:{
      justifyContent: 'center',
      width: 400,
      height: 440,
      borderWidth: 3,
      fontSize: 20,
      marginTop: 10,
      textAlign:'center',
      backgroundColor:'floralwhite',
    },
    submitButton:{
      backgroundColor: 'mistyrose',
      width: 100,
      height: 40,
      alignSelf: 'center',
      marginTop: 10,
      borderWidth: 3,
    },
    submitButtonText:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight:'bold',
      marginTop: 2,
    },
    header:{
      backgroundColor: 'mistyrose',
      width: 420,
      height: 100,
      alignSelf: 'center',
      marginTop: -55,
      marginBottom: 20,
    },
    headertext:{
      textAlign: 'center',
      fontSize: 40,
      fontWeight:'bold',
      marginTop: 28,
    }
  });