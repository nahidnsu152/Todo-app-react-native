import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Style from './Style'

const TodoItem = (props) => {
    return (
        <TouchableOpacity  onPress= {props.deleteItem }>
           <View style={Style.listItem}>
               <Text > {props.title} </Text>
            </View>
        </TouchableOpacity>   
    )
}

export default TodoItem


