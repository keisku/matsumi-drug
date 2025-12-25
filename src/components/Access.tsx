import './Access.css';

export function Access() {
  const info = [
    { label: '店舗名', value: 'まつみ薬局' },
    { label: '住所', value: '〒622-0013 京都府南丹市園部町本町120番地' },
    { label: '電話番号', value: '0771-63-1233', isPhone: true },
    { label: 'FAX', value: '0771-63-6001' },
    { label: 'E-mail', value: 'info@matsumi-drug.com', isEmail: true },
    { label: '駐車場', value: 'あり（3台）' }
  ];

  const access = [
    { label: '車', value: '京都縦貫自動車道 八木中IC出口より約10分' },
    { label: '電車', value: '嵯峨野線JR園部駅より徒歩約15分' },
    { label: 'バス', value: 'JR園部駅からバス停 本町下車すぐ、園部大橋下車徒歩5分' },
    { label: 'タクシー', value: 'JR園部駅から5分' }
  ];

  const hours = [
    { day: '平日', time: '午前10時〜午後6時' },
    { day: '土曜日', time: '午前10時〜午後1時' },
    { day: '定休日', time: '木曜日・日曜日・祝日（不定休）' }
  ];

  return (
    <section className="access section" id="access">
      <div className="container">
        <h2 className="section-title">店舗情報・アクセス</h2>
        
        <div className="access__content">
          <div className="access__map">
            <iframe
              src="https://www.google.com/maps?q=京都府南丹市園部町本町120番地+まつみ薬局&output=embed&z=17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="まつみ薬局の地図"
            />
          </div>

          <div className="access__info">
            <div className="access__card">
              <h3 className="access__card-title">店舗情報</h3>
              <dl className="access__list">
                {info.map((item, index) => (
                  <div key={index} className="access__list-item">
                    <dt className="access__list-label">{item.label}</dt>
                    <dd className="access__list-value">
                      {item.isPhone ? (
                        <a href={`tel:${item.value}`} className="access__link">{item.value}</a>
                      ) : item.isEmail ? (
                        <a href={`mailto:${item.value}`} className="access__link">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="access__card">
              <h3 className="access__card-title">営業時間</h3>
              <div className="access__hours">
                {hours.map((item, index) => (
                  <div key={index} className="access__hours-item">
                    <span className="access__hours-day">{item.day}</span>
                    <span className="access__hours-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="access__card">
              <h3 className="access__card-title">アクセス方法</h3>
              <div className="access__methods">
                {access.map((item, index) => (
                  <div key={index} className="access__method">
                    <span className="access__method-label">{item.label}</span>
                    <span className="access__method-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
