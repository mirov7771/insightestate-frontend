import { Outlet, useSearchParams } from 'react-router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.scss';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [basicToken, setBasicToken] = useState<string | undefined | null>(
    localStorage.getItem('basicToken')
  );

  useEffect(() => {
    localStorage.setItem(
      'basicToken',
      searchParams.get('basicToken') || localStorage.getItem('basicToken') || ''
    );
    setBasicToken(searchParams.get('basicToken') || localStorage.getItem('basicToken'));
    console.log(basicToken);
  }, []);
  return (
    <>
      {basicToken ? (
        <>
          <Header basicToken={basicToken!!} />
          <main className={styles.main}>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <main className={styles.main}>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
