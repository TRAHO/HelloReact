import React from 'React';
import {Text, View, StyleSheet} from 'react-native';

export default class Lesson extends React.Component {
    render(){
        return(
            <Text style = {style.container}>수업 내용</Text>
        );
    }
} 

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor: '#ff6663'
    }
})