import React from "react";
import { StyleSheet } from "react-native";
import { Input, Button, Container } from "native-base";

interface type {
    addTodo: (task: string) => void;
    task: string;
    setTask: (task: string) => void;
}

const AddTodo: React.FC<type> = ({ addTodo, task, setTask }) => {
    return (
        <Container style={styles.container}>
            <Input
                placeholder="Enter task to do"
                style={styles.input}
                onChangeText={(e) => setTask(e)}
                value={task}
            />
            <Button color="green" style={styles.button} onPress={() => addTodo(task)}>
                Add Todo
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {},
    input: {
        height: 45,
        borderWidth: 1,
        marginVertical: 7,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        fontSize: 16,
        width: "90vw",
        borderColor: "black",
    },
    button: {
        height: 45,
        marginVertical: 7,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        fontSize: 16,
        width: "90vw",
        textTransform: "uppercase",
    },
});

export default AddTodo;
