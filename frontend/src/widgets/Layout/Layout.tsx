import { Outlet } from 'react-router';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer>
        <p>My App Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
