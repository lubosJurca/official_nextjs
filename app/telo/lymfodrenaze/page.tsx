import DetailPage from '@/components/detail-page/DetailPage';
import { lymfodrenazeData } from '@/lib/data';

const Lymfodrenaze = () => {
  return (
    <>
      <DetailPage {...lymfodrenazeData} />
    </>
  );
};

export default Lymfodrenaze;
