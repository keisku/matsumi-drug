import { ProductDetailLayout } from './ProductDetailLayout';

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

const EFFECTS = [
  {
    title: '気つけ',
    image: IMAGES.effectKituke,
    subtitle: '「気つけ」とは…',
    items: [
      '１．元気をつけること。',
      '２．意識を回復させること。',
      '３．気つけを良くする薬のこと。『気つけ薬』',
    ],
    text: '疲れて元気のないときに気力を回復させたり、暑さなどで頭がボーッとしたり、めまいや立ちくらみがしたときのような一種の脳貧血状態を改善すること。気絶しているものを生き返らせること。正気を失っているものなどに、元気を取りもどさせて気持ちを引き立てること。原因ははっきりしないが、何らかの原因で心臓機能の低下や、血液循環の低下により、脳への酸素供給や栄養供給が悪くなり、気が遠くなったり、意識が低下した時に、薬の服用などにより血流を改善させて、元気をつけたり勇気を引き立たせること。気力を回復させたり、頭の働きをハッキリさせることにより、一時的な脳の貧血状態を改善させること。',
  },
  {
    title: '息切れ',
    subtitle: '「息切れ」とは…',
    items: [
      '１．呼吸が苦しく、はあはあと息をすること。',
      '２．比喩的に、物事の途中で根気が続かなくなること。',
    ],
    text: '息切れとは、呼吸をするのに努力を必要としたり、不快感を自覚することをいいます。息がつまる、胸が圧迫される、空気がほしい、呼吸が重い、努力しないと呼吸ができない、呼吸が浅い、十分に息を吐けない、呼吸が速いなど、様々な表現があります。',
  },
  {
    title: 'どうき',
    subtitle: '「どうき（動悸）」とは…',
    items: [
      '１．平生より強い、心臓の鼓動。',
      '２．心臓の拍動を不快感または不安感として自覚する状態のこと。',
    ],
    text: '動悸（どうき）とは、心臓の拍動を強く又は速く感じる、脈拍が乱れるといった症状のことをいいます。激しい運動をしたときには、頻脈になるため誰でも動悸を感じますが、軽い運動で動悸を感じるような場合には心臓の働きが低下していることが原因として考えられます。血圧が急に上昇した時や、心臓の働きが低下したりすると、全身に十分な血液を送り出せなくなるため、心臓は拍動数を増やすことによってその不足を補おうとして動悸が起こります。動悸は、健康な方であっても、不安やストレスから起きる精神的なものや、睡眠不足や過労、女性の場合には貧血や、更年期に起こるホルモンバランスの乱れから生じるものなどもあります。具体的な症状としては、例えば「ドキドキする」「胸が一瞬ドキンとする」「ドキンドキンする」「心臓が早く打つ」「脈がとぶ」「脈が詰まる」「胸が一瞬止まるように思う」「脈がゆっくりだが、一拍ずつ強く打つ」「喉の奥がピクピクする」など、普通では自覚されない心臓の拍動やその乱れを自覚することをいいます。',
  },
  {
    title: '胃腸虚弱',
    subtitle: '「胃腸虚弱」とは…',
    items: [
      '１．普段から胃腸が弱い。子供のころから胃腸の症状がでやすい。',
      '２．食欲がわかない。',
      '３．食べすぎると胃腸の調子が悪くなる。',
      '４．冷たい飲食物をとるとすぐに腹痛や下痢になる。消化不良になりやすい。',
      '５．病院検査の異常はないが、胃腸の調子がよくない。',
      '６．食後に眠くなる。',
    ],
    text: '胃腸虚弱とは、体質的なものやストレスなどにより、胃腸の動きが弱くなっている状態です。胃腸が健康でなければ、食事をおいしくとることができません。食事が満足にとれないと、体を動かすエネルギーを十分につくり出せなくなってしまいます。胃腸は、食物から必要な栄養を体内にとりこんだり、食物に含まれる病原菌を殺菌したりする大切な役割を持っています。',
  },
  {
    title: '消化不良',
    subtitle: '「消化不良」とは…',
    items: [
      '１．食欲がない。あまりお腹がすかない。',
      '２．ムカムカする。',
      '３．胸やけがする。',
      '４．胃がもたれる。',
      '５．げっぷがある。',
      '６．便がゆるい。下痢便。',
    ],
    text: '消化不良とは、暴飲暴食、腐敗物の摂取、感染症、疲労などにより、食物が十分に消化されない状態。食欲不振・腹痛・嘔吐・下痢などがみられる。胃の粘膜が弱まり、炎症が繰り返されて治りにくくなっている状態です。突然胃痛や吐き気が起こり、消化不良による膨満感、胃もたれ、胃痛、胸やけ、吐き気、げっぷなどの症状が慢性的に繰り返され、胃潰瘍に進行することもあります。',
  },
  {
    title: '下痢',
    subtitle: '「下痢」とは…',
    items: [
      '１．便が水っぽい。',
      '２．便がゆるい。',
      '３．液状、またはそれに近い状態の便が出る。',
      '４．固りのない便が、１日に何度も出る。',
      '５．腹部不快感や腹痛を伴う。',
      '６．下痢止め薬を4～5日服用しても改善しない。',
    ],
    paragraphs: [
      '便の水分が異常に増え、液状またはそれに近い状態を「下痢便」、通常より少し軟らかい状態を「軟便」、下痢や軟便を繰り返し、腹部不快感や腹痛を伴う状態を「下痢もしくは下痢症」といいます。下痢であっても、1週間ほどで症状が治まる場合は「急性下痢」、1ヶ月以上症状が続く場合は「慢性下痢」といいます。',
      '下痢便は、やわらかい状態、水っぽい状態だけの場合もありますが、便の色が黒かったり、白や赤などの色が混ざっている便、さらには血液や粘液が混ざった便などもあり、危険な状態を知る目安にもなります。バナナ状の便ともいわれる理想的な便の水分量は、70％～80％です。',
      '軟便は、80％～90％、下痢便は、90％以上になります。',
    ],
  },
];

