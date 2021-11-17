import React from "react";
import {
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Icon,
  Container,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

interface type {
  todos: {
    id: number;
    task: string;
    isCompleted: boolean;
  }[];
  handleStatusChange: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<type> = ({
  todos,
  handleStatusChange,
  handleDeleteTodo,
}) => {
  return (
    <Container>
      <VStack space={2}>
        {todos.map((item: any) => (
          <HStack
            w="90vw"
            justifyContent="space-between"
            alignItems="center"
            marginTop="5"
            key={item.id}
          >
            <Checkbox
              isChecked={item.isCompleted}
              onChange={() => handleStatusChange(item.id)}
              value={item.task}
            >
              <Text
                mx="2"
                strikeThrough={item.isCompleted}
                _light={{
                  color: item.isCompleted ? "gray.400" : "coolGray.800",
                }}
                _dark={{
                  color: item.isCompleted ? "gray.400" : "coolGray.50",
                }}
              >
                {item.task}
              </Text>
            </Checkbox>
            <IconButton
              size="sm"
              colorScheme="trueGray"
              icon={
                <Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />
              }
              onPress={() => {
                handleDeleteTodo(item.id);
              }}
            />
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default TodoList;
