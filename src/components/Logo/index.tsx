import './index.scss';

interface LogoProps {
  styles?: string
}

const Logo: React.FC<LogoProps> = ({styles = ''}) => {
  return (
    <div className={`logo ${styles}`}></div>
  )
}

export default Logo;