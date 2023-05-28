import HistoryItem from '@/components/templates/HistoryItem';
import UserContext from '@/contexts/userContext';
import DefaultLayout from '@/layouts/DefaultLayout';
import useActiveUser from '@/utils/hooks/useActiveUser';
import { Space } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

function History() {
  useActiveUser(true);

  const { user } = useContext(UserContext);

  const router = useRouter();
  useEffect(() => {
    if (!user?.uid) {
      router.replace('/');
    }
  }, [user, router]);

  const [histories, setHistories] = useState([]);

  const getPredictedClass = (predictions) => {
    if (!!predictions?.length) {
      const topPrediction = predictions[0];
      console.log('ppp', topPrediction);
      return topPrediction.top;
    }
  };

  const getPredictedConfidence = (predictions) => {
    if (!!predictions?.length) {
      const topPrediction = predictions[0];
      return topPrediction.confidence;
    }
  };

  useEffect(() => {
    axios
      .get(
        process.env.NEXT_PUBLIC_BACKEND_BASEURL +
          '/api/GetHistories?code=u6hibl46GfxuHwm1PsCnWSUGhW4_euZ5l6E-fw_3HLp0AzFuXkGy_A==&uid=' +
          user?.uid
      )
      .then((response) => {
        setHistories(response.data?.histories);
        console.log('histories response', response.data?.histories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.uid]);

  return (
    <DefaultLayout seoTitle="Scan History - FresCis" title="Scan History">
      <Space direction="vertical">
        {histories.map((history) => (
          <HistoryItem
            key={history?._id}
            imageSrc={history?.image_url}
            predictedClass={getPredictedClass(history?.predictions)}
            predictedConfidence={getPredictedConfidence(history?.predictions)}
          ></HistoryItem>
        ))}
      </Space>
    </DefaultLayout>
  );
}

export default History;
