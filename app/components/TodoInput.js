import React, {useState} from 'react'
import {Text, View, TextInput, Button, Modal } from 'react-native'
import Style from './Style'

const TodoInput = (props) => {

    const [enteredTodo, setEnteredTodo] = useState('')

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText)
    }

    const addTodoHandler = () => {
        props.onTodoList(enteredTodo)
        setEnteredTodo('')

    }
    return (
        <Modal visible= {props.visible} animationType="slide">
            <View style={Style.content} >
                <TextInput style={Style.textInput} placeholder= "Input Your Goal" placeholderTextColor="#485460" value={enteredTodo} onChangeText={todoInputHandler}/>
                <View style={Style.buttonContainer}>
                    <View style={Style.button}>
                        <Button title = "ADD" onPress={addTodoHandler}/>    
                    </View>
                    <View style={Style.button}>
                        <Button title = "Cancel" color="red" onPress={props.onCancel} />    
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TodoInput
