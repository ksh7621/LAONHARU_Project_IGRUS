import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity,ToastAndroid} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import moment from 'moment';
import Theme from "./Theme"
import Dailychoice from './Dailychoice'
import Holiday from './Holiday'
import axios from 'axios';

//사이트의 example을 참고했습니다


class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading:true,
      items: {},
      currentDate: new Date(),
      //markedDate: moment(new Date()).format("YYYY-MM-DD")
    };
  }

  componentDidMount(){
    this.getDate()
  }
  getDate(){
    const API_KEY ="UWsaSf5JCiPhMQY2FItG62tXaljrXrnt731SR%2FC%2BfEem9RO1lcYhqAy0M1YPWY9KhFX%2FdEFM6U%2BeLvaZ2URGcQ%3D%3D"
    const YEAR = 2021;
    const HEIGHT = 50;
    //const MONTH
    //2020년 공휴일들 가져오는 url
    const url = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${API_KEY}&solYear=${YEAR}&_type=json&numOfRows=30`;

    axios.get(url).then((response)=>{
        const datas= response.data.response.body.items.item;
        const items = {}
        //js의 for of 문 찾아보세요
        if(datas.length>0){
          console.log("데이터 가져옴")
          for(let data of datas){
            let arr = []
            let datename = data.dateName
            //20200101을 2020-01-01로 변환
            let locdate = data.locdate.toString()
            let year = locdate.substring(0,4)
            let month = locdate.substring(4,6)
            let day = locdate.substring(6,8)
            let rename = `${year}-${month}-${day}`
            let nameobj = [{name : datename, height: HEIGHT}]
            arr.push(nameobj)
            //items에 기념일 추가
            items[rename] = nameobj 
          }
          this.setState({
            isLoading: false,
            items : items
        });
      }else{
        console.log("데이터 가져오기 실패")
      }
       
        
       
    })}

    

  render() {

    const {isLoading} = this.state
    if(isLoading){
        return(
          <View>
              <Text >
                Loading..
              </Text>
          </View>
        )
    }else{
    const today = this.state.currentDate;
    // const day = moment(today).format("dddd");
    //const date = moment(today).format("MMMM D, YYYY");
    
    return (
      <Agenda      
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={today}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
    }
  }
  //임의로 아이템 생성
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        //day*ms
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          //const numItems = Math.floor(Math.random()+1);
          
          // for (let j = 0; j < numItems; j++) { 
              
          //   this.state.items[strTime].push({
          //     name: '클릭하여 일정을 추가하세요.',
          //     height: 100
          //   });
          // }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        isLoading:false,
        items: newItems
      });
    }, 500);
  }
  //아이템 뷰->이런 부분을 캘린더에 일정 추가 부분에 활용해주셔도 좋습니다
  //Todo diary 구현
  renderItem(item,{navigation} ) {
    return (
      <TouchableOpacity
      
        style={[styles.item, {height: item.height}]}
        //onPress={() => Alert.alert(item.name)}
        onPress={() => this.props.navigation.navigate('Choice')}
      >
        <Theme size = "20" marginLeft = "0">{item.name}</Theme>
      </TouchableOpacity>
    );
  }
  //빈 날짜를 보여주는 뷰
  renderEmptyDate() {
    return (
      <TouchableOpacity
        style={[styles.item, {height: 50}]}
        onPress={() => this.props.navigation.navigate('Choice')}
      >
        <Theme size ="20" marginLeft = "0">클릭하여 일정을 추가해주세요</Theme>
      </TouchableOpacity>
    );
  }
  //줄이 바뀌었다고 알려주는 뷰
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const Stack = createStackNavigator();

export default function AgendaRoute() {
  return ( 
    <Stack.Navigator>
       <Stack.Screen name="Agenda" component={AgendaScreen} />
       <Stack.Screen name="Choice" component={Dailychoice} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    fontFamily: "MapoGoldenPier",     
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    fontFamily: "MapoGoldenPier", 
  },
  TouchableOpacity:{
    fontFamily: "MapoGoldenPier", 
    fontSize: 15,
  }
  
});