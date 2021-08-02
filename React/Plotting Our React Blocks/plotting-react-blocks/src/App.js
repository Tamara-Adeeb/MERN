import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import styles from './style.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header className = {styles.header} />
        <Navigation className = {styles.navigation} />
        <Main className = {styles.main}>
            <SubContents className = {styles.subContents} />
            <SubContents className = {styles.subContents} />
            <SubContents className = {styles.subContents}  />
            <Advertisement className = {styles.advertisement}  />
        </Main>
    </div>
  );
}

export default App;
