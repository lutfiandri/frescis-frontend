import { Spin } from 'antd';
import styles from './LoadingScreen.module.css';

export function LoadingScreen({ when = false, text = 'Loading' }) {
  if (!when) return <></>;
  return (
    <div className={styles.wrapper}>
      <Spin tip="Loading, please wait..."></Spin>
    </div>
  );
}
