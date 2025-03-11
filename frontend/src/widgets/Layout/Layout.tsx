import {Outlet, useSearchParams} from 'react-router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.scss';
import {useEffect} from "react";

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
      localStorage.setItem('basicToken', searchParams.get('basicToken') || localStorage.getItem('basicToken') || '');
  }, []);
  const basicToken = localStorage.getItem('basicToken')
  return (
      <>
      {basicToken ?
          <>
              <Header basicToken={basicToken!!}/>
              <main className={styles.main}>
                  <Outlet />
              </main>
              <Footer />
          </> :
          <>
              <main className={styles.main}>
                  <Outlet />
              </main>
          </>}
      </>
  );
};

export default Layout;
