import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import './App.css';
import axios from "axios";
import IUser from "../../Interfaces"
import UsersTable from '../UsersTable/UsersTable';

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
      <UsersTable users={data} />
    </div>
  );
}

export default App;
