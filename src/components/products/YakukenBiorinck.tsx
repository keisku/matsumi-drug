import { ProductDetailLayout } from './ProductDetailLayout';

const BASE_PATH = `${import.meta.env.BASE_URL}images/blog/yakuken-biolink/`;

const IMAGES = {
  main: `${BASE_PATH}yakukennbaiorinnku-tubu1-169x300.jpg`,
  package2000: `${BASE_PATH}45595-300x175.jpg`,
  boxFront: `${BASE_PATH}baio-2hako1-e1588853003131-274x300.jpg`,
  boxRight: `${BASE_PATH}baio-migi-e1588860770561-141x300.jpg`,
  boxLeft: `${BASE_PATH}baio-hidari-e1588860925517-142x300.jpg`,
  boxBack: `${BASE_PATH}baio-ura-e1588861040320-283x300.jpg`,
  boxBottom: `${BASE_PATH}baio-soko-e1588861330916-300x150.jpg`,
  boxOpen: `${BASE_PATH}45594-300x241.jpg`,
  lidOpen: `${BASE_PATH}45596-194x300.jpg`,
  sealOpen: `${BASE_PATH}45598-231x300.jpg`,
  sealComplete: `${BASE_PATH}45614-300x131.jpg`,
  pills10: `${BASE_PATH}45599-300x288.jpg`,
  pills15: `${BASE_PATH}45600-300x286.jpg`,
  pillTop: `${BASE_PATH}45601.jpg`,
  pillSide: `${BASE_PATH}45602.jpg`,
  manual: `${BASE_PATH}48264-206x300.jpg`,
  chikugo1: `${BASE_PATH}45910-300x182.jpg`,
  chikugo2: `${BASE_PATH}45911-300x269.jpg`,
  cellWallThin: `${BASE_PATH}48266-e1586867976633.jpg`,
  cellWallThick: `${BASE_PATH}48267-e1586868071960.jpg`,
  manualBack: `${BASE_PATH}482651-278x300.jpg`,
};

function CaptionedImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="blog-standard__image-wrapper">
      <img src={src} alt={alt} className="blog-standard__image" loading="lazy" />
      {caption && <p className="blog-standard__caption">{caption}</p>}
    </div>
  );
}

