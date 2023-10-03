import './index.scss';

const TelInfo = () => {
  return (
    <div className='tel-info-container'>
        <div className='tel-info-container__img'></div>
        <div className='tel-info-container__wrapper'>
            <a href="tel:+74951234567" className='tel-info-container__number'>+7 (918) 432-65-87</a>
            <span className='tel-info-container__working-days'>Ежедневно с 9:00 до 23:00</span>
        </div>
    </div>
  )
}

export default TelInfo;