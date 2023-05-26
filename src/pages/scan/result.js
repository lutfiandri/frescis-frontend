import ResultContext from '@/contexts/resultContext';
import useActiveUser from '@/utils/hooks/useActiveUser';
import { Image, Space } from 'antd';
import { useContext, useMemo } from 'react';

const { default: DefaultLayout } = require('@/layouts/DefaultLayout');

function ScanResult() {
  useActiveUser(false);

  const { result } = useContext(ResultContext);

  const topPrediction = useMemo(
    () => result?.predictions[0]?.predictions[0],
    [result]
  );

  const topPredictionClass = useMemo(
    () => topPrediction?.class,
    [topPrediction]
  );

  const topPredictionConfidence = useMemo(
    () => topPrediction?.confidence,
    [topPrediction]
  );

  return (
    <DefaultLayout
      title="Scan Result"
      seoTitle="Scan Result - FresCis"
      showBackButton
    >
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Image
          src={result?.image}
          alt="image taken"
          width="100%"
          style={{
            borderRadius: '16px',
          }}
        ></Image>

        <Space direction="vertical" size="small">
          <div style={{ color: '#374151' }}>Freshness Level</div>
          <div style={{ fontSize: '1.2em' }}>
            {topPredictionClass} • {(topPredictionConfidence * 100).toFixed(2)}%
          </div>
        </Space>
      </Space>
    </DefaultLayout>
  );
}

export default ScanResult;
