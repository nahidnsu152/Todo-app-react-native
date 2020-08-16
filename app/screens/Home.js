import React, {useState} from 'react'
import { Text, View, Button , TextInput, ScrollView, FlatList} from 'react-native'
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'
import Style from './Style'


const Home = ({}) => {
    const [todoList, setTodoList] = useState ([])
    const [addMode,setAddMode] = useState(false)

    const addTodoHandler = (todoTitle) => {
        if (todoList.length === 0) {
            alert("Item list can't be empty!")
            return
        }
        setTodoList( currentTodo  => [...currentTodo, {key: Math.random().toString(), value: todoTitle }])
        setAddMode(false)
    }

    const removeTodoItem = todoKey => {
        setTodoList( currentTodo  => {
            return currentTodo.filter((todo) => todo.key !== todoKey)
        })
    }

    const cancelAddTodoHandler = () => {
        setAddMode(false)
    }
    
    return (
        <View style={Style.container}>
            <Button title="Add New Todo" onPress= {() => setAddMode(true)} color="#2f3640"/>
            <Text style={Style.text}> To Delete click on the item.</Text>
            <TodoInput visible={addMode} onTodoList = {addTodoHandler} onCancel= {cancelAddTodoHandler}/>
            <FlatList 
            data={todoList}
            renderItem = { itemData => <TodoItem deleteItem = {removeTodoItem.bind(this, itemData.item.key)} title= {itemData.item.value} />}
            />
        </View>
    )
}

export default Home


