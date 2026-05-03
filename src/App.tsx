import { useEffect, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header, Footer, Hero, About, Services, ConsultationStep, Access, Catalog, AboutPage } from './components';
import { KyushinKannouganki, YakukenBiorinck, YakukenBiorinckBCEx } from './components/products';
import { BlogList, BlogArticle } from './components/blog';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key]);
  return null;
}

const page = (children: ReactNode) => <main>{children}</main>;

const home = page(
  <>
    <Hero />
    <About />
    <Services />
    <ConsultationStep />
    <Access />
  </>
);

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={home} />
        <Route path="/about" element={page(<AboutPage />)} />
        <Route path="/catalog" element={page(<Catalog />)} />
        <Route path="/products/kyushin-kannouganki" element={page(<KyushinKannouganki />)} />
        <Route path="/products/yakuken-biorinck" element={page(<YakukenBiorinck />)} />
        <Route path="/products/yakuken-biorinck-bcex" element={page(<YakukenBiorinckBCEx />)} />
        <Route path="/blog" element={page(<BlogList />)} />
        <Route path="/blog/:slug" element={page(<BlogArticle />)} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
