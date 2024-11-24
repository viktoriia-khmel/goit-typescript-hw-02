import Modal from 'react-modal';
import { SlClose } from "react-icons/sl";
import s from './ImageModal.module.css'
import { ImageModalProps } from '../App/App.types';



const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

    return (
    <div>
      <Modal
        isOpen={isOpen}
          onRequestClose={onRequestClose}
          
          className={s.modal}
      overlayClassName={s.overlay}
      >
        <button onClick={onRequestClose} className={s.close_btn}><SlClose /></button>
        <img src={image.urls.regular} alt="" className={s.modal_image}/>
      </Modal>
    </div>
  )
}

export default ImageModal
