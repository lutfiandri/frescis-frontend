import { Button, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { TbArrowLeft } from 'react-icons/tb';
import BaseLayout from './BaseLayout';

function DefaultLayout({
  title = 'Title here',
  seoTitle,
  hideAppBar,
  showBackButton,
  children,
}) {
  const router = useRouter();

  return (
    <BaseLayout seoTitle={seoTitle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {!hideAppBar ? (
          <header style={{ padding: '16px' }}>
            <Space
              direction="horizontal"
              // align="center"
              style={{
                justifyContent: showBackButton ? 'left' : 'center',
                alignItems: 'center',
                width: '100%',
                height: '32px',
              }}
            >
              {showBackButton ? (
                <Button
                  size="small"
                  type="link"
                  icon={<TbArrowLeft size={24} fontWeight={600} />}
                  style={{
                    color: 'black',
                  }}
                  onClick={() => router.back()}
                ></Button>
              ) : // <TbArrowLeft size={20} fontWeight={600} />
              null}
              <Typography.Title level={5} style={{ margin: '0' }}>
                {title}
              </Typography.Title>
            </Space>
          </header>
        ) : null}

        <div style={{ padding: '16px', flex: 1, overflow: 'auto' }}>
          {children}
        </div>

        <div
          style={{ minHeight: '80px', height: '80px', background: '#2563eb' }}
        >
          menu
        </div>
      </div>
    </BaseLayout>
  );
}

export default DefaultLayout;
