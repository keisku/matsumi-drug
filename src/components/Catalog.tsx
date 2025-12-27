import './Catalog.css';

interface Product {
  name: string;
  reading?: string;
  description: string;
  detailUrl?: string;
  image?: string;
}

interface ProductCategory {
  manufacturer: string;
  manufacturerUrl?: string;
  products: Product[];
}

const catalogData: ProductCategory[] = [
  {
    manufacturer: '救心製薬株式会社',
    manufacturerUrl: 'https://www.kyushin.co.jp/research/',
    products: [
      {
        name: '救心感應丸氣',
        reading: 'きゅうしんかんのうがんき',
        description: '麝香・牛黄配合。気つけ、息切れ、どうき、胃腸虚弱、消化不良、下痢に。',
        detailUrl: 'https://www.kyushin.co.jp/research/research03.html',
        image: 'https://www.kyushin.co.jp/research/img/kyushin_kannogan.png',
      },
      {
        name: '律鼓心',
        reading: 'りっこしん',
        description: '牛黄・鹿茸・蟾酥配合。どうき、息切れ、気つけに。',
        detailUrl: 'https://www.kyushin.co.jp/research/research05.html',
        image: 'https://www.kyushin.co.jp/research/img/rikkoshin.png',
      },
      {
        name: '霊黄参',
        reading: 'れいおうさん',
        description: '牛黄・人参配合。虚弱体質、肉体疲労、病中病後、胃腸虚弱、食欲不振、血色不良、冷え症に。',
        detailUrl: 'https://www.kyushin.co.jp/research/research01.html',
        image: 'https://www.kyushin.co.jp/research/img/reiosan.png',
      },
    ],
  },
  {
    manufacturer: 'クロレラ工業株式会社',
    manufacturerUrl: 'https://www.chlorella.co.jp/',
    products: [
      {
        name: 'ヤクケンバイオリンク',
        description: "遺伝子情報によって『バイオリンク種』に分類される『チクゴ株』を使用したクロレラ製品。",
        detailUrl: 'https://www.chlorella.co.jp/business/products/yakuken/',
				image: 'https://www.chlorella.co.jp/chlo-wp/wp-content/themes/chlorella/images/products/img_products1_biorinck@2x.jpg',
      },
      {
        name: 'ヤクケン バイオリンクBCEx',
        description: 'バイオリンクの濃縮エキス製品。',
        detailUrl: 'https://www.chlorella.co.jp/business/products/yakuken/',
				image: 'https://www.chlorella.co.jp/chlo-wp/wp-content/themes/chlorella/images/products/img_products1_4_6.jpg',
      },
    ],
  },
  {
    manufacturer: '大和生物研究所',
    manufacturerUrl: 'https://daiwaseibutsu.co.jp/',
    products: [
      {
        name: 'クマザサ抽出液ササヘルス',
        description: '疲労回復、食欲不振、口臭、体臭除去、口内炎に。厚生労働省が認めた医薬品。',
        detailUrl: 'https://daiwaseibutsu.co.jp/lp/sasahealth_lp/refresh.php',
				image: 'https://daiwaseibutsu.co.jp/lp/sasahealth_lp/assets/img/set_img_02.jpg',
      },
    ],
  },
  {
    manufacturer: '日誠マリン工業株式会社',
    manufacturerUrl: 'https://nissei-marine.co.jp/',
    products: [
      {
        name: 'サメミロン',
        description: '深海ザメの肝油から精製された高純度の活性スクアレン配合の健康補助食品。',
        detailUrl: 'https://nissei-marine.co.jp/product/item01',
				image: 'https://nissei-marine.co.jp/sites/default/files/2021-02/same300P.jpg',
      },
      {
        name: 'サメミロンエース',
        description: '高純度スクアレン99％以上配合の医薬部外品。肌荒れ・あせも・しもやけ・あかぎれ・ニキビに。',
        detailUrl: 'https://nissei-marine.co.jp/product/item03',
				image: 'https://nissei-marine.co.jp/sites/default/files/2021-02/ace.jpg',
      },
    ],
  },
  {
    manufacturer: 'ホノミ漢方 剤盛堂薬品株式会社',
    manufacturerUrl: 'https://www.zaiseido.co.jp/',
    products: [
      {
        name: 'ロイルック錠',
        reading: 'ろいるっくじょう',
        description: '神経痛・リウマチ・関節痛・筋肉痛などの痛みを改善する生薬製剤。',
        detailUrl: 'https://www.zaiseido.co.jp/product/search.cgi?action=view_id&p_page_id=2&s_id=28',
				image: 'https://www.zaiseido.co.jp/product/data_image/28-01.png',
      },
    ],
  },
  {
    manufacturer: 'クラシエ株式会社',
    manufacturerUrl: 'https://www.kracie.co.jp/company/',
    products: [
      {
        name: '葛根湯エキス顆粒Aクラシエ',
        reading: 'かっこんとう',
        description: 'かぜや肩こりなどに効果があります。',
        detailUrl: 'https://www.kracie.co.jp/products/ph/1201494_2220.html',
				image: 'https://www.kracie.co.jp/products/image/item/ph_4987045068423_200.jpg',
      },
      {
        name: '漢方苓桂朮甘湯エキス顆粒S',
        reading: 'りょうけいじゅつかんとう',
        description: '水毒によっておこる諸症状の治療に用いる代表的な漢方薬です。めまい、ふらつきがあり、ときにのぼせや動悸がある方の、神経症、めまい、動悸、息切れ、頭痛に。',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045081019/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045081019/img/product-img.webp',
      },
      {
        name: '半夏白朮天麻湯エキス顆粒',
        reading: 'はんげびゃくじゅつてんまとう',
        description: '胃腸が弱く下肢が冷える人の頭痛、立ちくらみ、めまい、蓄膿症（副鼻腔炎）に。',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045180842/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045180842/img/product-img.webp',
      },
    ],
  },
];

