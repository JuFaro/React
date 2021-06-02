//importando logo
import logo from '../img/logo.jpg'

function Header(){
    return(
        <header>
        <a href="#"><img src={logo} alt="Hotel Paraiso"/></a>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Reservas</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    )
}

export default Header;