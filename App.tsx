import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { Center, NativeBaseProvider,Heading } from "native-base";

export const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Reading Book",
      isCompleted: false,
    },
  ]);
  const [counter, setCounter] = useState(2);
  const [task, setTask] = useState("");

  const addTodo = (task: string) => {
    const newTodo = {
      id: counter,
      task,
      isCompleted: false,
    };
    setCounter(counter + 1);
    setTodo([...todo, newTodo]);
    setTask("");
  };

  const handleStatusChange = (id: number) => {
    const changeStatus = todo.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodo(changeStatus);
  };

  const handleDeleteTodo = (id: number) => {
    const todoDelete = todo.filter((item) => item.id !== id);
    setTodo(todoDelete);
  };

  return (
    <SafeAreaView>
    <Heading textAlign="center" marginBottom="5">Todo App</Heading>
      <TodoInput addTodo={addTodo} task={task} setTask={setTask} />
      <TodoList
        todos={todo}
        handleStatusChange={handleStatusChange}
        handleDeleteTodo={handleDeleteTodo}
      />
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>
  );
};
