import MENUS from '@/utils/constants/menus';
import { useRouter } from 'next/router';
import styles from './BottomNavBar.module.css';

function BottomNavBar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {MENUS.map((menu) => {
        const isActive = router?.asPath === menu.path;
        return (
          <div
            className={styles.item}
            key={menu.title}
            style={{ color: isActive ? '#2563EB' : 'black' }}
            onClick={() => router.push(menu.path)}
          >
            {menu.icon}
            <div className={styles.item_text}>{menu.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BottomNavBar;
