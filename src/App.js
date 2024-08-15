import logo from './logo.svg';
import './App.css';
import { TaskListComponent } from './components/TaskListComponent';
import { TaskFormComponent } from './components/TaskFormComponent';
import { TaskMain } from './components/TaskMain';

function App() {
  return (
    <div className="App">
      <TaskMain/>
    </div>
  );
}

export default App;
