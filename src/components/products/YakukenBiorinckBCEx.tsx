import { ProductDetailLayout } from './ProductDetailLayout';

const BASE_PATH = `${import.meta.env.BASE_URL}images/blog/yakuken-biolink-bcex/`;

const IMAGES = {
  manual: `${BASE_PATH}45909-269x300.jpg`,
  gif: `${BASE_PATH}gennekisyoukai.GIF-300x169.gif`,
  chikugo1: `${BASE_PATH}45910-300x182.jpg`,
  chikugo2: `${BASE_PATH}45911-300x269.jpg`,
  cellWallThin: `${BASE_PATH}45912-300x253.jpg`,
  cellWallThick: `${BASE_PATH}45913-300x253.jpg`,
};

function CaptionedImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="blog-standard__image-wrapper">
      <img src={src} alt={alt} className="blog-standard__image" loading="lazy" />
      {caption && <p className="blog-standard__caption">{caption}</p>}
    </div>
  );
}

export function YakukenBiorinckBCEx() {
  return (
    <ProductDetailLayout
      breadcrumbName="ヤクケン バイオリンクBCEx源液"
      title="ヤクケンバイオリンクBCEx源液"
      highlight="チクゴ株に特有のクロレラエキス（BCEx）を高濃度に濃縮"
      packages={[
        { src: IMAGES.manual, alt: 'ヤクケンバイオリンクBCEx源液', label: 'BCEx源液' },
      ]}
      manufacturer={{ name: 'クロレラ工業株式会社', url: 'https://www.chlorella.co.jp/' }}
      detailUrl="https://www.chlorella.co.jp/business/products/yakuken/"
    >
      <section className="product-detail__section product-detail__effects-section">
        <h2 className="product-detail__section-title">ヤクケンバイオリンクBCEx源液のお知らせ</h2>

        <CaptionedImage src={IMAGES.gif} alt="ヤクケンバイオリンクBCEx源液紹介" />

        <div className="product-detail__effect-block">
          <h3 className="product-detail__effect-title">「ヤクケンバイオリンクBCEx源液」とは</h3>
          <p className="product-detail__effect-text">
            本品は、遺伝子情報によって「バイオリンク種」に分類されるチクゴ株を用いて国内の自社工場で生産するクロレラから、独自の技術によってチクゴ株に特有のクロレラエキス（BCEx）を熱水抽出し、高濃度に濃縮したものです。
          </p>
          <p className="product-detail__effect-text">
            クロレラエキス（BCEx）は、糖たん白、多糖体、核酸関連物質が主成分です。
          </p>
          <CaptionedImage src={IMAGES.chikugo2} alt="チクゴ株拡大（多糖体）" caption="チクゴ株を拡大したもの（↖が多糖体）" />
        </div>

        <div className="product-detail__effect-block">
          <h3 className="product-detail__effect-title">「ヤクケンバイオリンクBCEx源液」の特長</h3>
          <ul className="product-detail__effect-list">
            <li>「人間の体にもともとそなわっている自分の体を常に健康に保とうとする力」に役立つ成分であるクロレラエキス（BCEx）を高濃度に濃縮しています。</li>
            <li>加工黒糖（粗糖・黒糖が原料）の使用だけでクロレラエキス（BCEx）を安定化させています。この加工黒糖に使用されている黒糖は、製造工程で原料由来のミネラルが除去されることがないのでカリウム、カルシウム、鉄、マグネシウムの4種のミネラルを含んでいます。</li>
            <li>飲みやすいシロップ状になっていますので、お子様からご年配の方までどなたにも喜んでいただけます。</li>
          </ul>
        </div>

        <div className="product-detail__effect-block">
          <h3 className="product-detail__effect-title">「チクゴ株」の特長</h3>
          <ul className="product-detail__effect-list">
            <li>BCExという特有の成分クロレラエキスを豊富に含む。</li>
            <li>BCExを構成する成分の一つである多糖体を細胞周囲に分泌している。</li>
          </ul>
          <CaptionedImage src={IMAGES.chikugo1} alt="チクゴ株の周りの多糖体" caption="写真① チクゴ株の周りに白く見えるのが多糖体" />
          <CaptionedImage src={IMAGES.chikugo2} alt="チクゴ株拡大" caption="写真② チクゴ株を拡大したもの（↖が多糖体）" />
          <ul className="product-detail__effect-list">
            <li>細胞壁の厚さが約20nm（ナノメーター）と極めて薄い。（1nmは1/1,000,000mm：ほかのクロレラブルガリス種(C-209株)の細胞壁の厚さは約200nm）</li>
          </ul>
          <div className="blog-standard__compare">
            <div className="blog-standard__compare-item">
              <img src={IMAGES.cellWallThin} alt="細胞壁が薄いチクゴ株" loading="lazy" />
              <p className="blog-standard__caption">写真③ 細胞壁が極めて薄いチクゴ株</p>
            </div>
            <div className="blog-standard__compare-item">
              <img src={IMAGES.cellWallThick} alt="細胞壁が厚いC-209株" loading="lazy" />
              <p className="blog-standard__caption">写真④ 細胞壁が厚いC-209株</p>
            </div>
          </div>
          <ul className="product-detail__effect-list">
            <li>小動物によるクロレラたん白質の消化率は82％。</li>
          </ul>
          <p className="product-detail__effect-text blog-standard__caption">
            BCEx: Beyerinkii Chikugo strain Extractの略
          </p>
        </div>

        <div className="product-detail__effect-block">
          <h3 className="product-detail__effect-title">お召し上がり方・ご注意</h3>
          <p className="product-detail__effect-text">
            健康維持に、1日10～20mlを目安に水またはお湯などで4～5倍にうすめてお召し上がりください。レモン果汁などを適量加えますと清涼感がでておいしくお召し上がりいただけます。
          </p>
          <ul className="product-detail__effect-list">
            <li>エキス製品が飲みにくい方は1日5～10ml程度からお召し上がりいただき、徐々に量を増やしてください。</li>
            <li>幼児、子供の場合は適宜量を減らしてください。</li>
            <li>本品10mlの熱量は約31kcalです。カロリー制限されている方はこれを目安にお召し上がりください。</li>
            <li>開封後は、必ず冷蔵庫（5℃以下）に立てた状態で保存し、なるべく1ヶ月以内にお召し上がりください。</li>
            <li>本品は保存中に浮遊物や沈殿物が生じる場合がありますが、これは内容成分であるたん白質が凝固したものです。食品衛生上または栄養面にも全く支障ありませんので、ご安心の上そのままお召し上がりください。</li>
            <li>キャップの切り口でけがをしないようにご注意下さい。</li>
            <li>ガラス容器ですので破損にご注意ください。</li>
            <li>品質には万全を期していますが、万が一製品に不都合な点がありましたら、下記お客様相談室までご遠慮なくお問合せください。</li>
          </ul>
        </div>
      </section>
    </ProductDetailLayout>
  );
}
