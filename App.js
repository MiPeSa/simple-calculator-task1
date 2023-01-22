import React from'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [number, setNumber] = React.useState('');
  const [secNumber, setSecNumber] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const buttonPressed = (button) => {
    if ((button) === '+') {
      setAnswer(parseInt(number) + parseInt(secNumber));
      setOpen(true);
    }
    else if (button === '-') {
      setAnswer(parseInt(number) - parseInt(secNumber));
      setOpen(true);
    } 
    else{
      Alert.alert('error')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
          <Text style={styles.header}>Simple Calculator</Text>
          <Text>Set numbers and press + or -</Text>
      </View>
          <Text style={styles.results} open={false}>Result: {answer}</Text>
      <StatusBar style="auto" />
      <View>
          <TextInput
              style={styles.textinput}
              keyboardType = 'numeric'
              onChangeText={number => setNumber(number)}
              value={number}
          />
          <TextInput
              style={styles.textinput}
              keyboardType = 'numeric'
              onChangeText={secNumber => setSecNumber(secNumber)}
              value={secNumber}
          />
      </View>
      <View style={styles.button}>
          <Button color="lightgreen" width="50" onPress={() => buttonPressed('+')} title={'+'} />
          <Button color="red" onPress={() => buttonPressed('-')} title={'-'} />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: "25%",
  },
  textinput: {
    width: 150,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    fontSize: 25
  },
  results: {
    fontSize: 18
  },
  headerBox: {
    margin: 20,
  }
});
