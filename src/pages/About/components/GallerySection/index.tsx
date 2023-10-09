import './index.scss';
import { galleryImagesData } from '../../consts';

const GallerySection = () => {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Следите за нами в Instagram</h2>
      <h3 className="gallery__inst-link">@pizzamenu</h3>
      <ul className="gallery__images-list">
        {galleryImagesData.map((img, index) => (
          <li className="gallery__images-list-item" key={index}>
            <img
              className="gallery__images-list-img"
              src={require(`../../assets/gallery/inst${img.imgIndex}.png`)}
              alt=""
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GallerySection;