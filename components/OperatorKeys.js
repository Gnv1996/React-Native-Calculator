import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class OperatorKeys extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <TouchableOpacity onPress={()=>{this.props.onClick()}}>
                <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  calcKey:{  
    backgroundColor:"#f69906",
    borderRadius:50,
    width:70,
  
    padding:10,
    justifyContent:'center',
    marginBottom:100,

  },
    
  textDisplay:{
    color:"white",
    textAlign:"center",
    fontSize:36,         
  }
    
});