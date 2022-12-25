import './styles/global.scss'
import React from 'react'

import styles from './App.module.scss'

import OrderDetail from './components/OrderDetail/OrderDetail'
import Sidebar from './components/Sidebar/Sidebar'
import TopMenu from './components/TopMenu/TopMenu'

function App() {
  return (
    <div className='App'>
      <div className={styles.layout}>
        <Sidebar />

        <main className={styles.mainContent}>
          <TopMenu />
          <OrderDetail />
        </main>
      </div>
    </div>
  )
}

export default App
