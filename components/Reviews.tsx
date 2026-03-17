import Section from "./Section";

const reviews = [
  {
    text: "Работа с экспертом помогла навести порядок в процессах и вернуть фокус на ключевые задачи.",
    author: "Елена, собственник бизнеса"
  },
  {
    text: "Ценный опыт: спокойный, системный подход и конкретные рекомендации без лишней теории.",
    author: "Андрей, руководитель направления"
  }
];

export default function Reviews() {
  return (
    <Section id="reviews" title="Отзывы">
      <div className="stack">
        {reviews.map((review) => (
          <blockquote className="quote" key={review.author}>
            <p>{review.text}</p>
            <cite>{review.author}</cite>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
