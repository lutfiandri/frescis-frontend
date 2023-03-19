import { useRouter } from 'next/router';
import { TbArrowLeft } from 'react-icons/tb';
import styles from './AppBar.module.css';

function AppBar({ title, showBackButton }) {
  const router = useRouter();

  return (
    <header className={styles.container}>
      {showBackButton ? (
        <div
          role="button"
          className={styles.back_button}
          onClick={() => router.back()}
        >
          <TbArrowLeft size={24} fontWeight={600} />
        </div>
      ) : null}
      <div className={styles.title}>{title}</div>
    </header>
  );
}

export default AppBar;
