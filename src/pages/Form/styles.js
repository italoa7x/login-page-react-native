import {StyleSheet} from 'react-native';

const BORDER_RADIUS = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F01F03',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputLabel: {
    fontSize: 20,
    color: '#FFFF',
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#FFFF',
    width: 300,
    height: 40,
    color: '#010101',
    borderRadius: BORDER_RADIUS,
    textAlign: 'center',
    marginTop: 10,
  },

  btn: {
    fontSize: 20,
    color: '#010101',
    backgroundColor: '#FFFF',
    borderRadius: BORDER_RADIUS,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 40,
  },
  createAccount: {
    color: '#FFFF',
    fontSize: 14,
    textAlign: 'center',
    top: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
