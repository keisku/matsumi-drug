import { GOOGLE_FORM_URL } from '../constants';

export function openContactForm() {
  window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
}
