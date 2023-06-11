import '../../../fonts/fonts.css';
import './Menu.scss';
import logo from "../../../resources/menu/logo.png";

const Menu = () => {


    return (
        <div className='menu'>
            <div className="menu_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu_list">
                <li >Gallery</li>
                <li>Prices for services</li>
                <li>About us</li>
                <li>Contact</li>
            </div>

        </div>
    )
}

export default Menu;