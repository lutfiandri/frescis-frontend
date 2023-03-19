import styles from '@/styles/pageStyles/signin.module.css';
import { Button, Divider } from 'antd';
import Image from 'next/image';

const { default: BaseLayout } = require('@/layouts/BaseLayout');

function SignIn() {
  return (
    <BaseLayout seoTitle="Sign In - FresCis">
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <div className={styles.skewed_box}></div>
          <Image
            src="/logo/frescis-square.png"
            alt="frescis logo"
            width={200}
            height={200}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              transformOrigin: 'center',
            }}
          ></Image>
        </div>

        <div className={styles.button_container}>
          <Button className={styles.button} size="large" shape="round">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: '4px',
              }}
            >
              <Image
                src="/logo/google.png"
                alt="google"
                width={16}
                height={16}
              />
              <span>Continue with Google</span>
            </div>
          </Button>
          <Divider plain>or</Divider>
          <Button className={styles.button} size="large" shape="round">
            Continue without account
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
}

export default SignIn;
