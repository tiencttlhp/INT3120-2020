import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'#F5ECCE'}}>
                 <View style={{marginTop:15,backgroundColor:"#FFFFFF"}}>
                        <View style={{marginLeft:15,marginRight:15}}>
                            <Text style={{fontSize:20,marginBottom:10,color:'#0000FF',marginTop:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>Câu hỏi khái niệm</Text>
                            <View style={{color:"#5858FA"}}>
                                <Text style={{fontSize:17}}>1.Lỗi đè vạch : trong phần thi thực hành một trong những lỗi hay mắc nhất đó là đè vạch. thông thường
                                chúng ta sẽ bị lỗi này  ở những khúc cua vào hay cua ra. một số mẹo cho các bạn để tránh gặp những lỗi như này là nên đi sát vào mép vạch bên đối diện. </Text>
                                <Text style={{fontSize:17}}>2. phần đi trên đường sóc cũng là một trong những lỗi hay mắc phải. thông thường ở đoạn này 
                                mọi người thường hay bị chết máy cũng nhưyeeus ga không lên được. lời khuyên của chúng tôi là nên để xe ở số 3 để có thể dễ dàng qua đoạn này . </Text>
                              
                            </View>
                        </View>
                        
                    </View>
            </ScrollView>
        );
    }
    
   }
   
