import './header.css'
import logo from '../.././assets/logo (1).png'
import {Link} from "react-router-dom";
export function Header() {
    return (
        <header>
            <div className="some-logo">
                <img src={logo} alt="Логотип" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Бібліотека книг</Link>
                    </li>
                    <li>
                        <Link to="/manager">Менеджер книг</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
