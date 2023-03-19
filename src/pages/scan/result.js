import { Image, Space } from 'antd';

const { default: DefaultLayout } = require('@/layouts/DefaultLayout');

function ScanResult() {
  return (
    <DefaultLayout
      title="Scan Result"
      seoTitle="Scan Result - FresCis"
      showBackButton
    >
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Image
          src="https://ih1.redbubble.net/image.1952190325.3164/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt="image taken"
          width="100%"
          style={{
            borderRadius: '16px',
          }}
        ></Image>

        <Space direction="vertical" size="small">
          <div style={{ color: '#374151' }}>Freshness Level</div>
          <div style={{ fontSize: '1.2em' }}>Very Fresh</div>
        </Space>
      </Space>
    </DefaultLayout>
  );
}

export default ScanResult;
