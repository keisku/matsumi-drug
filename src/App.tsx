import { Header, Footer, Hero, About, Services, ConsultationStep, Access } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ConsultationStep />
        <Access />
      </main>
      <Footer />
    </>
  );
}

export default App;