export function Catalog() {
  return (
    <div className="catalog-page">
      <section className="catalog section">
        <div className="container">
          <h1 className="catalog__title">取扱商品リスト</h1>
          <p className="catalog__subtitle">漢方薬・健康食品・化粧品など</p>

          <div className="catalog__intro">
            <p>
              まつみ薬局では、多くの漢方薬、健康食品、化粧品などを取り扱っております。
              <br />
              価格・在庫については、お気軽にお問合せください。
              <br />
              ここに掲載されていない商品でお取り寄せできるものもあります。
            </p>
          </div>

          <div className="catalog__categories">
            {catalogData.map((category, catIndex) => (
              <div key={catIndex} className="catalog__category">
                <h2 className="catalog__manufacturer">
                  {category.manufacturerUrl ? (
                    <a href={category.manufacturerUrl} target="_blank" rel="noopener noreferrer">
                      {category.manufacturer}
                    </a>
                  ) : (
                    category.manufacturer
                  )}
                </h2>
                <div className="catalog__products">
                  {category.products.map((product, prodIndex) => (
                    <article key={prodIndex} className={`catalog__product ${product.image ? 'catalog__product--with-image' : ''}`}>
                      {product.image && (
                        <div className="catalog__product-image-wrapper">
                          <a href={product.detailUrl} target="_blank" rel="noopener noreferrer">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="catalog__product-image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                      )}
                      <div className="catalog__product-content">
                        <div className="catalog__product-header">
                          <h3 className="catalog__product-name">
                            {product.detailUrl ? (
                              <a href={product.detailUrl} target="_blank" rel="noopener noreferrer">
                                {product.name}
                              </a>
                            ) : (
                              product.name
                            )}
                          </h3>
                          {product.reading && (
                            <span className="catalog__product-reading">{product.reading}</span>
                          )}
                        </div>

                        <p className="catalog__product-description">{product.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
