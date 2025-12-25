import './ConsultationStep.css';
import { GOOGLE_FORM_URL } from '../constants';

export function ConsultationStep() {
  const steps = [
    {
      number: 1,
      title: 'ご予約',
      description: 'まずはお気軽にお電話でご予約ください。特に初めてのお客様は、ゆっくりご相談のお時間をお取りさせていただきます。',
      note: '※ 初回のみ1時間ほどかかります',
      image: `${import.meta.env.BASE_URL}images/consultation_step_1.jpg`,
      showPhone: true,
      checkpoints: [
        '自分の悩みをどこで相談したら良いのかわからない。',
        '病院も行った、他治療も試したが効果がない。',
        '漢方薬には興味がある、飲んでみたい。',
        '悩みをゆっくり相談してくれるところってあるの・・・？',
        'どれくらいお金がかかるのか少し不安。。。',
        '女性薬剤師なら相談しやすいかも。'
      ]
    },
    {
      number: 2,
      title: '丁寧なカウンセリング（問診）',
      description: 'お困りの症状（主訴）や普段の体調の状態のこと、また過去の病歴などもお伺いします。治療中の方はその治療内容や検査値、飲まれているお薬や健康食品などもお気軽にお話しください。',
      image: `${import.meta.env.BASE_URL}images/consultation_step_2.png`,
      checkpoints: []
    },
    {
      number: 3,
      title: '漢方薬や健康食品の提案（オーダーメイド漢方）',
      description: 'お一人お一人の体質やお悩みの症状、原因によって、必要な治療薬が違います。最も効果的な飲み方や飲まれる期間などもわかりやすくご説明させていただきます。また日頃の食生活や心の持ち方など、お役に立つアドバイスもさせていただきます。ご予算もお気軽にご相談ください。',
      image: `${import.meta.env.BASE_URL}images/consultation_step_3.jpg`,
      checkpoints: []
    },
    {
      number: 4,
      title: 'アフターフォロー（カルテによる顧客管理）',
      description: 'お客様の体調経過をお伺いしながら、飲み方や治療方法を丁寧にご説明させていただきます。今まで誰にも相談できなかった事や、わかってもらえなかったお悩みを改善していただけると思います。遠方の方はお電話でご質問いただいても結構です。',
      checkpoints: []
    }
  ];

  const handleContactClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="step section" id="step">
      <div className="container">
        <h2 className="step__heading">
          <svg className="step__heading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
          </svg>
          ご相談の流れ
        </h2>
        
        <div className="step__timeline">
          {steps.map((step, index) => (
            <div key={step.number} className="step__item">
              <div className="step__card">
                <h3 className="step__card-title">
                  STEP{step.number}：{step.title}
                </h3>
                
                <div className="step__card-content">
                  <div className="step__card-text">
                    <p className="step__card-description">
                      {step.description}
                      {step.note && <span className="step__card-note">{step.note}</span>}
                    </p>
                    
                    {step.checkpoints.length > 0 && (
                      <ul className="step__checkpoints">
                        {step.checkpoints.map((point, idx) => (
                          <li key={idx} className="step__checkpoint">
                            <span className="step__checkbox"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.showPhone && (
                      <div className="step__phone-box">
                        <a href="tel:0771-63-1233" className="step__phone-link">
                          <span className="step__phone-label">TEL</span>
                          <span className="step__phone-number">0771-63-1233</span>
                        </a>
                        <p className="step__phone-hours">
                          平日:午前10時〜午後6時（土のみ〜午後1時）定休日:木日、祝:不定休
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {step.image && (
                    <div className="step__card-image">
                      <img src={step.image} alt={step.title} />
                    </div>
                  )}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="step__arrow">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16L6 10H18L12 16Z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="step__cta">
          <p className="step__cta-text">ご不明な点がございましたら、お気軽にお問い合わせください</p>
          <div className="step__cta-buttons">
            <button onClick={handleContactClick} className="step__cta-button step__cta-button--primary">
              お問い合わせ
            </button>
            <a href="tel:0771-63-1233" className="step__cta-button step__cta-button--secondary">
              TEL: 0771-63-1233
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
