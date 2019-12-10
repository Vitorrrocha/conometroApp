import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
} from 'react-native';



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      timer: 0,
      textTimer: 'COMEÇAR'
    };
    
    this.timer = null //variavel do timer do relógio.
    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
    
    }

    start(){
      let state = this.state;
      
      if(this.timer !== null){
        
        //stop timer
        clearInterval(this.timer);
        this.timer = null;
        state.textTimer = 'CONTINUAR'; 
        
      }else{
        this.timer = setInterval(() => {
          let state = this.state;
          state.timer += 0.1;
          this.setState(state);
        }, 100)
        state.textTimer = 'PARAR';
      }


      this.setState(state);
    }

    clean(){
      if(this.timer !== null){
        
        //stop timer
        clearInterval(this.timer);
        this.timer = null;
      }
      let state = this.state;
      state.timer = 0;
      state.textTimer = 'COMEÇAR';
      this.setState(state);
    }

  render() {
    return (
      <View style={style.container}>
        <Image style={style.img} source={require('./src/assets/cronometro.png')}/>
          <Text style={style.timer} > { this.state.timer.toFixed(1) } </Text>      

        <View style={style.btnArea}>
          <TouchableOpacity style={style.button} onPress={this.start}>
            <Text style={style.btnText}>{ this.state.textTimer }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={this.clean}>
            <Text style={style.btnText}>ZERAR</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#6559c1'
  },
  timer: {
    fontSize: 72,
    color: 'white',
    paddingBottom: 50,
    position: 'absolute'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50, 
    margin: 17,
    borderRadius: 9
  }, 
  btnText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#6559c1'

  }
});