import './styles/global.scss'
import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

import OrderDetail from './components/OrderDetail/OrderDetail'
import OrderList from './components/OrderList/OrderList'
import Sidebar from './components/Sidebar/Sidebar'
import TopMenu from './components/TopMenu/TopMenu'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
