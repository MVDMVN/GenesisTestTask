import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import TableData from "../../Interfaces"
import {UsersTable} from '../UsersTable/UsersTable';

const App = () => { 
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  const headers = [
    {
      id: 'userId',
      label: 'userId'
    },
    {
      id: 'id',
      label: 'Id'
    },
    {
      id: 'title',
      label: 'Title'
    },
    {
      id: 'completed',
      label: 'Completed'
    }
  ];


  return (
    <div className="App">
      <UsersTable headers={headers} rows={data}/>
    </div>
  );
}

export default App;
