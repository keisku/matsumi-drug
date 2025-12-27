import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer, Hero, About, Services, ConsultationStep, Access, Catalog } from './components';

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

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
