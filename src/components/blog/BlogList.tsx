import { Link } from 'react-router-dom';
import { blogArticles } from './articles';
import './BlogList.css';

export function BlogList() {
  return (
    <div className="blog-list-page">
      <section className="blog-list section">
        <div className="container">
          <h1 className="blog-list__title">ブログ</h1>

          <div className="blog-list__grid">
            {blogArticles.map((article) => (
              <article key={article.slug} className="blog-card">
                <Link to={`/blog/${article.slug}`} className="blog-card__link">
                  {article.thumbnail && (
                    <div className="blog-card__thumbnail">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="blog-card__content">
                    <h2 className="blog-card__title">{article.title}</h2>
                    <p className="blog-card__description">{article.description}</p>
                    <span className="blog-card__read-more">続きを読む →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
