import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/roundedButton';
import { Timing } from './Timing';
// baraye inke dar hengam shemordan telephon ma khamosh nashavad azin estefade mikonim ta roshan negah darim
import { useKeepAwake} from 'expo-keep-awake';

{
  /*THIS IS A NORMAL PATTERN THAT WE USE ALL THE TIME AND IT DEPENDS ON ANDROID/IOS WILL WORK DIFFRENTLY*/
}
const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

const Timer = ({ focusSubject ,clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = () =>{
    Vibration.vibrate(PATTERN); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={onEnd}
        />
        {/*onEnd ra dakhele khode in TIMER tarif kard */}
      </View>
      <View style={styles.focusStyle}>
        <Text>focus on {focusSubject}</Text>
        {/* dar vaghe dar inja vorodi in component ra namayesh midahim (focusSubject) */}
      </View>

      {/*dar inja baraye zadan start button az useState estefade kardim */}
      {/* dar inja && ra baraye namayesh start va pause estefade mikonim */}
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.timerButton}>
        <Timing onChangeTime={setMinutes} />
      </View>
      {/* mabahese marbut be clearSubject ra dar akhar video 27 barrasi kard  dar vaghe currentSubject ra null kardim ta bargardim be safhe ghabl(moraje be app.js)*/}
      <View>
        <RoundedButton title="clear" onPress={clearSubject} />
      </View>
    </View>
  );
};
// IT IS ONE THE MAIN WAY TO CREATE THE STYLE THAT WE WANT
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  countdown: {
    flex: 0.5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  focusStyle: {
    padding: 10,
    backgroundColor: 'red',
  },
  timerButton: {
    flex: 0.2,
    flexDirection: 'row',
  },
});

export default Timer;
