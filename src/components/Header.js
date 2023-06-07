import '../style.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="header-logo"><a href="#">NIKKI LOU</a></div>
                    <ul className="links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <Link className='action_btn' to="/feedback">Leave Feedback</Link>
                    <div className="toggle_btn">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="dropdown_menu">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link className='action_btn' to="/feedback">Leave Feedback</Link></li>
                </div>
            </header>
        </>
    )
};

export default Header;