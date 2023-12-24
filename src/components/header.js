import { useState } from 'react'
import menu from '../assets/icons/round-menu.svg'
import SideMenu from './sideMenu'


export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="header">

            <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>

            <div onClick={() => setIsOpen(true)} className='menu_holder'>
                <img className='menu' src={menu} alt="logo" />
            </div>
            
        </div>
    )
}