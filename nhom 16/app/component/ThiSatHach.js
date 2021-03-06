import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import book from '../assets/thi.png';
export default class Test extends Component {
    render() {
      return (
        <View style={styles.gridList}>
          <View style={styles.button}>
  
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Đề thi số 1')}>
              <Text style={styles.button1}>Làm bài</Text>
              <View style={styles.button6}>
                <Text style={styles.button7}>
                  0/20 câu
                  </Text>
                <Text style={styles.button8}>
                  Đề số 1
                  </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Learn')}>
              <Text style={styles.button1}>Làm bài</Text>
              <View style={styles.button6}>
                <Text style={styles.button7}>
                  0/20 câu
                  </Text>
                <Text style={styles.button8}>
                  Đề số 2
                  </Text>
              </View>
            </TouchableOpacity>
  
            <View style={{ flexGrow: 1, }}>
              <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
                <Text style={styles.button1}>Làm bài</Text>
                <View style={styles.button6}>
                  <Text style={styles.button7}>
                    0/20 câu
                  </Text>
                  <Text style={styles.button8}>
                    Đề số 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button}>
  
            <View style={{ flexGrow: 1, }}>
              <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
                <Text style={styles.button1}>Làm bài</Text>
                <View style={styles.button6}>
                  <Text style={styles.button7}>
                    0/20 câu
                  </Text>
                  <Text style={styles.button8}>
                    Đề số 4
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
  
            <View style={{ flexGrow: 1, }}>
              <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
                <Text style={styles.button1}>Làm bài</Text>
                <View style={styles.button6}>
                  <Text style={styles.button7}>
                    0/20 câu
                  </Text>
                  <Text style={styles.button8}>
                    Đề số 5
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
  
            <View style={{ flexGrow: 1, }}>
              <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
                <Text style={styles.button1}>Làm bài</Text>
                <View style={styles.button6}>
                  <Text style={styles.button7}>
                    0/20 câu
                  </Text>
                  <Text style={styles.button8}>
                    Đề số 6
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button}>      
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    gridList: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop:20
    },
  
    button: {
      flexDirection: 'row',
      height: '22%',
      justifyContent: 'space-between',
  
    },
    button2: {
      backgroundColor: '#fff',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent:'center',
      margin:8,
      borderWidth: 5,
      borderRadius: 80,
      borderColor: '#BDBDBD'
    },
    button1: {
      top:'22%',
      fontSize: 20,
      color: 'green',
      textAlign: 'center',
  
    },
    button6: {
      top:'22%',
      backgroundColor:'#fff',
      paddingHorizontal:20,
      paddingVertical:10
    },
    button7: {
      fontSize: 10,
      textAlign: 'center'
    },
    button8: {
      fontSize:15,
      textAlign: 'center'
    }
  })