import React, { useState } from 'react'
import Login from './components/login/Login';
import SignUpForm from './components/signUp/SignUpForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [IsLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className='w-[100%] h-[100vh] overflow-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='signUp' element={<SignUpForm />} />
          <Route path='login' element={<Login setLoggedIn={setLoggedIn} IsLoggedIn={IsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
