import UserContext from '@/contexts/userContext';
import MENUS from '@/utils/constants/menus';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styles from './BottomNavBar.module.css';

function BottomNavBar() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const itemClickHandler = (disabled, menu) => {
    if(disabled) return
    router.push(menu.path)
  }

  return (
    <div className={styles.container}>
      {MENUS.map((menu) => {
        const disabled = menu.needActiveUser && !user?.uid;
        const isActive = router?.asPath === menu.path;

        const color = disabled ? '#9ca3af' : isActive ? '#2563EB' : 'black';

        return (
          <div
            className={clsx(styles.item, disabled && styles.item_disabled)}
            key={menu.title}
            style={{ color: color }}
            onClick={() => itemClickHandler(disabled, menu)}
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