const REPORT_PARTS: Array<{ heading?: string; intro?: string[]; image?: string; alt?: string }> = [
  { heading: '救心感應丸氣の正面から見たところです。', image: IMAGES.front, alt: '救心感應丸氣（正面）' },
  {
    heading: '救心感應丸氣を右側から見たところです。',
    intro: ['使用期限、製造番号が書いてあります。'],
    image: IMAGES.right,
    alt: '救心感應丸氣（右側）',
  },
  {
    heading: '救心感應丸氣を後ろ側から見たところです。',
    intro: [
      '9粒中の成分、効能、用法・用量、注意、救心製薬株式会社の住所や製品についてのお問合せ先電話番号・受付時間、副作用被害者救済制度のお問合せ先電話番号が書いてあります。',
    ],
    image: IMAGES.back,
    alt: '救心感應丸氣（後側）',
  },
  {
    heading: '救心感應丸氣を左側から見たところです。',
    intro: [
      '麝香、牛黄配合、救心感應丸氣、300粒（3粒×100）と書いてあります。右側からと同じことが書いてあります。',
      '麝香、牛黄は、高貴薬と言われています。',
    ],
    image: IMAGES.left,
    alt: '救心感應丸氣（左側）',
  },
  {
    heading: '救心感應丸氣を斜め前、正面から見たところです。',
    intro: ['箱サイズは、タテ15.5cm、ヨコ17cm、高さ5.5cmです。重さは軽いです。あとで正確な重さをご紹介します。'],
    image: IMAGES.diagonalFront,
    alt: '救心感應丸氣（斜め前）',
  },
  { heading: '救心感應丸氣を斜め後ろから見たところです。', image: IMAGES.diagonalBack, alt: '救心感應丸氣（斜め後ろ）' },
  {
    heading: '救心感應丸氣の底面を見たところです。',
    intro: ['紙箱、中仕切りと書いてあります。下にバーコード（498706148829）表示があります。'],
    image: IMAGES.bottom,
    alt: '救心感應丸氣（底面）',
  },
  {
    heading: '救心感應丸氣の箱を開けてみます。',
    intro: ['開けましたが、まだ中フタがあるので中身がまだ見えません。'],
    image: IMAGES.open1,
    alt: '救心感應丸氣 開封1',
  },
  {
    heading: '救心感應丸氣の中フタを開けてみます。',
    intro: [
      'キレイに中フタを破らずに開けるのが少し難しいです。「ここを切り取って開けてください」と矢印↓もありますが、切り取り線はあるもののゆっくり開けてもビリッとどこかが破れてしまいます。',
      'ちなみに包装紙などを破らず綺麗に開けられる人でしたら、開け甲斐があると言ってもいいかもしれません。',
    ],
    image: IMAGES.open2,
    alt: '救心感應丸氣 開封2',
  },
  { intro: ['「わぁ〜」と言いたいところですが、実はまだ全部見えません。'], image: IMAGES.open3, alt: '救心感應丸氣 開封3' },
  {
    heading: '救心感應丸氣の中箱のさらに半フタを開けます。',
    intro: [
      'やっと全開できました。綺麗に100包が整列されています。全て3粒ずつの個包装です。',
      '右上にある白い折りたたまれた用紙は「添付文書」です。',
    ],
    image: IMAGES.open4,
    alt: '救心感應丸氣 開封4',
  },
  {
    intro: [
      'この添付文書には、商品を購入された方だけが見られる外箱には表示できない詳しい商品説明がたくさん記載されています。残念ながらこの場でも添付文書の内容公開は出来かねます。本当は、ぜひご紹介したいのですが、申し訳ございません。',
      '「添付文書は、救心感應丸氣を購入された方だけが見れる特典」とご理解いただければと思います。',
    ],
  },
];

