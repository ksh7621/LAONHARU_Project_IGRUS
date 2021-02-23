import React from 'react';
import styled from 'styled-components';

//styled component를 이용해서 Text component를 오버라이딩하는 느낌으로 수정하면 됩니다
//Text의 속성을 그대로 가지면서 다른 속성들을 추가합니다
//일반적인 style의 경우, 매 컴포넌트마다 적용하거나, 상속 하는 경우, 코드가 복잡해지기 때문에,
//Text를 모듈화해주는 방식을 선택했습니다
//RN에서 제공하는 다른 모듈들도 동일하게 적용하면 됩니다(VIEW, etc...)
//https://styled-components.com/docs/basics#react-native를 참고해주세요
const Styledtext = styled.Text`

    font-family: MapoGoldenPier;
    font-size: ${props => props.primary ? 30 : 40 };
   
`;


// class Text extends React.Component {
//     render(){
//         return(
//            <Styledtext>
//                {this.props.text}
//            </Styledtext>
//         )
//     }
// }
// export default Text;

export default function Theme({ children }) {
    return (
    <Styledtext>{children}</Styledtext>
    );
  }

