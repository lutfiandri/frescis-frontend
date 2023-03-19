import DefaultLayout from '@/layouts/DefaultLayout';
import { Button, Space, Tag } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TbCameraRotate } from 'react-icons/tb';
import Webcam from 'react-webcam';

function Scan() {
  const webcamRef = useRef();

  // initialize camera
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(({ kind }) => kind === 'videoinput');
      if (videoDevices.length === 0) {
        alert('video input is not accessible!');
        return;
      }
      setDevices(videoDevices);

      const idx = Number(localStorage.getItem('deviceIdx')) || 0;
      if (idx < videoDevices.length) setDeviceIdx(idx);
    });
  }, []);

  const [deviceIdx, setDeviceIdx] = useState(0);
  const [devices, setDevices] = useState([]);

  const deviceId = useMemo(() => {
    return devices[deviceIdx]?.deviceId;
  }, [deviceIdx, devices]);

  const frontFacingCamera = useMemo(() => {
    const isFrontFacing = !devices[deviceIdx]?.label?.includes('back');
    return isFrontFacing;
  }, [devices, deviceIdx]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    return imageSrc;
  }, [webcamRef]);

  // Base64 Image
  const scanHandler = async () => {
    try {
      const imageb64 = capture();
      console.log(imageb64);

      // setImageUrl(imageb64);

      // onCameraClick();
      // const res = await fetcher.post('/prediction', {
      //   userId: '0',
      //   toothImageBase64: imageb64,
      // });
      // if (res.status !== 201) throw new Error('error on response');

      // setPredictionId(res.data.payload.predictionId);
    } catch (error) {
      console.error(error);
    }
  };

  const switchCameraHandler = () => {
    const n = devices.length;
    console.log(devices);
    if (deviceIdx === n - 1) {
      localStorage.setItem('deviceIdx', '0');
      setDeviceIdx(0);
    } else {
      setDeviceIdx((idx) => {
        localStorage.setItem('deviceIdx', idx + 1 + '');
        return idx + 1;
      });
    }
  };
  return (
    <DefaultLayout
      title="Scan Fish Freshness"
      seoTitle="Scan Fish Freshnes - FresCis"
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          deviceId: deviceId,
        }}
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: frontFacingCamera ? 'scaleX(-100%)' : 'scaleX(100%)',
        }}
        onClick={scanHandler}
        onUserMediaError={(e) => {
          console.error('error opening camera', e);
        }}
      />

      <Tag
        color="blue"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          translate: '-50%',
          pointerEvents: 'none',
        }}
      >
        Tap anywhere to scan
      </Tag>

      <Space
        direction="vertical"
        style={{
          position: 'absolute',
          right: '16px',
          bottom: '16px',
        }}
      >
        <Button
          icon={<TbCameraRotate size={24} />}
          type="primary"
          shape="circle"
          size="large"
          style={{ display: 'grid', placeContent: 'center' }}
          onClick={switchCameraHandler}
        ></Button>
      </Space>
    </DefaultLayout>
  );
}

export default Scan;
