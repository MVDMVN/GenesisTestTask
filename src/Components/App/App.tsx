import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import IUser from "../../Interfaces"
import UsersTable from '../UsersTable/UsersTable';
import Component from '../Component';

const App = () => { 
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  return (
    <div className="App">
      <UsersTable users={data} newComponent={<Component/>}/>
    </div>
  );
}

export default App;
