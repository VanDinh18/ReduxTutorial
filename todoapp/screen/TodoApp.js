import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    TextInput,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions';


const height_device = Dimensions.get("window").height;
const width_device = Dimensions.get("window").width;

const TodoApp = ({ todo_list, addTodo, deleteTodo }) => {

    const [task, setTask] = useState("");

    const handleAddTodo = () => {
        addTodo(task);
        setTask("")
    }
    const handleDelTodo = (id) => {
        deleteTodo(id)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text>Add ToDo Here</Text>
                <TextInput
                    placeholder="Task"
                    onChangeText={(text) => setTask(text)}
                    style={styles.textinput}
                    value={task}
                />
                <TouchableOpacity
                    style={styles.btn_add}
                    onPress={handleAddTodo}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todo_list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.view_item} key={index}>
                            <Text>{item.task}</Text>
                            <TouchableOpacity
                                style={styles.btn_del}
                                onPress={() => handleDelTodo(item.id)}
                            >
                                <Text>DEL</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }} />

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    header: {
        height: height_device / 3,
        width: width_device - 20,
        backgroundColor: 'white'
    },
    btn_add: {
        width: 100,
        height: 50,
        backgroundColor: 'green'
    },
    btn_del: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    textinput: {
        height: 80,
        width: width_device - 40,

    },
    view_item: {
        height: 50,
        width: width_device - 20,
        backgroundColor: "white",
        flexDirection: 'row'
    },
})

const mapStateToProps = (state, ownProps) => {
    return {
        todo_list: state.todo_list,
    }
}

const mapDispatchToProps = {
    addTodo,
    deleteTodo,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoApp);