import React from 'react'
import Rough from './Components/homepage/Rough';
import Homepage from './Components/homepage/Homepage';
import Main from './Components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form/Form';

const App = () => {
  return (
    // <Rough/>
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/notes' element={<Main />} />
      <Route exact path='/rough' element={<Rough />} />
      <Route exact path='/addnote' element={<Form />} />

    </Routes>

  )
}

export default App