export function YakukenBiorinck() {
  return (
    <ProductDetailLayout
      breadcrumbName="ヤクケンバイオリンク"
      title="ヤクケンバイオリンク"
      reading="やくけんばいおりんく"
      translations={{ en: 'Yakuken Biorinck', ko: '야쿠켄바이오린쿠' }}
      highlight="遺伝子情報によって『バイオリンク種』に分類されるチクゴ株を使用"
      packages={[
        { src: IMAGES.main, alt: 'ヤクケンバイオリンク粒', label: '1000粒' },
        { src: IMAGES.package2000, alt: 'ヤクケンバイオリンク粒 2000粒', label: '1000粒×2本' },
      ]}
      manufacturer={{ name: 'クロレラ工業株式会社', url: 'https://www.chlorella.co.jp/' }}
      detailUrl="https://www.chlorella.co.jp/business/products/yakuken/"
    >
      <section className="product-detail__section product-detail__effects-section">
        <h2 className="product-detail__section-title">ヤクケンバイオリンク粒　Biorinckのお知らせ</h2>

        <div className="product-detail__effect-block">
          <CaptionedImage src={IMAGES.manual} alt="ヤクケンバイオリンク取扱説明書" />

          <h3 className="product-detail__effect-title">「ヤクケンバイオリンク」とは</h3>
          <p className="product-detail__effect-text">
            健康相談によって皆様の健康管理に貢献しようとする健康相談薬局・薬店が、広い知識と豊富な経験の中から責任と自信を持っておすすめしている健康維持と栄養補助に役立つクロレラ製品です。
          </p>

          <h3 className="product-detail__effect-title">「バイオリンク種　チクゴ株」の特長</h3>
          <ul className="product-detail__effect-list">
            <li>高品質のクロレラ製品の生産には優れた種株を用いることが必要となります。「ヤクケンバイオリンク」の製造には、遺伝子情報によって「バイオリンク種」に分類されるチクゴ株を用いています。</li>
            <li>国内の自社工場で培養から製品化まで一貫して行い、BCExというチクゴ株に特有のクロレラエキスを平均35％（HTHP法）含む最高級品質（社内比）で、添加物などは一切使用しておりません。</li>
          </ul>
          <p className="product-detail__effect-text">
            BCExは、糖たん白、多糖体、核酸関連物質が主成分で「人間の体にもともとそなわっている自分の体を常に健康に保とうとする力」に役立つ成分であることが解明されています。
          </p>
          <p className="product-detail__effect-text blog-standard__note">
            ※HTHP法：クロレラ細胞から有用成分を効率よく抽出・測定できる方法で水高温高圧抽出法といいます。（High Temperature &amp; High Pressure water extract method）
          </p>

          <h3 className="product-detail__effect-title">「チクゴ株」の特長</h3>
          <ul className="product-detail__effect-list">
            <li>BCExという特有の成分クロレラエキスを豊富に含む。</li>
            <li>BCExを構成する成分の一つである多糖体を細胞周囲に分泌している。</li>
          </ul>
          <CaptionedImage src={IMAGES.chikugo1} alt="チクゴ株の周りの多糖体" caption="写真① チクゴ株の周りに白く見えるのが多糖体" />
          <CaptionedImage src={IMAGES.chikugo2} alt="チクゴ株拡大" caption="写真② チクゴ株を拡大したもの（多糖体）" />
          <div className="blog-standard__compare">
            <div className="blog-standard__compare-item blog-standard__compare-item--narrow">
              <img src={IMAGES.cellWallThin} alt="細胞壁が薄いチクゴ株" loading="lazy" />
              <p className="blog-standard__caption">細胞壁が極めて薄いチクゴ株</p>
            </div>
            <div className="blog-standard__compare-item blog-standard__compare-item--narrow">
              <img src={IMAGES.cellWallThick} alt="細胞壁が厚いC-209株" loading="lazy" />
              <p className="blog-standard__caption">細胞壁が厚いC-209株</p>
            </div>
          </div>
        </div>

        <div className="product-detail__effect-block">
          <h3 className="product-detail__effect-title">お召し上がり方・ご注意</h3>
          <p className="product-detail__effect-text">
            健康維持と栄養補給に、1日30粒～45粒を目安に水またはお湯などでお召し上がりください。
          </p>
          <ul className="product-detail__effect-list">
            <li>胃腸の働きが弱っている場合は少量（1日5粒程度）からお召し上がりいただき、徐々に量を増やして下さい。</li>
            <li>幼児、子どもの場合は適宜量を減らして下さい。</li>
            <li>開封後はキャップをしっかりしめ、保存方法を守り、なるべく早めにお召し上がり下さい。</li>
            <li>クロレラを召し上がりますと、葉緑素が含まれているため、便が黒く（または緑色に）なることがありますが、ご心配ありません。</li>
            <li>クロレラはビタミンKを含んでいますので、ワルファリンを服用されている方は、ご使用に関しましては、担当医師にご相談下さい。</li>
            <li>容器から一度取り出した粒は衛生上、容器に戻さないで下さい。</li>
          </ul>
        </div>

        <CaptionedImage
          src={IMAGES.manualBack}
          alt="ヤクケンバイオリンク取扱説明書（裏面）"
          caption="食生活は、主食、主菜、副菜を基本に食事のバランスを。"
        />
      </section>

      <section className="product-detail__section product-detail__report">
        <h2 className="product-detail__section-title">ヤクケンバイオリンク2000粒レポート</h2>
        <div className="blog-standard">
          <p className="blog-standard__paragraph">
            ヤクケンバイオリンク2000粒の箱を開けるところからご紹介していきます。
          </p>
          <p className="blog-standard__paragraph">
            まだヤクケンバイオリンク粒を実際に見られたり、現物を手に取られたことがない方にも、なるべく忠実にお伝えできればと思います。ぜひ本当に見て手に取って触っている感覚をイメージしてみてください。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒の正面から見たところです。</h3>
          <p className="blog-standard__paragraph">箱の中には、1000粒入りの瓶が2本入っています。</p>
          <CaptionedImage src={IMAGES.boxFront} alt="ヤクケンバイオリンク2000粒（正面）" />
          <p className="blog-standard__paragraph">
            赤字で『<span className="blog-standard__emphasis--red">バイオリンク</span>』って書いてある下にものすごく小さい字で英語が書かれています。
          </p>
          <p className="blog-standard__paragraph">
            「The discoverer of chlorella was M.W.Beyerinck in Holland. This product's name.
            ''Biorinck'' is an artificial word combined with bio and rinck of Beyerinck and signifies the highest quality.」
          </p>
          <p className="blog-standard__paragraph blog-standard__paragraph--green">
            日本語訳：「この製品の名前はクロレラの発見者、オランダ学者のバイエリンクからつけました。バイオリンクはバイエリンク氏（の名前）に由来しており、bioとrinckを組み合わせた造語であり、バイオリンクは最高級のクロレラです（当社比）。」
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒を右側から見たところです。</h3>
          <CaptionedImage src={IMAGES.boxRight} alt="ヤクケンバイオリンク2000粒（右側）" />

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒を左側から見たところです。</h3>
          <p className="blog-standard__paragraph">全く同じです。</p>
          <CaptionedImage src={IMAGES.boxLeft} alt="ヤクケンバイオリンク2000粒（左側）" />

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒を後ろ側から見たところです。</h3>
          <CaptionedImage src={IMAGES.boxBack} alt="ヤクケンバイオリンク2000粒（後ろ側）" />
          <p className="blog-standard__paragraph">
            ヤクケンバイオリンク粒についての説明文、栄養成分表示、お召し上がり方や注意事項も詳しく記載されています。商品名、名称、原材料名、内容量、賞味期限、製造番号、保存方法、販売者や製造所の住所や製品についてのお客相談室電話番号・受付時間も書いてあります。裏面には、大事な内容が盛りだくさんです。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒を底から見たところです。</h3>
          <CaptionedImage src={IMAGES.boxBottom} alt="ヤクケンバイオリンク2000粒（底面）" />
          <p className="blog-standard__paragraph">
            箱サイズは、タテ7cm、ヨコ14cm、高さ15cmです。底面には、「プラ」キャップ、「紙」ラベル、箱:ダンボール、本体:ガラスビン、内蓋シール:アルミと書いてあります。バーコード（4987596250032）表示があります。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒の箱を開けてみます。</h3>
          <CaptionedImage src={IMAGES.boxOpen} alt="ヤクケンバイオリンク2000粒（開封）" />
          <p className="blog-standard__paragraph">
            1000粒瓶入りが2本入っています。商品説明書も入っています。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク2000粒を箱から出してみます。</h3>
          <CaptionedImage src={IMAGES.package2000} alt="ヤクケンバイオリンク2000粒（箱から出した状態）" />
          <p className="blog-standard__paragraph">
            1000粒入もありますが、2000粒の方が断然お得です。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク1000粒のフタを開けます。</h3>
          <CaptionedImage src={IMAGES.lidOpen} alt="ヤクケンバイオリンク1000粒（フタ開封）" />
          <p className="blog-standard__paragraph">
            内蓋は、アルミシールで密封されています。
          </p>

          <h4 className="blog-standard__heading blog-standard__heading--green">《ヤクケンバイオリンクのこだわり》</h4>
          <p className="blog-standard__paragraph blog-standard__paragraph--green">
            内蓋シールは、外部からの酸素や水分を遮断する役割があります。酸素を遮断することによって、葉緑素、カロテノイドやビタミンCなどの酸化を防ぎ、製造時の品質をそのままに作りたての新鮮な状態で製品を消費者のお手元まで届けることができます。
          </p>

          <h4 className="blog-standard__heading blog-standard__heading--green">《内蓋シールの上手な開け方》</h4>
          <CaptionedImage src={IMAGES.sealOpen} alt="内蓋シールの開け方" />
          <ol className="product-detail__effect-list blog-standard__list--green">
            <li><span className="blog-standard__step-number">１．</span>内蓋シールの中央部を親指で押さえて穴をあけてください。</li>
            <li><span className="blog-standard__step-number">２．</span>内蓋の残った部分を指で瓶の内側に抑えてください。</li>
            <li><span className="blog-standard__step-number">３．</span>完成図（↓写真を見てください）</li>
          </ol>
          <CaptionedImage src={IMAGES.sealComplete} alt="内蓋シール完成図" />
          <p className="blog-standard__paragraph blog-standard__note">
            ※内蓋シールを無理にはがすと、瓶のふちの部分のシールがはげたり、シールの破片が瓶内に落ちることがありますので、注意してください。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク粒を蓋に10粒入れてみました。</h3>
          <p className="blog-standard__paragraph">
            1回10粒1日3回の時は、1回分10粒がこの量です。
          </p>
          <CaptionedImage src={IMAGES.pills10} alt="ヤクケンバイオリンク粒10粒" />
          <p className="blog-standard__paragraph">
            クロレラは湿気に弱いので、手についている水分も吸収します。出しすぎた場合、そのまま瓶に戻すと中で湿気やすくなります。瓶から粒を出すときは、手のひらに乗せずに、蓋の中に乗せてください。
          </p>

          <h3 className="blog-standard__heading">15粒入れてみました。</h3>
          <p className="blog-standard__paragraph">
            1回15粒1日3回のときの、1回分の目安です。
          </p>
          <CaptionedImage src={IMAGES.pills15} alt="ヤクケンバイオリンク粒15粒" />

          <h3 className="blog-standard__heading">ヤクケンバイオリンク粒を上から見たところです。</h3>
          <CaptionedImage src={IMAGES.pillTop} alt="ヤクケンバイオリンク粒（上から）" />
          <p className="blog-standard__paragraph">
            知らなかったのですが、「ヤクケン」って刻印あります。一粒一粒のこだわりを感じます。
          </p>

          <h3 className="blog-standard__heading">ヤクケンバイオリンク粒を横から見たところです。</h3>
          <CaptionedImage src={IMAGES.pillSide} alt="ヤクケンバイオリンク粒（横から）" />
          <p className="blog-standard__paragraph">コロンとした形です。</p>
          <p className="blog-standard__paragraph">
            ヤクケンバイオリンク一粒の大きさは、直径8mm、厚さは5mm、重さは0.2gです。
          </p>
          <p className="blog-standard__paragraph">
            噛んだときの味ですが、あくまでも私的表現＋お客様がよく仰られる表現で説明しますと。。。
          </p>
          <p className="blog-standard__paragraph">
            「豆みたい」「なんか海藻っぽい」「意外と食べられる」「ビールのおつまみにイケそうな味」などなどです。これ以上は正確にお伝えしにくいですので、ぜひ実際に口の中にいれて噛みながら食べてみ下さい。
          </p>
        </div>
      </section>
    </ProductDetailLayout>
  );
}
