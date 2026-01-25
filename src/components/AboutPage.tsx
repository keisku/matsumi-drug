import './AboutPage.css';

const IMAGES = {
  top: `${import.meta.env.BASE_URL}images/about/about-top3.jpg`,
  pharmacist: `${import.meta.env.BASE_URL}images/about/about03.jpg`,
};

export function AboutPage() {
  return (
    <div className="about-page">
      <article className="about-page__content section">
        <div className="container">
          <section className="about-page__section">
            <div className="about-page__image-wrapper">
              <img
                src={IMAGES.top}
                alt="女性の悩みを漢方薬で解決しませんか"
                className="about-page__hero-image"
                loading="lazy"
              />
            </div>

            <h2 className="about-page__section-title">まつみ薬局ってどんなお店？</h2>
            <p className="about-page__text">
              まつみ薬局は婦人科のお悩みなど女性が相談しやすい女性専門漢方相談薬局です。
            </p>
            <p className="about-page__text">
              その方の症状に合わせたオーダーメイド漢方や体に安心・安全・効果が期待できる健康食品で皆様の健康のお手伝いをさせていただいております。処方せん調剤もしております。
            </p>
            <p className="about-page__text">
              薬の相談、病気の相談、体の悩みや心の悩みなど、お客様ご自身だけでなく、大切なご家族様やお知り合いの方のご相談も承っております。
            </p>
            <p className="about-page__text">
              まつみ薬局に直接お越しになれない方は、お電話またはメールでのご相談も承っております。メールの返信は３日前後のお時間を頂戴しております。お急ぎの方はできるだけお電話ください。
            </p>
          </section>

          <section className="about-page__section">
            <h2 className="about-page__section-title">女性の「体の悩み」と「心の悩み」</h2>
            <p className="about-page__text">
              現在、病気の数は、なんと１９万種類とも言われています。また、医学の進んだ今も、まだ病気の原因が解明されず、そのため有効な治療法が確立されていない難病といわれる病気もますます増えています。
            </p>
            <p className="about-page__text">
              今までどこに行っても良くならなかった方、誰にも相談できずに一人で悩んでおられた方、どんな事でもどうぞお気軽にご相談下さい。
            </p>
            <p className="about-page__text">
              その方の自然治癒力を最大限に引き出しながら症状が改善できるよう、身体にやさしい漢方薬や健康食品などをご紹介し、お勧めしています。また効果的な服用量や服用時間、服用方法なども丁寧にアドバイスさせて頂いております。
            </p>
            <p className="about-page__text">
              お客様に最も適した商品をお渡し出来ること、そしてお客様の期待を上回る接客が出来ることを目指しています。まつみ薬局では、地域に密着している健康相談の専門家である「漢方相談薬局」として責任を持って販売しています。しっかりとその良さを実感して頂けるようこれからも努力してまいります。
            </p>
          </section>

          <section className="about-page__section about-page__section--with-image">
            <h2 className="about-page__section-title">ご相談は、女性管理薬剤師うめがきが対応させていただきます。</h2>
            <div className="about-page__section-content">
              <div className="about-page__section-text">
                <p className="about-page__text">
                  人はなぜ病気になるのでしょう。食事が悪いからでしょうか？ 親から譲り受けた体質のせいでしょうか？ 環境のせいでしょうか？ ストレスでしょうか？ それとも、偶然なのでしょうか？
                </p>
                <p className="about-page__text">
                  薬局で働く薬剤師として、この思い（疑問）が、私の中にずっとありました。そんな中、私なりに気付いた事があります。
                </p>
                <p className="about-page__text">
                  それは、「体の悩み」がある方は、その奥底に、ご本人様も気付いておられないかもしれない「心の悩み」をたくさん抱えておられた、ということです。
                </p>
                <p className="about-page__text">
                  体と共に心も元気になられて、さらにご家族や周りの方も元気に幸せいっぱいの笑顔がどんどん広がっていく事を心より願っています。私自身、心も身体も健康で幸せに満ち溢れる人でありたいと思っています。
                </p>
                <p className="about-page__text">
                  まつみ薬局では「体の悩み」と「心の悩み」がある方にとってお役に立てる場所だと思います。
                </p>
              </div>
              <div className="about-page__section-image">
                <img
                  src={IMAGES.pharmacist}
                  alt="女性管理薬剤師"
                  className="about-page__pharmacist-image"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="about-page__text">
              お悩みの症状やお気持ちは、お一人お一人本当に様々ですが、私がなぜ薬局で働いているのか、なぜ薬剤師になれたのかを心に刻み、与えられた使命をこれからも全うしたいと思っております。
            </p>
            <p className="about-page__text">
              カウンセリング（心の悩み相談）のみも承っております。（ご予約制）
            </p>
            <p className="about-page__text">
              相談コーナーも設けていますので、お気軽にご相談ください。
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
