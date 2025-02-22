import {expect} from 'chai';
import {todos} from 'reducers';


describe('The todos reducers', () => {


    it('Adds new Todo when createTodo action is received',()=>{


        const fakeTodo = {text: 'hello', isCompleted : false};
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo:fakeTodo,
            }
        };
        const originalState = {isLoading: false, data:[]};

        const expected  = {
            isLoading : false,
            data:[fakeTodo],
        };

        const actual = todos(originalState,fakeAction);

        expect(actual).to.deep.equal(expected);
    }
    );
});