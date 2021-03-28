import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={Keyboard.dismiss}>
      <Image style={styles.image} source={require('../../assets/icon.png')} />
      <View>
        <TextInput
          placeholder="Your name..."
          placeholderTextColor="#010101"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={setName}
        />

        <TextInput
          placeholder="*********"
          placeholderTextColor="#010101"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
        />

        <Text style={styles.createAccount} onPress={() => alert('a')}>
          Create a new account!
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log(name, password);
          }}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Form;
