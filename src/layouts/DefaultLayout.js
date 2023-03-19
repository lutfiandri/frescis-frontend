import AppBar from '@/components/templates/AppBar';
import { useRouter } from 'next/router';
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
          <AppBar title={title} showBackButton={showBackButton}></AppBar>
        ) : null}

        <div
          style={{
            padding: '16px',
            flex: 1,
            overflow: 'auto',
            position: 'relative',
          }}
        >
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
