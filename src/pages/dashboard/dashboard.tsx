
import { Outlet } from 'react-router'
import styles from './dashboard.module.css'
import Layout from '../../layouts/homelayout/homelayout'

const Dashboard = () => {
  return (
    <Layout>
        <h1 className={styles.heading}>Dashboard</h1>
        <p><Outlet/></p>
    </Layout>
  )
}

export default Dashboard