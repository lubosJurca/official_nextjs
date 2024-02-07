import DetailPage from '@/components/detail-page/DetailPage'
import { doterraData } from '@/lib/data'

const Doterra = () => {
  return (
   <DetailPage {...doterraData} />
  )
}

export default Doterra