import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';
import { LINE_URL, PHONE_NUMBER } from '../constants';
import { useNavScroll } from '../hooks/useNavScroll';

export function Footer() {
  const navigate = useNavigate();
  const { isHomePage, scrollToSection, openContactForm } = useNavScroll();

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <button onClick={handleLogoClick} className="footer__logo">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="まつみ薬局" className="footer__logo-image" />
            </button>
            <p className="footer__tagline">
              女性専門漢方相談、不妊の悩みなら、<br />
              昭和58年創業、京都府南丹市のまつみ薬局
            </p>
          </div>

          <div className="footer__links">
            <ul className="footer__links-list">
              <li><Link to="/about">まつみ薬局について</Link></li>
              <li><button onClick={() => scrollToSection('step')}>ご相談の流れ</button></li>
              <li><Link to="/catalog">取扱商品</Link></li>
              <li><Link to="/blog">ブログ</Link></li>
              <li><button onClick={() => scrollToSection('access')}>アクセス</button></li>
            </ul>
          </div>

          <div className="footer__contact">
            <div className="footer__contact-info">
              <a href={`tel:${PHONE_NUMBER}`} className="footer__phone">
                TEL {PHONE_NUMBER}
              </a>
              <p className="footer__address">
                〒622-0013<br />
                京都府南丹市園部町本町120番地
              </p>
              <button onClick={openContactForm} className="footer__cta">
                お問い合わせ
              </button>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="footer__line">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} まつみ薬局. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
