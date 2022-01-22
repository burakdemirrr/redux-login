import { useSelector } from 'react-redux';
import './App.css';
import Login from './Login';
import { selectUser } from './loginSlice';
import Logout from './Logout';

function App() {
  const user=useSelector(selectUser);

  return (
    <div className="App">

      {
        user ? <Logout user={user}/> : <Login/>
      }
    </div>
  );
}

export default App;
