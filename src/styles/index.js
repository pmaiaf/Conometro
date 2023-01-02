import {StyleSheet, Dimensions} from 'react-native';
// Tamanho da largura da tela
var width = Dimensions.get('window').width;
// Estilização do componente Form
const contador = StyleSheet.create({
  container: {
    margin: 25,
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
  },
  btContainer: {
    paddingTop: '4%',
    display: 'flex',
    flexDirection: 'row',

  },
  texts:{
    fontSize: 18,
    paddingTop:'4%'
    
  },
  button: {
    marginRight: '5%',
    padding: '2%',
    paddingLeft: '15%',
    paddingRight: '15%',
    backgroundColor: '#982EA2',
  },
  textRegistro: {
    display: 'flex',
    flexDirection: 'row',
  
  },
  text:{
    paddingTop:'9%',
    paddingRight: '17%'
  }
});
// Estilização do componente Header

export {contador};
