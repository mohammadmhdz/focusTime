import React from 'react'; 
import {View , StyleSheet} from 'react-native';
import { RoundedButton} from '../components/roundedButton';

export const Timing = ({onChangeTime}) =>{
  return(
    <>
    <View style = {styles.container}>
    <RoundedButton title='10' onPress={() => {onChangeTime(10)}}  />
    </View>
    <View style = {styles.container}>
    <RoundedButton title='13' onPress={() => {onChangeTime(10)}}  />
    </View>
    </>
  )

}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'purple',
  }

})

// export default Timing;