import DetailPage from '@/components/detail-page/DetailPage';
import { kineziologieData } from '@/lib/data';

const Kineziologie = () => {
  return <DetailPage {...kineziologieData} />;
};

export default Kineziologie;
