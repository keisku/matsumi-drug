import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer, Hero, About, Services, ConsultationStep, Access, Catalog } from './components';
import { KyushinKannouganki } from './components/products';
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

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/products/kyushin-kannouganki" element={<KyushinKannoungankiPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
