import React from 'react';
import styles from './Box.module.css';
import UpperChat from '../UpperChat/UpperChat';
import SenderSection from '../SenderSection/SenderSection';
export default function Box() {
  return <>
    <div className={styles.Box}>
    <UpperChat />
    </div>
  </>
}
