import './index.scss';
import  ReactDOM  from 'react-dom';
import CrossSvg from '../CrossIcon';


export interface PopUpProps {
    isOpen: boolean,
    setActive: any,
    children: React.ReactNode
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, setActive, children}) => {
  return ReactDOM.createPortal(
    <>
    <div className={isOpen ? 'modal active' : 'modal'} >
        <div className={isOpen ? 'modal__content active' : 'modal__content'}>
          <CrossSvg setActive={setActive} styles={'modal__cross'}></CrossSvg>
            {children} 
        </div>
    </div>
    </>,
    document.getElementById('modal')
  )
}

export default PopUp;