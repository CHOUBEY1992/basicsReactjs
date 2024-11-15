import TodoList from './Todos/TodoList';

import styled from 'styled-components';


const AppClass = styled.div`
  text-align: center;
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppClass>
      <TodoList />
    </AppClass>
  );
}

export default App;
