import { ImageGalleryProps } from "../App/App.types"
import ImageCard from "../ImageCard/ImageCard"
import s from './ImageGallery.module.css'



const ImageGallery: React.FC<ImageGalleryProps> = ({ images, handleImageClick }) => {
  return (
    <ul className={s.gallery_container}>
        {images.map(item => <li key={item.id} className={s.item}>
            <ImageCard item={item } handleImageClick={handleImageClick} />
            
            
        </li>)}
      </ul>
  )
}

export default ImageGallery
