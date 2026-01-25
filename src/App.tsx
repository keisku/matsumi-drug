import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer, Hero, About, Services, ConsultationStep, Access, Catalog, AboutPage } from './components';
import { KyushinKannouganki, YakukenBiorinck, YakukenBiorinckBCEx } from './components/products';
import { BlogList, BlogArticle } from './components/blog';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ConsultationStep />
      <Access />
    </main>
  );
}

function CatalogPage() {
  return (
    <main>
      <Catalog />
    </main>
  );
}

function KyushinKannoungankiPage() {
  return (
    <main>
      <KyushinKannouganki />
    </main>
  );
}

function YakukenBiorinckPage() {
  return (
    <main>
      <YakukenBiorinck />
    </main>
  );
}

function YakukenBiorinckBCExPage() {
  return (
    <main>
      <YakukenBiorinckBCEx />
    </main>
  );
}

function BlogListPage() {
  return (
    <main>
      <BlogList />
    </main>
  );
}

function BlogArticlePage() {
  return (
    <main>
      <BlogArticle />
    </main>
  );
}

function AboutPageWrapper() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPageWrapper />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/products/kyushin-kannouganki" element={<KyushinKannoungankiPage />} />
        <Route path="/products/yakuken-biorinck" element={<YakukenBiorinckPage />} />
        <Route path="/products/yakuken-biorinck-bcex" element={<YakukenBiorinckBCExPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
