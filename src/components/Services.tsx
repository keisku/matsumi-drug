import './Services.css';

export function Services() {
  const services = [
    {
      title: '不妊・妊活・子宝相談',
      description: '妊娠しやすい体づくりをサポート。体質改善から、病院での治療との併用まで、幅広くご相談いただけます。'
    },
    {
      title: '婦人科のお悩み',
      description: '生理痛、生理不順、更年期障害など、女性特有のお悩みに漢方でアプローチします。'
    },
    {
      title: '冷え性・自律神経',
      description: '冷え性や自律神経の乱れは、様々な不調の原因に。根本から体質改善を目指します。'
    },
    {
      title: 'こころの相談',
      description: 'ストレスや不安、気分の落ち込みなど、こころの健康もサポートいたします。'
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">ご相談内容</h2>
        
        <div className="services__grid">
          {services.map((service, index) => (
            <article key={index} className="services__card">
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="services__note">
          <p>
            上記以外のお悩みも、お気軽にご相談ください。<br />
            漢方薬・健康食品のご案内も行っております。
          </p>
        </div>
      </div>
    </section>
  );
}
