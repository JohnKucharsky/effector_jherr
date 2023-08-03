import {Button, Grid, Input} from "@chakra-ui/react";
import $store, {addTodoEv, setNewTodo} from '../store.ts'
import {useStore} from "effector-react";

export default function TodoAdd(){
const store = useStore($store)

    return <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
        <Input placeholder='New todo' value={store.newTodo}
               onChange={(e)=>setNewTodo(e.target.value)}/>
        <Button onClick={()=>addTodoEv()}>Add Todo</Button>
    </Grid>
}