import logo from './logo.svg';
import './index.css';
import TodoList from "./components/Todolist";


function App() {
  return (
      <div className="max-w-xl m-auto bg-gray-200 mt-20">
          <TodoList  />
      </div>
  );
}

export default App;
