import React from "react";
import Todo from "./Todo"
import style from "./style.css"
import {useState, useEffect} from "react";


const TodoList = () => {
    const [opencount, countOpenTodos] = useState(0);
    const [todos, setTodos] = useState(() =>{
        const items = localStorage.getItem("items")
        const parsed = JSON.parse(items);
        return parsed || [];
    })
    const [textInput, setTextInput] = useState("")

    const changeText =(e) =>{
        setTextInput(e.target.value);

    };
    const submit = (e) => {
        e.preventDefault();
        const newTodos = [...todos, {description: textInput, done: false }]
        setTodos(newTodos);
        setTextInput("");
    };

    const countOpen = () => {
        const donetodos = todos.filter((item) => {
            return !item.done;
        });
        countOpenTodos(donetodos.length);
    };

    const changeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    useEffect(() => {
        countOpen();
        localStorage.setItem("items", JSON.stringify(todos));
    }, [todos])


    return (
        <div className="header">
            <div className="text-center bg-gray-900 text-white text-3xl py-2 font-semi-Bold">
                <h1 className="erst">Meine Todos</h1>
                <h2>Meine offenen Todos: {opencount}</h2>
                <form className="grid">
                    <input
                        className="col-span-2 text-gray-600"
                        onChange={changeText}
                        type="text"
                        value={textInput}
                        placeholder="neue Aufgaben..."
                    ></input>
                    <input
                        onClick={submit}
                        type="submit"
                        value="Hinzufügen"
                        className="ADD"></input>
                </form>
            </div>

            {todos.map((item, index) => {
                return (
                    <Todo
                        description={item.description}
                        done={item.done}
                        key={index}
                        index={index}
                        onChangeTodo={changeTodo}
                        onDeleteTodo={deleteTodo}
                    ></Todo>
                );
            })}
        </div>
    );
};

export default TodoList