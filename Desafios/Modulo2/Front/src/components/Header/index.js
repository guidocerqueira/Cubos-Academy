import './styles.css';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as BookmarkIcon} from '../../assets/images/bookmark-icon.svg';
import {ReactComponent as PromoIcon} from '../../assets/images/promotion-icon.svg';
import profileIMG from '../../assets/images/profile.jpg';
import Search from '../Seach/';

function Header(props) {
    return (
        <header className="header">
            <Logo className="header__logo" />
            <Search setMovieTitleFilter={props.setMovieTitleFilter} />
            <div className="header__container mr95">
                <BookmarkIcon />
                <a href="#">Favoritos</a>
            </div>
            <div className="header__container mr95">
                <PromoIcon />
                <a href="#">Promoções</a>
            </div>
            <div className="header__container">
                Bem vinda Cris
                <img className="contaner__img" src={profileIMG} alt="profile" />
            </div>
        </header>
    )
}

export default Header;