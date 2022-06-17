import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import IUser from "../../Interfaces"
import {UsersTable} from '../UsersTable/UsersTable';

const App = () => { 
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  const heads = [
    {
      id: 'userId',
      label: 'UserId'
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
      id: 'content',
      label: 'Content'
    }
  ];


  return (
    <div className="App">
      <UsersTable heads={heads} rows={data}/>
    </div>
  );
}

export default App;
