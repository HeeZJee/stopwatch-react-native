import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './Buttons';
import Timer from './Timer';

export default function App() {

  const initialTimer = { hr: 0, min: 0, sec: 0, ms: 0 }
  const [timer, setTimer] = useState(initialTimer)
  const [status, setStatus] = useState(0)
  const [newInterval, setNewInterval] = useState()

  const start = () => {
    run()
    setStatus(1)
    setNewInterval(setInterval(run, 10))
  }
  let newHr = timer.hr, newMin = timer.min, newSec = timer.sec, newMs = timer.ms

  const run = () => {
    if (newMin === 60) {
      newHr++
      newMin = 0
    }
    else if (newSec === 60) {
      newMin++
      newSec = 0
    }
    else if (newMs === 99) {
      newSec++
      newMs = -1
    }
    newMs++
    return setTimer({ hr: newHr, min: newMin, sec: newSec, ms: newMs })
  }

  const pause = () => {
    clearInterval(newInterval)
    setStatus(2)
  }
  const resume = () => {
    setStatus(1)
    start()
  }
  const reset = () => {
    clearInterval(newInterval)
    setStatus(0)
    return setTimer({ hr: 0, min: 0, sec: 0, ms: 0 })
  }
  return (
    <View style={styles.container}>
      <Timer timer={timer} />
      <Buttons start={start} pause={pause} resume={resume} reset={reset} status={status} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});