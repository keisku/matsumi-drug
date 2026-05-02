import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Catalog.css';
import { GOOGLE_FORM_URL } from '../constants';

interface Product {
  id: string;
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
        id: 'kyushin-kannouganki',
        name: '救心感應丸氣',
        reading: 'きゅうしんかんのうがんき',
        detailUrl: 'https://www.kyushin.co.jp/research/research03.html',
        image: 'https://www.kyushin.co.jp/research/img/kyushin_kannogan.png',
        internalUrl: '/products/kyushin-kannouganki',
      },
      {
        id: 'rikkoshin',
        name: '律鼓心',
        reading: 'りっこしん',
        detailUrl: 'https://www.kyushin.co.jp/research/research05.html',
        image: 'https://www.kyushin.co.jp/research/img/rikkoshin.png',
      },
      {
        id: 'reiosan',
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
        id: 'yakuken-biorinck',
        name: 'ヤクケンバイオリンク',
        reading: 'やくけんばいおりんく',
        detailUrl: 'https://www.chlorella.co.jp/business/products/yakuken/',
				image: 'https://www.chlorella.co.jp/chlo-wp/wp-content/themes/chlorella/images/products/img_products1_biorinck@2x.jpg',
        internalUrl: '/products/yakuken-biorinck',
      },
      {
        id: 'yakuken-biorinck-bcex',
        name: 'ヤクケン バイオリンクBCEx',
        reading: 'やくけんばいおりんくびーしーいーえっくす',
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
        id: 'sasahealth',
        name: 'クマザサ抽出液ササヘルス',
        reading: 'くまざさちゅうしゅつえきささへるす',
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
        id: 'samemiron',
        name: 'サメミロン',
        reading: 'さめみろん',
        detailUrl: 'https://nissei-marine.co.jp/product/item01',
				image: 'https://nissei-marine.co.jp/sites/default/files/2021-02/same300P.jpg',
      },
      {
        id: 'samemiron-ace',
        name: 'サメミロンエース',
        reading: 'さめみろんえーす',
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
        id: 'roilluck',
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
        id: 'kakkonto',
        name: '葛根湯エキス顆粒Aクラシエ',
        reading: 'かっこんとう',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045070563/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045070563/img/product-img.webp',
      },
      {
        id: 'ryokeijutsukanto',
        name: '漢方苓桂朮甘湯エキス顆粒S',
        reading: 'りょうけいじゅつかんとう',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045081019/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045081019/img/product-img.webp',
      },
      {
        id: 'hangebyakujutsutemmato',
        name: '半夏白朮天麻湯エキス顆粒',
        reading: 'はんげびゃくじゅつてんまとう',
        detailUrl: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045180842/',
				image: 'https://www.kracie.co.jp/ph/k-suisinkai/product/packages/4987045180842/img/product-img.webp',
      },
    ],
  },
];

type SearchItem = {
  type: 'product' | 'manufacturer';
  id: string;
  label: string;
  reading: string;
  manufacturer: string;
};

const searchIndex: SearchItem[] = catalogData.flatMap((category) => [
  {
    type: 'manufacturer',
    id: category.id,
    label: category.manufacturer,
    reading: category.manufacturerReading,
    manufacturer: category.manufacturer,
  },
  ...category.products.map<SearchItem>((p) => ({
    type: 'product',
    id: p.id,
    label: p.name,
    reading: p.reading ?? '',
    manufacturer: category.manufacturer,
  })),
]);

export function Catalog() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const blurTimeoutRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContactClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current !== null) {
      window.clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = window.setTimeout(() => {
      setIsFocused(false);
      blurTimeoutRef.current = null;
    }, 150);
  };

  const syncQueryFromInput = () => {
    if (inputRef.current) {
      setQuery(inputRef.current.value);
      setActiveIndex(0);
    }
  };

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.reading.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [query]);

  const location = useLocation();
  useEffect(() => {
    const state = location.state as { focusSearch?: boolean } | null;
    if (state?.focusSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [location]);

  const handleSelect = (id: string) => {
    setQuery('');
    if (inputRef.current) inputRef.current.value = '';
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (matches.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % matches.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + matches.length) % matches.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(matches[activeIndex].id);
    } else if (e.key === 'Escape') {
      setQuery('');
      if (inputRef.current) inputRef.current.value = '';
      setIsFocused(false);
    }
  };

  return (
    <div className="catalog-page">
      <section className="catalog section">
        <div className="container">
          <h1 className="catalog__title">取扱商品リスト</h1>
          <p className="catalog__subtitle">漢方薬・健康食品・化粧品など</p>

          <div className="catalog__search">
            <input
              ref={inputRef}
              type="search"
              className="catalog__search-input"
              placeholder="商品名・メーカー名で検索（漢字・カタカナ・ひらがな）"
              defaultValue=""
              onInput={syncQueryFromInput}
              onCompositionEnd={syncQueryFromInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              aria-label="商品検索"
              aria-autocomplete="list"
              aria-activedescendant={
                matches.length > 0 ? `catalog-search-option-${activeIndex}` : undefined
              }
            />
            {isFocused && query.trim() && (
              <ul className="catalog__search-results" role="listbox">
                {matches.length === 0 ? (
                  <li className="catalog__search-empty">該当なし</li>
                ) : (
                  matches.map((item, idx) => (
                    <li key={`${item.type}-${item.id}`}>
                      <button
                        type="button"
                        id={`catalog-search-option-${idx}`}
                        role="option"
                        aria-selected={idx === activeIndex}
                        className={`catalog__search-result ${idx === activeIndex ? 'catalog__search-result--active' : ''}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => handleSelect(item.id)}
                      >
                        <span className={`catalog__search-tag catalog__search-tag--${item.type}`}>
                          {item.type === 'product' ? '商品' : 'メーカー'}
                        </span>
                        <span className="catalog__search-label">{item.label}</span>
                        {item.type === 'product' && (
                          <span className="catalog__search-meta">{item.manufacturer}</span>
                        )}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

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
                    <article key={prodIndex} id={product.id} className="catalog__product">
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
