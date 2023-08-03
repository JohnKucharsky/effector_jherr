import {createEffect, createEvent, createStore} from "effector";

export interface Todo{
    id:number;
    text:string;
    done:boolean;
}

const updateTodo = (todos:Todo[],id:number,text:string):Todo[]=>{
   return todos.map(todo=>({
        ...todo,
        text:todo.id === id?text:todo.text
    }))
}

const toggleTodo = (todos:Todo[], id:number):Todo[]=>{
    return todos.map(todo=>({
        ...todo,
        done:todo.id === id? !todo.done:todo.done
    }))
}

const removeTodo = (todos:Todo[],id:number):Todo[]=>{
    return todos.filter(todo=>todo.id!==id)
}

const addTodo = (todos:Todo[], text:string):Todo[]=>{
    return [...todos,
        {
            id:Math.max(...todos.map(({id})=>id))+1,
            text,
            done:false
        }
    ]
}

type Store = {
    todos:Todo[];
    newTodo:string
}

export const setNewTodo = createEvent<string>()
export const addTodoEv = createEvent()
export const updateTodoEv = createEvent<{id:number, text:string}>()
export const toggleTodoEv = createEvent<number>()
export const removeTodoEv = createEvent<number>()

export const load = createEffect(async (url:string)=>{
    const req = await fetch(url)
    return req.json()
})

export default createStore<Store>({
    todos:[],
    newTodo:''
}).on(setNewTodo, (state,newTodo)=>({
    ...state,
        newTodo
})).on(addTodoEv,(state)=>({
    ...state,
    newTodo:'',
    todos:addTodo(state.todos,state.newTodo)
})).on(updateTodoEv,(state, {id,text})=>({
    ...state,
    newTodo:'',
    todos:updateTodo(state.todos,id,text)
})).on(toggleTodoEv,(state,id)=>({
    ...state,
    todos:toggleTodo(state.todos,id)
})).on(removeTodoEv,(state,id)=>({
    ...state,
    todos:removeTodo(state.todos,id)
}))
    .on(load.doneData,(state,todos)=>({
    ...state,
    todos
}))