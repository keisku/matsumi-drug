import './About.css';

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">まつみ薬局とお客様とのつながり</h2>
        
        <div className="about__content">
          <div className="about__intro">
            <div className="about__intro-text">
              <p className="about__description">
                私たちの体には、誰もが持っている「自分の力で治そうとする自然治癒力」がそなわっています。
                この力を十分に発揮することで、病気に負けない強いからだ、強い精神力をつけていくことが大切です。
              </p>
              <p className="about__description">
                くすりは苦しい症状を緩和するためには便利なものですが、決してたよるものではなく、
                あくまでも自分を治そうとする力を手助けしてくれるものです。
              </p>
              <p className="about__description">
                まつみ薬局をとおして、からだとこころにやさしい健康知識を深めることで、お客様やお客様の周りの方たちが、
                楽しく幸せに暮らしていただけることが最大の喜びです。
              </p>
              <p className="about__signature">
                漢方薬剤師心理カウンセラー 梅垣眞由美
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
