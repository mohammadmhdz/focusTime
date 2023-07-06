import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import Constants from 'expo-constants';
import Focus from './src/feautres/Focus';
import Timer from './src/feautres/Timer';
import FocusHistory from './src/feautres/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history , setHistory] = useState(['hiiiiiiiii']);
  return (
    /*1.SafeAreaView using for ios and it calculate the padding by it self and but it not gonna work for andriod and we fix it in styles by using statusbar.currentHeight */
   
    <SafeAreaView style={styles.container}>
      {/* if we dont have currentsubject show us focus otherwise show us our crruent subject  */}
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    /*it way of writing if conditions in react to understad if our OS in android use it statusbar height to show it correctly */
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkblue,
  },
  // text : {
  //   color: colors.white   // we made a collection ehich have all colors and thier codes to make our work easy
  // }
});
