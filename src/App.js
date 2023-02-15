import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/Auth';
import ToggleAdd from './components/ToggleAdd';
import ProjectView from './components/ProjectView';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index element={<Auth/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/add' element={<ToggleAdd/>}/>
          <Route path='/project/:id' element={<ProjectView/>}/>
        </Routes>
    </div>
  );
}

export default App;
