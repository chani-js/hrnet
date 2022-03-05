import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import AddEmploye from './components/modal/AddEmploye';
import TableGrid from './components/table/TableGrid'
import employeelist from './components/mock/Employee.js'



function App() {
  const init =()=>{
    if(!localStorage.getItem("employee")){
        localStorage.setItem("employee", JSON.stringify(employeelist))
    }
  }
  init()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddEmploye />}/>
        <Route path='/employeelist' element={<TableGrid/>}/>
      </Routes>
    </Router>
  );
}

export default App;
