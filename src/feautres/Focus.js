import { react, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';
import { colors } from '../utils/colors';

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null); //dar inja baraye gereftan etelat text input oomadim az hook ha esteda kardim (null meghdar pishfarze)
  console.log(subject);
  // dar payin az setSubject darun onchange estefade kardim VA MEGHDAR MOTEGHAYERE MA DARUN subject KHAHAD BUD
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="what do you want to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress = {() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput:{
    flex : 0.9 ,
    marginRight : 10 , 

  },
  container2: {
    flexDirection : 'row',
    padding: 20
    // justifyContent : 'top' //we have problem with top
  },
  button: {
    justifyContent : 'center',
  },
});
export default Focus;