const PACKETS_PARTS: Array<{ heading?: string; intro?: string[]; image?: string; alt?: string }> = [
  {
    intro: [
      'それでは、早速ですが実際に3粒の個包装を手に取ってみたいと思います。',
      '画像だけでは実際の大きさが伝わりにくいので、ここからのレポートもできるだけ忠実に伝わるようご紹介していきます。',
    ],
  },
  {
    heading: '救心感應丸氣の3粒×3包です。',
    intro: ['3粒×3袋を少し重ねてのせてみました。女性の手のひらの上に乗せています。'],
    image: IMAGES.packets3,
    alt: '救心感應丸氣 3粒×3袋',
  },
  {
    heading: '救心感應丸氣の3粒×1包です。',
    intro: ['手のひらの上です。'],
    image: IMAGES.packet1,
    alt: '救心感應丸氣 3粒×1袋',
  },
  {
    intro: ['目薬を横に置いてみました。大きさの参考にしてください。'],
    image: IMAGES.packetWithEyedrops,
    alt: '救心感應丸氣 サイズ比較',
  },
  {
    heading: '救心感應丸氣3粒×1包装のサイズ。',
    intro: ['タテ7.5cm、ヨコ5cmです。'],
    image: IMAGES.packetSize,
    alt: '救心感應丸氣 1包サイズ',
  },
  {
    heading: '救心感應丸氣3粒×1包の裏側です。',
    intro: ['使用期限、製造番号が書いてあります。'],
    image: IMAGES.packetBack,
    alt: '救心感應丸氣 1包裏面',
  },
  {
    heading: '救心感應丸氣の袋を破ります。',
    intro: ['大人（15才以上）1回分は、3粒です。'],
    image: IMAGES.pills,
    alt: '救心感應丸氣 3粒',
  },
  {
    intro: ['直径約3mm、黒褐色の丸剤です。'],
    image: IMAGES.singlePill,
    alt: '救心感應丸氣 1粒',
  },
];

function ReportPart({ heading, intro, image, alt }: { heading?: string; intro?: string[]; image?: string; alt?: string }) {
  return (
    <>
      {heading && <h3 className="blog-standard__heading">{heading}</h3>}
      {intro?.map((line, i) => (
        <p key={i} className="blog-standard__paragraph">{line}</p>
      ))}
      {image && (
        <div className="blog-standard__image-wrapper">
          <img src={image} alt={alt || ''} className="blog-standard__image" loading="lazy" />
        </div>
      )}
    </>
  );
}

export function KyushinKannouganki() {
  return (
    <ProductDetailLayout
      breadcrumbName="救心感應丸氣"
      title="救心感應丸氣"
      reading="きゅうしんかんのうがんき"
      translations={{ en: 'Kyushinkannougan-ki', ko: '큐신칸노간키' }}
      highlight="麝香（じゃこう）、牛黄（ごおう）配合"
      packages={[
        { src: IMAGES.package90, alt: '救心感應丸氣 90粒（3粒×30包）', label: '90粒（3粒×30包）' },
        { src: IMAGES.package300, alt: '救心感應丸氣 300粒（3粒×100包）', label: '300粒（3粒×100包）' },
      ]}
      manufacturer={{ name: '救心製薬株式会社', url: 'https://www.kyushin.co.jp/research/' }}
      detailUrl="https://www.kyushin.co.jp/research/research03.html"
    >
      <section className="product-detail__section product-detail__effects-section">
        <h2 className="product-detail__section-title">『救心感應丸氣』の効能について詳しく解説します</h2>

        {EFFECTS.map((effect) => (
          <div key={effect.title} className="product-detail__effect-block">
            <h3 className="product-detail__effect-title">{effect.title}</h3>
            {effect.image && (
              <img
                src={effect.image}
                alt={`救心感應丸氣 ${effect.title}`}
                className="product-detail__effect-image"
                loading="lazy"
              />
            )}
            <h4 className="product-detail__effect-subtitle">{effect.subtitle}</h4>
            <ul className="product-detail__effect-list">
              {effect.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {effect.text && <p className="product-detail__effect-text">{effect.text}</p>}
            {effect.paragraphs?.map((p, i) => (
              <p key={i} className="product-detail__effect-text">{p}</p>
            ))}
          </div>
        ))}

        <p className="product-detail__drug-class">第2類医薬品</p>
      </section>

      <section className="product-detail__section product-detail__report">
        <h2 className="product-detail__section-title">救心感應丸氣300粒レポート</h2>
        <div className="blog-standard">
          <p className="blog-standard__paragraph">
            救心感應丸氣300粒の箱を開けるところからご紹介していきます。
          </p>
          <p className="blog-standard__paragraph">
            まだ救心感應丸氣を実際に見られたり、現物を手に取られたことがない方にも、なるべく忠実にお伝えできればと思います。ぜひ本当に見て手に取って触っている感覚をイメージしてみてください。
          </p>

          {REPORT_PARTS.map((part, i) => <ReportPart key={i} {...part} />)}

          <h2 className="blog-standard__heading">救心感應丸氣3粒（1包）レポート</h2>
          {PACKETS_PARTS.map((part, i) => <ReportPart key={i} {...part} />)}
        </div>
      </section>
    </ProductDetailLayout>
  );
}
