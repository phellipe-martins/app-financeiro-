

import Login from './pages/Login';

import { Outlet } from 'react-router-dom';

function App() {


  return (

    <div className="App">
      <Outlet />
      <Login />

    </div>
  );
}

export default App
