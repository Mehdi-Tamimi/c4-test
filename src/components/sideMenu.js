import accountLogo from '../assets/icons/sharp-account-circle.svg'
import closeMenu from '../assets/icons/close-line.svg'
import { useNavigate } from 'react-router-dom'
import buildingLogo from '../assets/icons/building-one.svg'


export default function SideMenu({isOpen,setIsOpen,isLogin}) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/login')
        setIsOpen(false)
    }
    return (
        <div className={`sideMenu ${isOpen? 'open_sideMenu' : null}`}>
            <div onClick={() => setIsOpen(false)} className="menu_holder">
                <img className="menu" src={closeMenu} alt="close"/>
            </div>

            <div className='items'>
                <div onClick={handleOnClick} className='item_holder'>
                    <div className='menu_holder'>
                        <img className='menu' src={accountLogo} alt={'account'}/>
                    </div>
                    <div className='item_text'>
                       ورورد / ثبت نام
                    </div>
        
                </div>
                <div onClick={handleOnClick} className='item_holder'>
                    <div className='menu_holder'>
                        <img className='menu' src={buildingLogo} alt={'projects'}/>
                    </div>
                    <div className='item_text'>
                       پروژه های من
                    </div>
        
                </div>
            </div>
            
        </div>
    )
}