import './index.scss';
import Cart from '../Cart';

const OrderInfo = () => {
  return (
    <div className='order-info'>
        <Cart></Cart>
        <div className='order-info__description-container'>
            <h2 className='order-info__title'>ВАШ ЗАКАЗ</h2>
            <p className='order-info__order-description'>Итальянская и ещё 2 пиццы</p>
        </div>
    </div>
  )
}

export default OrderInfo;