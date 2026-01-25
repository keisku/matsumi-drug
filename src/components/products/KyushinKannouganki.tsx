import { Link } from 'react-router-dom';
import './KyushinKannouganki.css';

const BASE_PATH = `${import.meta.env.BASE_URL}images/products/kyushinkannouganki/`;

const IMAGES = {
  package90: `${BASE_PATH}kyuusinn90-300x208.jpg`,
  package300: `${BASE_PATH}kyusinn300-300x267.jpg`,
  front: `${BASE_PATH}kyuusinn-mae.jpg`,
  right: `${BASE_PATH}kyuusinn-migiyoko-300x103.jpg`,
  back: `${BASE_PATH}kyuusinn-usiro.jpg`,
  left: `${BASE_PATH}kyuusinn-hidari-300x103.jpg`,
  diagonalFront: `${BASE_PATH}kyuusinn-nanameme.jpg`,
  diagonalBack: `${BASE_PATH}kyuusinn-nanameusiro-300x177.jpg`,
  bottom: `${BASE_PATH}kyuusinn-ura.jpg`,
  open1: `${BASE_PATH}kyuusinn-futa1-205x300.jpg`,
  open2: `${BASE_PATH}kyuusinn-futa2-300x224.jpg`,
  open3: `${BASE_PATH}kyuusinn-futa3-183x300.jpg`,
  open4: `${BASE_PATH}kyuusinn-futa4.jpg`,
  packets3: `${BASE_PATH}kyuusinn-tubu5-300x270.jpg`,
  packet1: `${BASE_PATH}kyuusinn-tubu6.jpg`,
  packetWithEyedrops: `${BASE_PATH}kyuusinn-tubu7-300x246.jpg`,
  packetSize: `${BASE_PATH}kyuusinn-tubu3-213x300.jpg`,
  packetBack: `${BASE_PATH}kyuusinn-tubu4-215x300.jpg`,
  pills: `${BASE_PATH}kyuusinn-tubu8-300x269.jpg`,
  singlePill: `${BASE_PATH}kyuusinn-tubu9.jpg`,
  effectKituke: `${BASE_PATH}kituke-300x200.jpg`,
};

