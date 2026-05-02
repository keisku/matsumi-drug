import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { GOOGLE_FORM_URL, LINE_URL } from '../constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    setIsMenuOpen(false);
    navigate('/catalog', { state: { focusSearch: true } });
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
      const sectionId = (location.state as { scrollTo: string }).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <Link to="/" className="header__logo" onClick={handleLogoClick}>
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="まつみ薬局" className="header__logo-image" />
        </Link>

        <div className="header__right">
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li>
              <Link to="/about" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                まつみ薬局について
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection('step')} className="header__nav-link">
                ご相談の流れ
              </button>
            </li>
            <li>
              <Link to="/catalog" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                取扱商品
              </Link>
            </li>
            <li>
              <Link to="/blog" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                ブログ
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection('access')} className="header__nav-link">
                アクセス
              </button>
            </li>
            <li className="header__nav-search-item">
              <button onClick={handleSearchClick} className="header__nav-link">
                検索
              </button>
            </li>
            <li>
              <button onClick={handleContactClick} className="header__nav-cta">
                お問い合わせ
              </button>
            </li>
            <li>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="header__line">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" />
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={handleSearchClick}
          className="header__search-btn"
          aria-label="商品を検索"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.65" y2="16.65" />
          </svg>
          <span className="header__search-label">検索</span>
        </button>

        <button
          className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}
