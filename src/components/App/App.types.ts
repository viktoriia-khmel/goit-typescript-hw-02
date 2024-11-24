export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description?: string;
  user: {
    name: string;
    portfolio_url: string;
    };
  likes?: number;
}

export interface ImageCardProps {
  item: Image;
  handleImageClick: (item: Image) => void;
};

export interface ImageGalleryProps {
  images: Image[];
  handleImageClick: (item: Image) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

export interface LoadMoreBtnProps {
  handleChangePage: () => void;
}

export interface Response {
  total: number;
  total_pages: number;
  results: Image[];
}