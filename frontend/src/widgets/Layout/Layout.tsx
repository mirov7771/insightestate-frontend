import { Outlet, useSearchParams } from 'react-router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.scss';
import { useEffect, useState } from 'react';
import { HeaderUnauth } from '@/widgets/Layout/Header/HeaderUnauth';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [basicToken, setBasicToken] = useState<string | undefined | null>(
    localStorage.getItem('basicToken')
  );
  const [location, setLocation] = useState(window.location.pathname);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      'basicToken',
      searchParams.get('basicToken') || localStorage.getItem('basicToken') || ''
    );
    setBasicToken(searchParams.get('basicToken') || localStorage.getItem('basicToken'));
    console.log(basicToken);
    setLocation(window.location.href);
    setShowHeader(location === '/');
  }, []);
  return (
    <>
      {basicToken ? (
        <>
          <Header basicToken={basicToken} />
          <main className={styles.main}>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <main className={styles.main}>
            {showHeader ? <></> : <HeaderUnauth />}
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
