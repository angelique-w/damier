import React from 'react';
import styles from './App.module.css';
import Damier from "./Damier"

function App() {
  return (
    <div className={styles.white}>
      <Damier length={8} width={8} />
    </div>
  );
}

export default App;
