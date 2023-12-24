import accountLogo from '../assets/icons/sharp-account-circle.svg'
import closeMenu from '../assets/icons/close-line.svg'


export default function SideMenu({isOpen,setIsOpen}) {

    return (
        <div className={`sideMenu ${isOpen? 'open_sideMenu' : null}`}>
            <div onClick={() => setIsOpen(false)} className="menu_holder">
                <img className="menu" src={closeMenu} alt="close"/>
            </div>

            <div className='items'>
                <div className='item_holder'>
                    <div className='menu_holder'>
                        <img className='menu' src={accountLogo} alt={'account'}/>
                    </div>
                    <div className='item_text'>
                        ورود / ثبت نام
                    </div>
                </div>
            </div>
            
        </div>
    )
}