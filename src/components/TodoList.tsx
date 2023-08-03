import {Button, Checkbox, Flex, Heading, Input} from "@chakra-ui/react";
import $store, {removeTodoEv, toggleTodoEv, updateTodoEv} from '../store.ts'
import {useStore} from "effector-react";


function TodoListItems(){
    const store = useStore($store)

    return <>
        {store.todos.map((todo)=>(
            <Flex pt={2} key={todo.id}>
                <Checkbox checked={todo.done}
                          onClick={()=>toggleTodoEv(todo.id)}/>
                <Input mx={2} value={todo.text}
                onChange={e=>
                    updateTodoEv({id:todo.id, text:e.target.value})}
                />
                <Button
                onClick={()=>removeTodoEv(todo.id)}
                >Delete</Button>
            </Flex>
        ))}
    </>
}

export default function TodoList(){
    return (
        <>
            <Heading>Todo List</Heading>
            <TodoListItems/>
        </>
    )
}