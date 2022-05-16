import React from "react";


const Todo = ({description, done, onChangeTodo, onDeleteTodo, index}) => {
    return (

    <div>
        <div id="header"
        >
            <h1 className="text.xl cursor-pointer"
                onClick={() => {
                    onChangeTodo(index);
                }}
            >
                {description}
            </h1>
            <button className="text-lg bg-gray-400 p-2 text-white"
                    onClick={() => {
                        onDeleteTodo(index);
            }}>Löschen</button>
        </div>
    </div>
);

};

export default Todo;