import DetailPage from '@/components/detail-page/DetailPage';
import { solariumData } from '@/lib/data';

const Solarium = () => {
  return (
    <>
      <DetailPage {...solariumData} />
    </>
  );
};

export default Solarium;
