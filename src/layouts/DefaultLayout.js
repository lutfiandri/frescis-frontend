import AppBar from '@/components/templates/AppBar';
import BottomNavBar from '@/components/templates/BottomNavBar';
import { useRouter } from 'next/router';
import BaseLayout from './BaseLayout';

function DefaultLayout({
  title = 'Title here',
  seoTitle,
  hideAppBar,
  showBackButton,
  children,
  noContentPadding,
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
            padding: noContentPadding ? '0px' : '16px',
            flex: 1,
            overflow: 'auto',
            position: 'relative',
          }}
        >
          {children}
        </div>

        <BottomNavBar></BottomNavBar>
      </div>
    </BaseLayout>
  );
}

export default DefaultLayout;
