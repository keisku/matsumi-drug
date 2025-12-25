import { useState, useEffect } from 'react';
import './Header.css';
import { GOOGLE_FORM_URL, LINE_URL } from '../constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <button onClick={scrollToTop} className="header__logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="まつみ薬局" className="header__logo-image" />
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li>
              <button onClick={() => scrollToSection('about')} className="header__nav-link">
                まつみ薬局について
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('step')} className="header__nav-link">
                ご相談の流れ
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('access')} className="header__nav-link">
                アクセス
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
          className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}
