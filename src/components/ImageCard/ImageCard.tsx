import { ImageCardProps } from '../App/App.types'
import s from './ImageCard.module.css'



const ImageCard: React.FC<ImageCardProps> = ({item, handleImageClick}) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => handleImageClick(item)}
        className={s.image} />
          <p className={s.title}>Photo made by: {item.user.name }</p>
    </div>
  )
}

export default ImageCard


