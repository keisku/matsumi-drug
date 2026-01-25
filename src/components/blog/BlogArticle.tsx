import { useParams, Link, Navigate } from 'react-router-dom';
import { createElement } from 'react';
import { getArticleBySlug } from './articles';
import type { BlogSection, StandardBlogSection } from './articles';
import './BlogArticle.css';

function StandardSectionContent({ section }: { section: StandardBlogSection }) {
  switch (section.type) {
    case 'heading': {
      const level = section.level || 2;
      const tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      return createElement(tag, { className: 'blog-standard__heading' }, section.content);
    }
    case 'paragraph':
      return <p className="blog-standard__paragraph">{section.content}</p>;
    case 'image':
      return (
        <div className="blog-standard__image-wrapper">
          <img
            src={section.image}
            alt={section.alt || ''}
            className="blog-standard__image"
            loading="lazy"
          />
        </div>
      );
    case 'list':
      return (
        <div className="blog-standard__list">
          {section.title && <p className="blog-standard__list-title">{section.title}</p>}
          {section.items && section.items.length > 0 && (
            <ul className="blog-standard__list-items">
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      );
    case 'quote':
      return <blockquote className="blog-standard__quote">{section.content}</blockquote>;
    default:
      return null;
  }
}

function SectionContent({ section }: { section: BlogSection }) {
  return (
    <div className="blog-section">
      <div className="blog-section__header">
        <span className="blog-section__season">{section.season}</span>
        <h3 className="blog-section__title">{section.title}</h3>
      </div>

      {section.image && (
        <img
          src={section.image}
          alt={section.title}
          className="blog-section__main-image"
          loading="lazy"
        />
      )}

      <p className="blog-section__intro">{section.intro}</p>

      <div className="blog-section__content">
        <div className="blog-section__item">
          <h4 className="blog-section__item-label">生薬</h4>
          <div className="blog-section__item-header">
            <span className="blog-section__item-name">
              {section.medicine.name}
              <span className="blog-section__item-reading">（{section.medicine.reading}）</span>
            </span>
          </div>
          {section.medicine.image && (
            <img
              src={section.medicine.image}
              alt={section.medicine.name}
              className="blog-section__item-image"
              loading="lazy"
            />
          )}
          <p className="blog-section__item-description">{section.medicine.description}</p>
          <div className="blog-section__item-meta">
            <p><strong>味：</strong>{section.medicine.taste}</p>
            <p><strong>性質：</strong>{section.medicine.nature}</p>
          </div>
        </div>

        <div className="blog-section__item">
          <h4 className="blog-section__item-label">食材</h4>
          <div className="blog-section__item-header">
            <span className="blog-section__item-name">{section.food.name}</span>
          </div>
          {section.food.image && (
            <img
              src={section.food.image}
              alt={section.food.name}
              className="blog-section__item-image"
              loading="lazy"
            />
          )}
          <p className="blog-section__item-description">{section.food.description}</p>
          {(section.food.taste || section.food.nature) && (
            <div className="blog-section__item-meta">
              {section.food.taste && <p><strong>味：</strong>{section.food.taste}</p>}
              {section.food.nature && <p><strong>性質：</strong>{section.food.nature}</p>}
            </div>
          )}
        </div>

        <div className="blog-section__item">
          <h4 className="blog-section__item-label">ツボ</h4>
          <div className="blog-section__item-header">
            <span className="blog-section__item-name">
              {section.acupoint.name}
              <span className="blog-section__item-reading">（{section.acupoint.reading}）</span>
            </span>
          </div>
          {section.acupoint.image && (
            <img
              src={section.acupoint.image}
              alt={section.acupoint.name}
              className="blog-section__item-image"
              loading="lazy"
            />
          )}
          <p className="blog-section__item-description">{section.acupoint.description}</p>
          <p className="blog-section__item-location">
            <strong>探し方：</strong>{section.acupoint.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-article-page">
      <div className="blog-article__breadcrumb">
        <div className="container">
          <Link to="/blog">ブログ</Link>
          <span className="blog-article__breadcrumb-separator">/</span>
          <span>{article.title}</span>
        </div>
      </div>

      <article className="blog-article section">
        <div className="container">
          <header className="blog-article__header">
            <h1 className="blog-article__title">{article.title}</h1>
            <p className="blog-article__description">{article.description}</p>
          </header>

          <div className="blog-article__content">
            {article.type === 'traditional-medicine' ? (
              (article.content as BlogSection[]).map((section, index) => (
                <SectionContent key={index} section={section} />
              ))
            ) : (
              <div className="blog-standard">
                {(article.content as StandardBlogSection[]).map((section, index) => (
                  <StandardSectionContent key={index} section={section} />
                ))}
              </div>
            )}
          </div>

          <div className="blog-article__back">
            <Link to="/blog" className="blog-article__back-link">
              ← ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
