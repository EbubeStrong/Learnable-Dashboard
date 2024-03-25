import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import './App.css'


const App = () => {
  return (
    <div className='dashboard'>
        <div className='side-bar'>
            <Sidebar />
        </div>

     <div className='dashboard--content'>
     <Content />
     <Profile />
     </div>
    </div>
  )
}

export default App