import { useState } from 'react'
import menu from '../assets/icons/round-menu.svg'
import SideMenu from './sideMenu'
import logo from '../assets/images/logo.svg'
export default function Header({isLogin,user}) {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="header">

            <SideMenu 
            isLogin={isLogin}
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}/>

            <div onClick={() => setIsOpen(true)} className='menu_holder'>
                <img className='menu' src={menu} alt="menu" />
            </div>

            <div className='title'>
                باشگاه فرصت های سرمایه گذاری ایرانیان
            </div>

            <div className='logo_holder'>
                <img className='logo' src={logo} alt='logo'/>
            </div>

        </div>
    )
}