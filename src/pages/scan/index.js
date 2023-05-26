import { LoadingScreen } from '@/components/templates/LoadingScreen';
import ResultContext from '@/contexts/resultContext';
import DefaultLayout from '@/layouts/DefaultLayout';
import base64ToBlob from '@/utils/helpers/base64ToBlob';
import useActiveUser from '@/utils/hooks/useActiveUser';
import { Button, Space, Tag } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { TbCameraRotate } from 'react-icons/tb';
import Webcam from 'react-webcam';

function Scan() {
  useActiveUser(false);

  const { setResult } = useContext(ResultContext);

  const webcamRef = useRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      const imageb64 = capture();
      // setImage(imageb64);

      const image = await base64ToBlob(imageb64);
      console.log(image);

      const formData = new FormData();
      formData.append('image', image, 'image.jpg');

      axios
        // .post('http://localhost:7071/api/Predict', formData)
        .post(
          process.env.NEXT_PUBLIC_BACKEND_BASEURL +
            '/api/Predict?code=Sssjuzu786oVyNLwxTQPdLlZe_dEJyAJiP9LOqVMJG6EAzFuc076Vw==',
          formData
        )
        .then((response) => {
          router.push('/scan/result');

          const result = {
            image: imageb64,
            predictions: response?.data?.predictions,
          };

          setResult(result);

          // setIsLoading(false);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });

      // router.push('/scan/result');

      // setImageUrl(imageb64);

      // onCameraClick();
      // const res = await fetcher.post('/prediction', {
      //   userId: '0',
      //   toothImageBase64: imageb64,
      // });
      // if (res.status !== 201) throw new Error('error on response');

      // setPredictionId(res.data.payload.predictionId);
    } catch (error) {
      setIsLoading(false);
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
      noContentPadding
    >
      <div style={{ position: 'relative', height: '100%' }}>
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

        <LoadingScreen when={isLoading}></LoadingScreen>
      </div>
    </DefaultLayout>
  );
}

export default Scan;
