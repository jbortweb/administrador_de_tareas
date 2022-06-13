import React from "react";
import {connect} from 'react-redux';
import './Controls.css';

function Controls (props) {
    const onKeyUpHandle = (e) => {
        console.log('key up', e.keyCode);

        if (e.keyCode === 13 && e.target.value.trim()) {
            props.addTodo(e.target.value.trim());
            e.target.value = '';
        }
    };
    return (
        <div className="controls">
            <input
            type = 'text'
            placeholder = 'Añadir aqui'
            onKeyUp={(e) => onKeyUpHandle(e)}
            />
            <div className="FilterSelector">
                <button onClick={() => props.changeVisibility('Todo')}>
                    Todo
                </button>
                <button onClick={() => props.changeVisibility('Completo')}>
                    Completo
                </button>
                <button onClick={() => props.changeVisibility('Incompleto')}>
                    Incompleto
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => {
        console.log('dispatch ADD_TODO');

        dispatch({
            type:'ADD_TODO',
            payload: text,
            completed: false,
            id:Date.now(),
        });
    },
    changeVisibility : (setting) =>
    dispatch({
        type: 'CHANGE_VISIBILITY',
        payload: setting,
    }),
});

const connected = connect(null, mapDispatchToProps)(Controls);

export default connected;