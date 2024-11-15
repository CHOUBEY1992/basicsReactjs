import React , {useEffect}from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { loadTodos, removeTodoRequest,markTodoAsCompletedRequest } from "./thunk";
import {
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
    } from './selectors';
import styled from "styled-components";    



const ListWrapper = styled.div`
     max-width: 700px;
    margin: auto;
`;

const TodoList = ({completedTodos,incompletedTodos,onRemovePressed,onCompleted ,isLoading,startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    },[]);
    const loadingMessage = <div>Loading todos.....</div>;

    const content = (<ListWrapper>
        <NewTodoForm />
        <h3>Incompleted</h3>
        {incompletedTodos.map(todo => <TodoListItem todo ={todo} onRemovePressed={onRemovePressed} onCompleted={onCompleted}/>)}
        <h3>completed</h3>
        {completedTodos.map(todo => <TodoListItem todo ={todo} onRemovePressed={onRemovePressed} onCompleted={onCompleted}/>)}

    </ListWrapper>);
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state),
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos : () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompleted: id => dispatch(markTodoAsCompletedRequest(id)),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);