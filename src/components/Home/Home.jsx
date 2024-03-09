import React from 'react';
import styles from './Home.module.css';
import Box from '../Box/Box';
import bg from '../../assesits/bg.jpg';
export default function Home() {
  return <>
   <div className="container">
     <div className={styles.Home}>
      <img src={bg} className={styles.bg} alt="" />
     <Box/>
     </div>
   </div>
  </>
}
