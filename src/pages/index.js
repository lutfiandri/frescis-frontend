import UserProfileImage from '@/components/templates/UserProfileImage';
import UserContext from '@/contexts/userContext';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Space } from 'antd';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <DefaultLayout seoTitle="FresCis" hideAppBar>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Space
          direction="horizontal"
          size="small"
          style={{
            paddingTop: '16px',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Space direction="vertical" size="small">
            <div style={{ fontSize: '1.75em', fontWeight: 700 }}>
              Hi, {user?.displayName || 'Fresciser'}
            </div>
            <div>Let&apos;s eat fresh fish</div>
          </Space>
          <UserProfileImage />
        </Space>
      </Space>
    </DefaultLayout>
  );
}
