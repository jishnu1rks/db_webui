import React from 'react'
import { Link } from 'react-router'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Homepage</Link>
    </div>
  )
}

export default Header