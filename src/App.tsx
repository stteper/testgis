import './styles/global.scss'
import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

import Sidebar from './layout/Sidebar/Sidebar'
import TopMenu from './layout/TopMenu/TopMenu'
import OrderDetail from './pages/OrderDetail/OrderDetail'
import OrderList from './pages/OrderList/OrderList'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className={styles.layout}>
          <Sidebar />

          <main className={styles.mainContent}>
            <TopMenu />
            <Router basename={`/${process.env.PUBLIC_URL}`}>
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
