import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [time, setTime] = useState(0)
  const [intervalo, setIntervalo] = useState(null)

  const startTime = () => {
    if (!intervalo) {
      const newInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
      setIntervalo(newInterval)
    }
  }

  const pauseTime = () => {
    if (intervalo) {
      clearInterval(intervalo)
      setIntervalo(null)
    }
  }

  const resetTime = () => {
    if (intervalo) {
      clearInterval(intervalo)
      setIntervalo(null)
    }
    setTime(0)
  }

  const formatTime = () => {
    const hours = Math.floor(time / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)
    const milliseconds = Math.floor((time % 1000) / 10)

    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    const formattedMilliseconds = milliseconds.toString().padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronômetro App</Text>
      <Text style={styles.text}>{formatTime()}</Text>
      <View style={styles.buttons}>
        <Button title='Start' onPress={startTime} />
        <Button title='Pause' onPress={pauseTime} />
        <Button title='Reset' onPress={resetTime} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f3b61f',
  },

  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 60,
  },
})
