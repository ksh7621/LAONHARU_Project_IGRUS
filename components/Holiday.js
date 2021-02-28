import * as React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';
import Text from '../styles/Text'


class Holiday extends React.Component{
    state = {
        isLoading: true,
        item:{},
        datas:{}
    }

    getDate(){
        const API_KEY =""
        const YEAR = 2020;
        //const MONTH
        //2020년 공휴일들 가져오는 url
        const url = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${API_KEY}&solYear=${YEAR}&_type=json&numOfRows=30`;
        
        axios.get(url).then((response)=>{
            const datas= response.data.response.body.items.item;
            console.log(datas[1]);
            console.log(datas.length);
            const items = datas.map(function(data, index){
                let itemObj = {}
                let dateName = {name: data.dateName}
                let nameArr = []
                nameArr.push(dateName)
                itemObj[data.locdate] = nameArr
                return itemObj;
            })
            console.log(items[1])
            console.log(items)
            this.setState({
                isLoading: false,
                datas: datas
            });
           
        })
             
    }

    
    //컴포넌트가 처음 실행되었을 때 하는 것
    componentDidMount(){
        this.getDate()
    }



    render() {
        const { isLoading, datas } = this.state;
        if(isLoading){
            return (
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        }else{
            return(
                <View>
                    {datas.map((date,i) =>(
                        
                            <Text 
                                key={i}
                                //커스텀 텍스트에 props 넘겨줘서 출력하기
                                //+는 문자열을 합쳐줄 수 있는 JS문법
                                text={date.dateName +'-'+ date.locdate}>
                            </Text>
            
                        
                    ))}
                    
                </View>)
        }
        
    }
}
export default Holiday;