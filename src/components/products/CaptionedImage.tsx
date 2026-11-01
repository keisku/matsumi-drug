export function CaptionedImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="blog-standard__image-wrapper">
      <img src={src} alt={alt} className="blog-standard__image" loading="lazy" />
      {caption && <p className="blog-standard__caption">{caption}</p>}
    </div>
  );
}
