import UserContext from '@/contexts/userContext';
import { auth } from '@/utils/services/firebase';
import { Button, Image, Modal, Popover } from 'antd';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useContext } from 'react';

function UserProfileImage() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const signInHandler = () => {
    router.push('/signin');
  };

  const signOutHandler = () => {
    Modal.confirm({
      title: 'Do you want to sign out?',
      centered: true,
      zIndex: 9999,
      onOk: () => {
        signOut(auth)
          .then(() => {
            setUser(null);
          })
          .catch((err) => console.error(err));
      },
    });
  };

  return (
    <Popover
      trigger="click"
      placement="bottomRight"
      title={user?.email}
      content={
        <div style={{ minWidth: '200px' }}>
          {user ? (
            <Button danger block onClick={signOutHandler}>
              Logout
            </Button>
          ) : (
            <Button block type="primary" onClick={signInHandler}>
              Signin
            </Button>
          )}
        </div>
      }
    >
      <Image
        src={user?.photoURL}
        alt=""
        preview={false}
        style={{
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          border: '1px solid #DBEAFE',
        }}
        fallback="/icon/tabler-icon-user-circle.svg"
      ></Image>
    </Popover>
  );
}

export default UserProfileImage;
