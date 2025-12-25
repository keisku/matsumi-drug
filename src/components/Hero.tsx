import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero.jpg`}
          alt="つらい女性の悩みを漢方薬で解決しませんか？" 
          className="hero__image"
        />
      </div>
    </section>
  );
}
