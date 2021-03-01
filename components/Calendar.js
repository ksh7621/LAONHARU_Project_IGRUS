import * as React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import {CalendarList, Calendar, Agenda,LocaleConfig,} from 'react-native-calendars'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Holiday from './Holiday';
import moment from 'moment';
import AgendaScreen from './Agenda';
import Dailychoice from './Dailychoice'
import Todo from './Todo';
import Diary from './Diary';


LocaleConfig.locales['fr'] = {
  monthNames: ['해오름달(1월)', '시샘달(2월)', '물오름달(3월)', '잎새달(4월)', 
  '푸른달(5월)', '누리달(6월)', '견우직녀달(7월)', '타오름달(8월)', '열매달(9월)', 
  '하늘연달(10월)', '미틈달(11월)', '매듭달(12월)'],
  monthNamesShort: ['해오름', '시샘', '물오름', '잎새', '푸른', '누리', '견우직녀', '타오름', '열매', '하늘연', '미틈', '매듭'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘\'hui'
};
LocaleConfig.defaultLocale = 'fr';



function CalendarScreen({ navigation }) {
  const currentDate = new Date(); 
  const today = moment().format("YYYY-MM-DD");
  const nextWeekDay = moment().add(7, 'days').format("YYYY-MM-DD");
  const nextDay = moment().add(1, 'days').format("YYYY-MM-DD");
  

  const mark = {
    [today]: {selected: true, marked: true}
  };

  

    return (      
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
      
        <CalendarList
            //캘린더 리스트는 캘린더의 params를 기본적으로 가지고 있습니다
            //이 param들은 default 형태가 있으니 필요하실 때만 적어주세요(필요할 때만 적어주셔도 된다는 이야기입니다)
            // 처음 앱을 켰을 때 보이는 날짜
            current={currentDate}
            markedDates={mark} 
            //최소 날짜
            minDate={'2021-01-01'}
            //최대 날짜
            maxDate={'2021-12-31'} 

            // 날짜가 눌렸을 때 어떤 것을 실행하도록 하는 핸들러 console.log부분에 다른 component나 함수를 넣어주시면 됩니다
            onDayPress={(day) => {              
             console.log('selected day', day)
            }}        

        
            // 날짜가 길게 눌렸을 때 어떤 것을 실행하도록 하는 핸들러 console.log부분에 다른 component나 함수를 넣어주시면 됩니다
            onDayLongPress={(day) =>            
              {console.log('selected day', day)}   
          
          }
            // 캘린더 맨 위에 있는 날짜 포맷을 결정해줍니다 다른 형태로 수정하고 싶으시면
            // Formatting values: http://arshaw.com/xdate/#Formatting 여기를 참고해주세요
            monthFormat={'yyyy MM'}
            // 월이 바뀌었을 때 어떤 것을 실행하도록 하는 핸들러 입니다. console.log부분에 다른 component나 함수를 집어 넣으면 됩니다
            onMonthChange={(month) => {console.log('month changed', month)}}
            // 월 사이를 오가는 화살표 표시를 숨기냐 마냐 입니다
            hideArrows={false}
            // 기존의 화살표를 커스텀 화살표로 바꾸게 해주는 Param입니다.
            // renderArrow={(direction) => (<Arrow/>)}
            // 20일, 혹은 31일 이후에 1일부터 시작하는 부분이나, 1일 이전에 31,30일 등등이 표시되냐 마냐입니다
            hideExtraDays={true}
            //월을 바꿀 수 있게 하냐 마냐입니다
            disableMonthChange={false}
            //firstday=1이면 주가 월요일부터 시작합니다
            firstDay={1}
            // 요일 이름 없애기
            hideDayNames={false}
            // 몇 주인지 보이기
            showWeekNumbers={false}
            // 왼쪽 Arrow를 눌렀을 때 월을 빼도록 하는 것
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // 오른쪽 Arrow를 눌렀을 때 월을 더하도록 하는 것
            onPressArrowRight={addMonth => addMonth()}
            // 왼쪽 화살표 무효화하기
            disableArrowLeft={false}
            // 오른쪽 화살표 무효화하기
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Replace default month and year title with custom one. the function receive a date as parameter.
            renderHeader={(date) => {
              const header = date.toString('MMMM yyyy');
             const [month, year] = header.split(' ');
             const textStyle = {
          fontSize: 18,
          fontWeight: 'bold',
          paddingTop: 10,
          paddingBottom: 10,
          color: '#5E60CE',
          //paddingRight: 5,
          //marginLeft: 5,
             };

             
             return (
              <View
                style={{
                  flexDirection: 'row',
                  width: '70%',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 5,                  
                }}
              >
              


                 {/* <Text style={{ ...textStyle}}>{`${month}`}</Text>
                <Text style={{...textStyle}}>{year}</Text> */}

                <Text style={{marginLeft: 5, ...textStyle}}>{`${month}`}</Text>
                <Text style={{marginRight: 5, ...textStyle}}>{year}</Text>
              </View>
            );
          }}

          theme={{
            'stylesheet.calendar.header': {
              dayHeader: {
                fontWeight: '600',
                color: '#48BFE3',
              
              }
            },
            'stylesheet.day.basic': {
              today: {
                borderColor: '#48BFE3',
                borderWidth: 0.8
              },
              todayText: {
                color: '#5390D9',
                fontWeight: '800'
              }
            }
    
            
            }}
            //페이지 사이로 스와이프 하는 옵션
            enableSwipeMonths={true}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            //이전 스크롤 할 수 있는 페이지범위
            pastScrollRange={5}
            //다음 스크롤 할 수 있는 페이지
            futureScrollRange={5}
            // 캘린더 리스트의 스크롤 허용하는 옵션
            scrollEnabled={true}
            //스크롤바 보이게 하는 옵션
            showScrollIndicator={true}
            //수평으로 달력을 넘길 수 있게 하는 옵션
            horizontal={true}
            //페이지 단위로 보여지게 하는 옵션
            pagingEnabled={true}        
            

            onDayPress={(day) => {
              /*
              console.log('selected day', day)
              ToastAndroid.showWithGravity(
                day.dateString,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );   
              */

              navigation.navigate('한주')
              
            }}
          

            />
               
      </View>
          
        
    );
  }

  const Stack = createStackNavigator();

  export default function CalendarRoute() {
    return ( 
      <Stack.Navigator>
        <Stack.Screen name="한달" component={CalendarScreen} />
        <Stack.Screen name="한주" component={AgendaScreen} />
        <Stack.Screen name="선택" component={Dailychoice} />
        <Stack.Screen name="줄글" component={Diary} />
        <Stack.Screen name="오늘 일정" component={Todo} /> 
      </Stack.Navigator>
    );
  }

  