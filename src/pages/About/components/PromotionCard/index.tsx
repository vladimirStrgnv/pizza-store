import './index.scss';

const PromotionCard = ({title, text, imgSrc}) => {
  return (
    <article className='promotion-card'>
        <img src={require(`../../assets/promo/card${imgSrc}.png`)} alt="promotion-img" className='promotion-card__img'/>
        <h3 className='promotion-card__title'>{title}</h3>
        <p className='promotion-card__description'>{text}</p>
    </article>
  )
}

export default PromotionCard;