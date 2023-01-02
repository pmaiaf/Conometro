import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {contador} from './src/styles/index';





class Conometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0, // Declarando o estado inicial dos números do contador
      registro: 0,
      nomeBotaoIniciar: 'Iniciar', // Declarando o nome do botão para altera ao iniciar o conômetro
      nomeBotaoZerar: 'Zerar', // Declarando o nome do botão para altera ao iniciar o conômetro
    };
    (this.ultimoTempo = []), (this.ultimoRegistro = []), (this.contador = null); // Declarando o contador para fazer o controle
    this.Contador = this.Contador.bind(this);
    this.ZerarContador = this.ZerarContador.bind(this);
  }

  Contador() {
    if (this.contador != null) {
      clearInterval(this.contador); // Validando se o contador inicial e se for chamado a função limpa o conômetro
      this.contador = null; // Volta o contador para o estado padrão
      this.setState({nomeBotaoIniciar: 'Iniciar'}); //Define o nome do botão como iniciar
    } else {
      this.contador = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1}); //Declara que contador vai mudar o estado recebendo seu número antigo mais 0.1
      }, 100);
      this.setState({registro: this.state.registro + 1});
      this.setState({nomeBotaoIniciar: 'Parar'}); //Define o nome do botão como parar
      this.setState({nomeBotaoZerar: 'Salvar e Apagar'}); //Define o nome do botão como Zerar e Salvar
    }
  }

  ZerarContador() {
    if (this.contador != null) {
      clearInterval(this.contador); // Validando se o contador inicial e se for chamado a função limpa o conômetro
      this.contador = null; // Volta o contador para o estado padrão
    }

    this.setState({
      // Declara o ultimo tempo sempre como o número antes de zerar
      numero: 0, // Declara o número igual a 0 novamente zerando o contador
      nomeBotaoIniciar: 'Iniciar', // Declara o botão para iniciar novamente
    });
    this.ultimoRegistro.push(this.state.registro),
      this.ultimoTempo.push(this.state.numero);
  }

  URL() {
    return this.ultimoRegistro.map(item => {
      return <Text>{item} {'\n'}</Text>;
    });
  }

  UTL() {
    return this.ultimoTempo.map(item => {
      return <Text>{item.toFixed(1)}{'\n'}</Text>;
    });
  }
  
  render() {
    return (
      <View style={contador.container}>
        <Image style={contador.img} source={require('./src/img/timer.png')} />
        <Text style={contador.texts}>{this.state.numero.toFixed(1)}s</Text>

        <View style={contador.btContainer}>
          <TouchableOpacity style={contador.button} onPress={this.Contador}>
            <Text>{this.state.nomeBotaoIniciar}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={contador.button}
            onPress={this.ZerarContador}>
            <Text>{this.state.nomeBotaoZerar}</Text>
          </TouchableOpacity>
        </View>

        <View style={contador.textRegistro}>

          <Text style={contador.text}>Nº Registro {'\n'} {'\n'}{this.URL()}</Text>

          <Text style={contador.text}>Tempo  {'\n'} {'\n'}{this.UTL()}</Text>
        </View>
      </View>
    );
  }
}
export default Conometro;
