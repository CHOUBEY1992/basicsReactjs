import {  loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo,removeTodo,markAsCompleted } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {

    try{
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
        console.log(todos);
    dispatch(loadTodosSuccess(todos));
    }catch(e){
        console.log("exceptions came",e);
        dispatch(loadTodosFailure());
    }
}


export const addTodoRequest = text => async dispatch => {
    
    try{const body = JSON.stringify({text});
    const response = await fetch('http://localhost:8080/todos',{
        headers:{
            'Content-Type':'application/json',
        },
        method:'post',
        body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
}catch(e){
    dispatch(displayAlert(e));
}
}

export const removeTodoRequest = id => async dispatch => {
    
    try{
        const response = await fetch(`http://localhost:8080/todos/${id}`,{
        method:'delete',
    });
    const removeTodo1 = await response.json();
    dispatch(removeTodo(removeTodo1));
}catch(e){
    dispatch(displayAlert(e));
}
}

export const markTodoAsCompletedRequest = id => async dispatch => {
    
    try{
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
        headers:{
            'Content-Type':'application/json',
        },
        method:'post',
    });
    const completedTodo = await response.json();
    dispatch(markAsCompleted(completedTodo));
}catch(e){
    dispatch(displayAlert(e));
}
}


export const displayAlert = text => () => {
}