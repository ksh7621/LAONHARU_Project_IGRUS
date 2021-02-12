import * as React from 'react';
import { View, Text,Button } from 'react-native';
import axios from 'axios';

class Holiday extends React.Component{
    state = {
        isLoading: true,
        data: {},
        
    }
    getDate(){
        const API_KEY="FENEXcst%2FEsJG5KKDx4MLFnq7QT3SxDUZKMdEpmtUjlskUaJIAcFVHWYroU2vXPWmS%2FJBOjuIKp%2BEYsbrgzQ3Q%3D%3D"
        const YEAR = 2021;
        //const MONTH
        //2020년 공휴일들 가져오는 url
        const url = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${API_KEY}&solYear=${YEAR}&_type=json&numOfRows=30`;
        console.log(url);
        axios.get(url).then((response)=>{
            const data= response.data.response.body.items.item;
           // console.log(data);
            this.setState({
                isLoading: false,
                data: data,
            });
        })       
    }
    //컴포넌트가 처음 실행되었을 때 하는 것
    componentDidMount(){
        this.getDate()
    }



    render() {
        const { isLoading, data } = this.state;
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
                    {data.map((date,i) =>(
                        
                            <Text key={i}>
                                {date.dateName}
                                {date.locdate}
                            </Text>
            
                        
                    ))}
                    
                </View>)
        }
        
    }
}
export default Holiday;