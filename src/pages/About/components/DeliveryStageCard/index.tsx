import './index.scss';

const DeliveryStageCard = ({imgIndex, title, text}) => {
  return (
    <div className='delivery-stage'>
        <img src={require(`../../assets/delivery-stages/${imgIndex}.png`)} className='delivery-stage__img' alt='delivery-stage__img' ></img>
        <div className='delivery-stage__info'>
            <h2 className='delivery-stage__title'>{title}</h2>
            <p className='delivery-stage__description'>{text}</p>
        </div>
    </div>
  )
}

export default DeliveryStageCard;