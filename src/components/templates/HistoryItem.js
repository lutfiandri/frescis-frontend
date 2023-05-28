import { Image, Space } from 'antd';

export default function HistoryItem({
  imageSrc,
  predictedClass,
  predictedConfidence,
}) {
  return (
    <div
      style={{
        width: '100%',
        border: '1px solid #bbbbbb',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Image
        src={imageSrc}
        alt={predictedClass}
        // preview={false}
        width="25%"
        style={{
          borderRadius: '16px',
          border: '1px solid #bbbbbb',
          objectFit: 'cover',
        }}
      />

      <Space direction="vertical" style={{ width: '100%' }}>
        <div>Class: {predictedClass}</div>
        <div>Confidence: {(predictedConfidence * 100).toFixed(2)}%</div>
      </Space>
    </div>
  );
}