export function KyushinKannouganki() {
  return (
    <div className="product-page">
      <div className="product-page__breadcrumb">
        <div className="container">
          <Link to="/catalog">取扱商品</Link>
          <span className="product-page__breadcrumb-separator">/</span>
          <span>救心感應丸氣</span>
        </div>
      </div>

      <article className="product-detail section">
        <div className="container">
          <header className="product-detail__header">
            <h1 className="product-detail__title">救心感應丸氣</h1>
            <p className="product-detail__reading">きゅうしんかんのうがんき</p>
            <p className="product-detail__translations">
              <span lang="en">Kyushinkannougan-ki</span>
              <span lang="ko">큐신칸노간키</span>
            </p>
            <p className="product-detail__highlight">麝香（じゃこう）、牛黄（ごおう）配合</p>
          </header>

          <section className="product-detail__packages">
            <div className="product-detail__package">
              <img
                src={IMAGES.package90}
                alt="救心感應丸氣 90粒（3粒×30包）"
                loading="lazy"
              />
              <p className="product-detail__package-label">90粒（3粒×30包）</p>
            </div>
            <div className="product-detail__package">
              <img
                src={IMAGES.package300}
                alt="救心感應丸氣 300粒（3粒×100包）"
                loading="lazy"
              />
              <p className="product-detail__package-label">300粒（3粒×100包）</p>
            </div>
          </section>

          <section className="product-detail__section product-detail__effects-section">
            <h2 className="product-detail__section-title">『救心感應丸氣』の効能について詳しく解説します</h2>

            <div className="product-detail__effect-block">
              <h3 className="product-detail__effect-title">気つけ</h3>
              <img
                src={IMAGES.effectKituke}
                alt="救心感應丸氣 気つけ"
                className="product-detail__effect-image"
                loading="lazy"
              />
              <h4 className="product-detail__effect-subtitle">「気つけ」とは…</h4>
              <ul className="product-detail__effect-list">
                <li>１．元気をつけること。</li>
                <li>２．意識を回復させること。</li>
                <li>３．気つけを良くする薬のこと。『気つけ薬』</li>
              </ul>
              <p className="product-detail__effect-text">
                疲れて元気のないときに気力を回復させたり、暑さなどで頭がボーッとしたり、めまいや立ちくらみがしたときのような一種の脳貧血状態を改善すること。気絶しているものを生き返らせること。正気を失っているものなどに、元気を取りもどさせて気持ちを引き立てること。原因ははっきりしないが、何らかの原因で心臓機能の低下や、血液循環の低下により、脳への酸素供給や栄養供給が悪くなり、気が遠くなったり、意識が低下した時に、薬の服用などにより血流を改善させて、元気をつけたり勇気を引き立たせること。気力を回復させたり、頭の働きをハッキリさせることにより、一時的な脳の貧血状態を改善させること。
              </p>
            </div>

            <div className="product-detail__effect-block">
              <h3 className="product-detail__effect-title">息切れ</h3>
              <h4 className="product-detail__effect-subtitle">「息切れ」とは…</h4>
              <ul className="product-detail__effect-list">
                <li>１．呼吸が苦しく、はあはあと息をすること。</li>
                <li>２．比喩的に、物事の途中で根気が続かなくなること。</li>
              </ul>
              <p className="product-detail__effect-text">
                息切れとは、呼吸をするのに努力を必要としたり、不快感を自覚することをいいます。息がつまる、胸が圧迫される、空気がほしい、呼吸が重い、努力しないと呼吸ができない、呼吸が浅い、十分に息を吐けない、呼吸が速いなど、様々な表現があります。
              </p>
            </div>

            <div className="product-detail__effect-block">
              <h3 className="product-detail__effect-title">どうき</h3>
              <h4 className="product-detail__effect-subtitle">「どうき（動悸）」とは…</h4>
              <ul className="product-detail__effect-list">
                <li>１．平生より強い、心臓の鼓動。</li>
                <li>２．心臓の拍動を不快感または不安感として自覚する状態のこと。</li>
              </ul>
              <p className="product-detail__effect-text">
                動悸（どうき）とは、心臓の拍動を強く又は速く感じる、脈拍が乱れるといった症状のことをいいます。激しい運動をしたときには、頻脈になるため誰でも動悸を感じますが、軽い運動で動悸を感じるような場合には心臓の働きが低下していることが原因として考えられます。血圧が急に上昇した時や、心臓の働きが低下したりすると、全身に十分な血液を送り出せなくなるため、心臓は拍動数を増やすことによってその不足を補おうとして動悸が起こります。動悸は、健康な方であっても、不安やストレスから起きる精神的なものや、睡眠不足や過労、女性の場合には貧血や、更年期に起こるホルモンバランスの乱れから生じるものなどもあります。具体的な症状としては、例えば「ドキドキする」「胸が一瞬ドキンとする」「ドキンドキンする」「心臓が早く打つ」「脈がとぶ」「脈が詰まる」「胸が一瞬止まるように思う」「脈がゆっくりだが、一拍ずつ強く打つ」「喉の奥がピクピクする」など、普通では自覚されない心臓の拍動やその乱れを自覚することをいいます。
              </p>
            </div>

            <div className="product-detail__effect-block">
              <h3 className="product-detail__effect-title">胃腸虚弱</h3>
              <h4 className="product-detail__effect-subtitle">「胃腸虚弱」とは…</h4>
              <ul className="product-detail__effect-list">
                <li>１．普段から胃腸が弱い。子供のころから胃腸の症状がでやすい。</li>
                <li>２．食欲がわかない。</li>
                <li>３．食べすぎると胃腸の調子が悪くなる。</li>
                <li>４．冷たい飲食物をとるとすぐに腹痛や下痢になる。消化不良になりやすい。</li>
                <li>５．病院検査の異常はないが、胃腸の調子がよくない。</li>
                <li>６．食後に眠くなる。</li>
              </ul>
              <p className="product-detail__effect-text">
                胃腸虚弱とは、体質的なものやストレスなどにより、胃腸の動きが弱くなっている状態です。胃腸が健康でなければ、食事をおいしくとることができません。食事が満足にとれないと、体を動かすエネルギーを十分につくり出せなくなってしまいます。胃腸は、食物から必要な栄養を体内にとりこんだり、食物に含まれる病原菌を殺菌したりする大切な役割を持っています。
              </p>
            </div>

            <div className="product-detail__effect-block">
              <h3 className="product-detail__effect-title">消化不良</h3>
              <h4 className="product-detail__effect-subtitle">「消化不良」とは…</h4>
              <ul className="product-detail__effect-list">
                <li>１．食欲がない。あまりお腹がすかない。</li>
                <li>２．ムカムカする。</li>
                <li>３．胸やけがする。</li>
                <li>４．胃がもたれる。</li>
                <li>５．げっぷがある。</li>
                <li>６．便がゆるい。下痢便。</li>
              </ul>
              <p className="product-detail__effect-text">
                消化不良とは、暴飲暴食、腐敗物の摂取、感染症、疲労などにより、食物が十分に消化されない状態。食欲不振・腹痛・嘔吐・下痢などがみられる。胃の粘膜が弱まり、炎症が繰り返されて治りにくくなっている状態です。突然胃痛や吐き気が起こり、消化不良による膨満感、胃もたれ、胃痛、胸やけ、吐き気、げっぷなどの症状が慢性的に繰り返され、胃潰瘍に進行することもあります。
              </p>
            </div>

            <div className="product-detail__effect-block">
              <h3 className="product-detail__effect-title">下痢</h3>
              <h4 className="product-detail__effect-subtitle">「下痢」とは…</h4>
              <ul className="product-detail__effect-list">
                <li>１．便が水っぽい。</li>
                <li>２．便がゆるい。</li>
                <li>３．液状、またはそれに近い状態の便が出る。</li>
                <li>４．固りのない便が、１日に何度も出る。</li>
                <li>５．腹部不快感や腹痛を伴う。</li>
                <li>６．下痢止め薬を4～5日服用しても改善しない。</li>
              </ul>
              <p className="product-detail__effect-text">
                便の水分が異常に増え、液状またはそれに近い状態を「下痢便」、通常より少し軟らかい状態を「軟便」、下痢や軟便を繰り返し、腹部不快感や腹痛を伴う状態を「下痢もしくは下痢症」といいます。下痢であっても、1週間ほどで症状が治まる場合は「急性下痢」、1ヶ月以上症状が続く場合は「慢性下痢」といいます。
              </p>
              <p className="product-detail__effect-text">
                下痢便は、やわらかい状態、水っぽい状態だけの場合もありますが、便の色が黒かったり、白や赤などの色が混ざっている便、さらには血液や粘液が混ざった便などもあり、危険な状態を知る目安にもなります。バナナ状の便ともいわれる理想的な便の水分量は、70％～80％です。
              </p>
              <p className="product-detail__effect-text">
                軟便は、80％～90％、下痢便は、90％以上になります。
              </p>
            </div>

            <p className="product-detail__drug-class">第2類医薬品</p>
          </section>

          <section className="product-detail__section product-detail__report">
            <h2 className="product-detail__section-title">救心感應丸氣300粒レポート</h2>
            <p className="product-detail__report-intro">
              救心感應丸氣300粒の箱を開けるところからご紹介していきます。
              実際に見て手に取って触っている感覚をイメージしてみてください。
            </p>

            <div className="product-detail__report-section">
              <h3 className="product-detail__report-subtitle">パッケージ外観</h3>
              <div className="product-detail__gallery">
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.front} alt="救心感應丸氣（正面）" loading="lazy" />
                  <figcaption>正面</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.right} alt="救心感應丸氣（右側）" loading="lazy" />
                  <figcaption>右側 - 使用期限、製造番号が記載</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.back} alt="救心感應丸氣（後側）" loading="lazy" />
                  <figcaption>後側 - 成分、効能、用法・用量、注意事項が記載</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.left} alt="救心感應丸氣（左側）" loading="lazy" />
                  <figcaption>左側 - 麝香、牛黄配合の表示</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.diagonalFront} alt="救心感應丸氣（斜め前）" loading="lazy" />
                  <figcaption>斜め前 - 箱サイズ：タテ15.5cm、ヨコ17cm、高さ5.5cm</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.diagonalBack} alt="救心感應丸氣（斜め後ろ）" loading="lazy" />
                  <figcaption>斜め後ろ</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.bottom} alt="救心感應丸氣（底面）" loading="lazy" />
                  <figcaption>底面</figcaption>
                </figure>
              </div>
            </div>

            <div className="product-detail__report-section">
              <h3 className="product-detail__report-subtitle">開封の様子</h3>
              <div className="product-detail__gallery product-detail__gallery--vertical">
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.open1} alt="救心感應丸氣 開封1" loading="lazy" />
                  <figcaption>箱を開けたところ。まだ中フタがあります。</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.open2} alt="救心感應丸氣 開封2" loading="lazy" />
                  <figcaption>中フタを開けます。</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.open3} alt="救心感應丸氣 開封3" loading="lazy" />
                  <figcaption>まだ全部見えません。</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.open4} alt="救心感應丸氣 開封4" loading="lazy" />
                  <figcaption>全開。100包が整列されています。右上に添付文書があります。</figcaption>
                </figure>
              </div>
            </div>

            <div className="product-detail__report-section">
              <h3 className="product-detail__report-subtitle">3粒（1包）の詳細</h3>
              <div className="product-detail__gallery">
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.packets3} alt="救心感應丸氣 3粒×3袋" loading="lazy" />
                  <figcaption>3粒×3袋を手のひらに</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.packet1} alt="救心感應丸氣 3粒×1袋" loading="lazy" />
                  <figcaption>1包（3粒入り）</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.packetWithEyedrops} alt="救心感應丸氣 サイズ比較" loading="lazy" />
                  <figcaption>目薬との大きさ比較</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.packetSize} alt="救心感應丸氣 1包サイズ" loading="lazy" />
                  <figcaption>1包のサイズ：タテ7.5cm、ヨコ5cm</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.packetBack} alt="救心感應丸氣 1包裏面" loading="lazy" />
                  <figcaption>1包の裏面 - 使用期限、製造番号が記載</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.pills} alt="救心感應丸氣 3粒" loading="lazy" />
                  <figcaption>袋を開けた3粒（大人1回分）</figcaption>
                </figure>
                <figure className="product-detail__gallery-item">
                  <img src={IMAGES.singlePill} alt="救心感應丸氣 1粒" loading="lazy" />
                  <figcaption>直径約3mm、黒褐色の丸剤</figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="product-detail__section product-detail__manufacturer">
            <h2 className="product-detail__section-title">製造元</h2>
            <p className="product-detail__manufacturer-name">
              <a
                href="https://www.kyushin.co.jp/research/"
                target="_blank"
                rel="noopener noreferrer"
              >
                救心製薬株式会社
              </a>
            </p>
            <p className="product-detail__official-link">
              <a
                href="https://www.kyushin.co.jp/research/research03.html"
                target="_blank"
                rel="noopener noreferrer"
                className="product-detail__button"
              >
                公式サイトで詳細を見る
              </a>
            </p>
          </section>

          <div className="product-detail__back">
            <Link to="/catalog" className="product-detail__back-link">
              ← 取扱商品一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
