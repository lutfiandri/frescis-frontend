import DefaultLayout from '@/layouts/DefaultLayout';
import useActiveUser from '@/utils/hooks/useActiveUser';

function Fishpedia() {
  useActiveUser(false);
  return (
    <DefaultLayout seoTitle="Fishpedia - FresCis" title="Fishpedia">
      Fishpedia page
    </DefaultLayout>
  );
}

export default Fishpedia;
