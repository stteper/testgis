import './styles/global.scss'
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

import OrderDetail from './components/OrderDetail/OrderDetail'
import OrderList from './components/OrderList/OrderList'
import Sidebar from './components/Sidebar/Sidebar'
import TopMenu from './components/TopMenu/TopMenu'

function App() {
  return (
    <div className='App'>
      <div className={styles.layout}>
        <Sidebar />

        <main className={styles.mainContent}>
          <TopMenu />
          <Router>
            <Routes>
              <Route path='/' element={<OrderList />} />
              <Route path='/orders/:id' element={<OrderDetail />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  )
}

export default App
