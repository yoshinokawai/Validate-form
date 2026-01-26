import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import Square from './components/Square';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validatePhoneNumber = (text) => {
    setPhoneNumber(text);
    const phoneRegex = /^\d{10}$/;
    setIsValid(phoneRegex.test(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.squaresContainer}>
        <Square text="Square 1" backgroundColor="#7ce0f9" />
        <Square text="Square 2" backgroundColor="#4dc0b5" />
        <Square text="Square 3" backgroundColor="#f66d9b" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !isValid && styles.invalidInput]}
          placeholder="Nhập số điện thoại "
          keyboardType="numeric"
          onChangeText={validatePhoneNumber}
          value={phoneNumber}
        />
        {!isValid && <Text style={styles.errorText}>Số điện thoại không hợp lệ</Text>}
        {isValid && phoneNumber.length === 10 && <Text style={styles.successText}>Số điện thoại hợp lệ</Text>}
      </View>

      <StatusBar style="auto" />
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
  squaresContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
  },
  successText: {
    color: 'green',
    alignSelf: 'flex-start',
  }
});
