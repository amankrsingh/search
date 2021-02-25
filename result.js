import React from 'react'
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity} from 'react-native'
import ResultDetail from '../components/ResultDetail'

const ResultList = ({title, results, navigation}) =>{

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 15
    }
})

export default ResultList