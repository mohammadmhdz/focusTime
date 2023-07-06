import React from 'react';
import {View , Text ,StyleSheet, FlatList} from 'react-native';


const focushistory = ({history}) => {
  const renderItem = ({items}) => <Text style={styles.iteem}>{items}</Text>
  return ( 
    <View>
    <Text style={styles.text}>test baraye history</Text>
    <FlatList
    data={history}
    renderItem={renderItem}
    />
    </View>
  )
}
const styles = StyleSheet.create({
  iteem : {
    // color : 'white' ,
    backgroundColor : 'red'


  },
  text : {
    color : 'white'
  }

}) 
export default focushistory

