import DefaultLayout from '@/layouts/DefaultLayout';
import useActiveUser from '@/utils/hooks/useActiveUser';

function History() {
  useActiveUser(true);

  return (
    <DefaultLayout seoTitle="Scan History - FresCis" title="Scan History">
      history page
    </DefaultLayout>
  );
}

export default History;
