import './index.scss';

const FilterPizzaTypeBtn = ({title, img, onClick, value}) => {
  return (
    <div className='pizza-filter'>
      <button className='pizza-filter__btn' onClick={()=> onClick(value)}>{title}</button>
      <img src={require(`../../assets/pizza-type/${img}.png`)} className='pizza-filter__img' alt="pizza-filter-img" onClick={()=> onClick(value)}/>
    </div>
  )
}

export default FilterPizzaTypeBtn;