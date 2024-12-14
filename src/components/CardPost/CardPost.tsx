interface CardPostProps {
  title: string;
  content: string;
  image: string;
  date: string;
}

export default function CardPost({
  title,
  content,
  image,
  date,
}: CardPostProps) {
  return (
    <article>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <div>
          <span>
            <p>{content}</p>
          </span>
          <span>
            <p>{date}</p>
          </span>
        </div>
      </div>
    </article>
  );
}
