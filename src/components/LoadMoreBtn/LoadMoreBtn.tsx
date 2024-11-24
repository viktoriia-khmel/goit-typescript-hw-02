import { LoadMoreBtnProps } from '../App/App.types'
import s from './LoadMoreBtn.module.css'



const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({handleChangePage}) => {
  return (
    <div>
      <button onClick={handleChangePage} className={s.button}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
