import { useLocation, useNavigate } from 'react-router';
import { openContactForm } from '../utils/openContactForm';

export function useNavScroll() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return { isHomePage, scrollToSection, openContactForm };
}
