import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions';

const TodoApp = (props) => {

    useEffect(() => {
        console.log("todo_list", props)
    }, [props]);

    const handleAddTodo = () => {
        addTodo("zenga vietnam")
    }
    const handleDelTodo = () => {

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn_add}
                onPress={handleAddTodo}>
                <Text>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn_add: {
        width: 100,
        height: 50,
        backgroundColor: 'green'
    },
    btn_del: {
        width: 100,
        height: 50,
        backgroundColor: 'red'
    },
})
export default TodoApp;