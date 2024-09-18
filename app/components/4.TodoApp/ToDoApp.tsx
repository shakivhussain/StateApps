import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


// Define the type for a Todo item
interface Todo {
    id: string;
    text: string;
}

// Define the type for the renderTodo function parameter
interface TodoItemProps {
    item: Todo;
}


const ToDoApp = () => {

    const [todoList, setTodoList] = useState<Todo[]>([]);

    const [text, setText] = useState<string>('')



    const addTask = () => {

        if (text.trim()) {

            console.log("Item Pressed " + { text });

            setTodoList([...todoList, { id: Date.now().toString(), text }]);
            setText("");
        }

        console.log("Item Pressed  2 " + { text });

    }

    const removeItemById = (id: string) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };



    const renderToDoItem = ({ item }: TodoItemProps) => (
        <TouchableOpacity
            onPress={() => removeItemById(item.id)}
            style={styles.todoItem}
        >
            <Text style={styles.todoText}>{item.text}</Text>
        </TouchableOpacity>
    );

    const handleAddTaskClick = () => {
        addTask()


    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ToDo List</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setText(text)}
                placeholder='Write Some Task'
                onSubmitEditing={handleAddTaskClick}
                value={text}
                returnKeyType='done'
            />

            <Button title='Add Task' onPress={handleAddTaskClick} />


            <FlatList
                data={todoList}
                keyExtractor={(item) => item.id}
                renderItem={(item) => { return renderToDoItem(item) }}

            />


        </View>
    )
}

export default ToDoApp

const styles = StyleSheet.create({


    container: {
        justifyContent: 'flex-start',  // Align content at the top
        alignItems: 'stretch',

    },

    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,

    },
    todoItem: {
        padding: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",

        paddingVertical: 20
    },
    todoText: {
        fontSize: 18,


    },
});


