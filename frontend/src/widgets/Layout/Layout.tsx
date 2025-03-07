import { Outlet } from 'react-router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
