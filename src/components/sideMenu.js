import accountLogo from '../assets/icons/sharp-account-circle.svg'
import closeMenu from '../assets/icons/close-line.svg'
import { useNavigate } from 'react-router-dom'
import buildingLogo from '../assets/icons/building-one.svg'
import logoutIcon from '../assets/icons/logout-circle-r-line.svg'
import { fullName } from '../utils/functions'
export default function SideMenu({user,isOpen,setIsOpen,isLogin,setIsLogin}) {


    const navigate = useNavigate()
    const name = fullName(user)

    const handleOnClick = () => {
        // login page button click handler
        if (!isLogin) {
            navigate('/login')
        }

        setIsOpen(false)
    }


    const handleOnLogout = () => {
        // delete the user's token and set login state false
        localStorage.removeItem('user')
        setIsLogin(false)

    }

    
    const handleOnClickProjects = () => {
        navigate('/')
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
                       {isLogin? `${name}`:'ورورد / ثبت نام'}
                    </div>
        
                </div>
                <div className={isLogin? 'item_holder':'hidden'}>
                    <div className='menu_holder'>
                        <img className='menu' src={buildingLogo} alt={'projects'}/>
                    </div>
                    <div className='item_text'>
                       پروژه های من
                    </div>
        
                </div>
                <div onClick={handleOnLogout} className={isLogin? 'item_holder':'hidden'}>
                    <div className='menu_holder'>
                        <img className='menu' src={logoutIcon} alt={'projects'}/>
                    </div>
                    <div className='item_text'>
                        خروج
                    </div>
        
                </div>
            </div>
            
        </div>
    )
}