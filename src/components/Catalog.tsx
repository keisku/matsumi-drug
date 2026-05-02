import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import { GOOGLE_FORM_URL } from '../constants';

interface Product {
  name: string;
  reading?: string;
  detailUrl?: string;
  image?: string;
  internalUrl?: string;
}

interface ProductCategory {
  id: string;
  manufacturer: string;
  manufacturerReading: string;
  manufacturerUrl?: string;
  products: Product[];
}

const catalogData: ProductCategory[] = [
  {
    id: 'kyushin',
    manufacturer: '救心製薬株式会社',
    manufacturerReading: 'きゅうしんせいやく',
    manufacturerUrl: 'https://www.kyushin.co.jp/research/',
    products: [
      {
        name: '救心感應丸氣',
        reading: 'きゅうしんかんのうがんき',
        detailUrl: 'https://www.kyushin.co.jp/research/research03.html',
        image: 'https://www.kyushin.co.jp/research/img/kyushin_kannogan.png',
        internalUrl: '/products/kyushin-kannouganki',
      },
      {
        name: '律鼓心',
        reading: 'りっこしん',
        detailUrl: 'https://www.kyushin.co.jp/research/research05.html',
        image: 'https://www.kyushin.co.jp/research/img/rikkoshin.png',
      },
      {
        name: '霊黄参',
        reading: 'れいおうさん',
        detailUrl: 'https://www.kyushin.co.jp/research/research01.html',
        image: 'https://www.kyushin.co.jp/research/img/reiosan.png',
      },
    ],
  },
  {
    id: 'chlorella',
    manufacturer: 'クロレラ工業株式会社',
    manufacturerReading: 'くろれらこうぎょう',
    manufacturerUrl: 'https://www.chlorella.co.jp/',
    products: [
      {
        name: 'ヤクケンバイオリンク',
        detailUrl: 'https://www.chlorella.co.jp/business/products/yakuken/',
				image: 'https://www.chlorella.co.jp/chlo-wp/wp-content/themes/chlorella/images/products/img_products1_biorinck@2x.jpg',
        internalUrl: '/products/yakuken-biorinck',
      },
      {
        name: 'ヤクケン バイオリンクBCEx',
        detailUrl: 'https://www.chlorella.co.jp/business/products/yakuken/',
				image: 'https://www.chlorella.co.jp/chlo-wp/wp-content/themes/chlorella/images/products/img_products1_4_6.jpg',
        internalUrl: '/products/yakuken-biorinck-bcex',
      },
    ],
  },
  {
    id: 'daiwa',
    manufacturer: '大和生物研究所',
    manufacturerReading: 'だいわせいぶつけんきゅうじょ',
    manufacturerUrl: 'https://daiwaseibutsu.co.jp/',
    products: [
      {
        name: 'クマザサ抽出液ササヘルス',
        detailUrl: 'https://daiwaseibutsu.co.jp/lp/sasahealth_lp/refresh.php',
				image: 'https://daiwaseibutsu.co.jp/lp/sasahealth_lp/assets/img/set_img_02.jpg',
      },
    ],
  },
  {
    id: 'nissei-marine',
    manufacturer: '日誠マリン工業株式会社',
    manufacturerReading: 'にっせいまりんこうぎょう',
    manufacturerUrl: 'https://nissei-marine.co.jp/',
    products: [
      {
        name: 'サメミロン',
        detailUrl: 'https://nissei-marine.co.jp/product/item01',
				image: 'https://nissei-marine.co.jp/sites/default/files/2021-02/same300P.jpg',
      },
      {
        name: 'サメミロンエース',
        detailUrl: 'https://nissei-marine.co.jp/product/item03',
				image: 'https://nissei-marine.co.jp/sites/default/files/2021-02/ace.jpg',
      },
    ],
  },
  {
    id: 'honomi',
    manufacturer: 'ホノミ漢方 剤盛堂薬品株式会社',
    manufacturerReading: 'ほのみかんぽう',
    manufacturerUrl: 'https://www.zaiseido.co.jp/',
    products: [
      {
        name: 'ロイルック錠',
        reading: 'ろいるっくじょう',
        detailUrl: 'https://www.zaiseido.co.jp/product/search.cgi?action=view_id&p_page_id=2&s_id=28',
				image: 'https://www.zaiseido.co.jp/product/data_image/28-01.png',
      },
    ],
  },
  {
    id: 'kracie',
    manufacturer: 'クラシエ薬品株式会社（漢方療法推進会）',
    manufacturerReading: 'くらしえやくひん',
    manufacturerUrl: 'https://www.kracie.co.jp/company/',
    products: [
      {
        name: '葛根湯エキス顆粒Aクラシエ',
        reading: 'かっこんとう',
        detailUrl: 'https://www.kracie.co.jp/products/ph/1201494_2220.html',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045070563/img/product-img.webp',
      },
      {
        name: '漢方苓桂朮甘湯エキス顆粒S',
        reading: 'りょうけいじゅつかんとう',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045081019/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045081019/img/product-img.webp',
      },
      {
        name: '半夏白朮天麻湯エキス顆粒',
        reading: 'はんげびゃくじゅつてんまとう',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045180842/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045180842/img/product-img.webp',
      },
    ],
  },
];

export function Catalog() {
  const handleContactClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="catalog-page">
      <section className="catalog section">
        <div className="container">
          <h1 className="catalog__title">取扱商品リスト</h1>
          <p className="catalog__subtitle">漢方薬・健康食品・化粧品など</p>

          <button onClick={handleContactClick} className="catalog__contact-mobile">
            お問い合わせ
          </button>

          <nav className="catalog__intro" aria-label="メーカー目次">
            <ul className="catalog__toc">
              {[...catalogData]
                .sort((a, b) => a.manufacturerReading.localeCompare(b.manufacturerReading, 'ja'))
                .map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.id}`}>{category.manufacturer}</a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="catalog__categories">
            {catalogData.map((category, catIndex) => (
              <Fragment key={catIndex}>
              <div id={category.id} className="catalog__category">
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
                    <article key={prodIndex} className="catalog__product">
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
                      {product.internalUrl && (
                        <Link to={product.internalUrl} className="catalog__product-internal-link">
                          詳しく見る →
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              </div>
              {category.id === 'chlorella' && (
                <button onClick={handleContactClick} className="catalog__contact-mobile catalog__contact-mobile--inline">
                  お問い合わせ
                </button>
              )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
