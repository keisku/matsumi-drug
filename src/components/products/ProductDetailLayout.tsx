import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import './ProductDetail.css';
import '../blog/BlogStandard.css';

export interface ProductPackage {
  src: string;
  alt: string;
  label: string;
}

export interface ProductDetailLayoutProps {
  breadcrumbName: string;
  title: string;
  reading?: string;
  translations?: { en?: string; ko?: string };
  highlight: string;
  packages: ProductPackage[];
  manufacturer: { name: string; url: string };
  detailUrl: string;
  children: ReactNode;
}

export function ProductDetailLayout({
  breadcrumbName,
  title,
  reading,
  translations,
  highlight,
  packages,
  manufacturer,
  detailUrl,
  children,
}: ProductDetailLayoutProps) {
  return (
    <div className="product-page">
      <div className="product-page__breadcrumb">
        <div className="container">
          <Link to="/catalog">取扱商品</Link>
          <span className="product-page__breadcrumb-separator">/</span>
          <span>{breadcrumbName}</span>
        </div>
      </div>

      <article className="product-detail section">
        <div className="container">
          <header className="product-detail__header">
            <h1 className="product-detail__title">{title}</h1>
            {reading && <p className="product-detail__reading">{reading}</p>}
            {translations && (translations.en || translations.ko) && (
              <p className="product-detail__translations">
                {translations.en && <span lang="en">{translations.en}</span>}
                {translations.ko && <span lang="ko">{translations.ko}</span>}
              </p>
            )}
            <p className="product-detail__highlight">{highlight}</p>
          </header>

          <section className="product-detail__packages">
            {packages.map((pkg, i) => (
              <div key={i} className="product-detail__package">
                <img src={pkg.src} alt={pkg.alt} loading="lazy" />
                <p className="product-detail__package-label">{pkg.label}</p>
              </div>
            ))}
          </section>

          {children}

          <section className="product-detail__section product-detail__manufacturer">
            <h2 className="product-detail__section-title">製造元</h2>
            <p className="product-detail__manufacturer-name">
              <a href={manufacturer.url} target="_blank" rel="noopener noreferrer">
                {manufacturer.name}
              </a>
            </p>
            <p className="product-detail__official-link">
              <a
                href={detailUrl}
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
