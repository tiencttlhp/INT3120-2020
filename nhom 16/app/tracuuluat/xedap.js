import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
var data = [
  {
    id: '1',
    name: 'Điều khiển xe đi không đúng chiều, làn đường',
    value: '300.000 - 400.000 vnđ',
  },
  {
    id: '2',
    name: 'Dừng đỗ xe trong hầm đường sai quy định',
    value: '500.000 - 1.000.000 vnđ',
  },
  {
    id: '3',
    name: 'Không chấp hành biển báo vạch kẻ đường',
    value: '300.000 - 400.000 vnđ',
  },
  {
    id: '4',
    name: 'Không chấp hành hiệu lệnh đèn giao thông',
    value: '300.000 - 400.000 vnđ',
  },
  {
    id: '5',
    name: 'Đi vào đường cấm, đi ngược chiều',
    value: '500.000 - 1000.000 vnđ',
  },
  {
    id: '6',
    name: 'Điều khiển xe máy trên cao tốc',
    value: '300.000 - 400.000 vnđ',
  },
  {
    id: '7',
    name: 'Vượt xe trong trường hợp cấm vượt',
    value: '500.000 - 1.000.000 vnđ',
  },
  {
    id: '8',
    name: 'Không giữ khoảng cách',
    value: '60.000 - 80.000 vnđ',
  },
  {
    id: '9',
    name: 'Không giảm tốc độ khi ra từ ngõ',
    value: '100.000 - 200.000 vnđ',
  },
  {
    id: '10',
    name: 'Chạy xe dàn hàng ngang',
    value: '80.000 - 100.000 vnđ',
  },
  {
    id: '11',
    name: 'Sử dụng đèn sai',
    value: '80.000 - 100.000 vnđ',
  },
  {
    id: '12',
    name: 'Bấm còi rú ga',
    value: '100.000 - 200.000 vnđ',
  },
];
class Greeting extends Component {
    render() {
      return (       
        <View style={{marginTop:10,marginLeft:20,marginRight:20,backgroundColor:'#FFFFFF',borderRadius:5}}>
            <View style={{marginTop:10,marginLeft:10,marginBottom:10,marginRight:10}}>
                <Text style={{fontSize:17}}>{this.props.name}</Text>
                <Text>{this.props.value}</Text>
            </View>          
        </View>      
      );
    }
  }
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'#F5ECCE'}}>
                 <FlatList
                    data={data}
                    renderItem={({ item }) => <Greeting name={item.name} value={item.value}/>}
                 /> 
            </ScrollView>
        );
    }
    
   }
