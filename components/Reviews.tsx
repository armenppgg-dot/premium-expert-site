import Section from "./Section";

const reviews = [
  {
    text: "После консультации мне стало намного спокойнее. Я лучше поняла себя и увидела, на что могу опираться дальше.",
    author: "Марина"
  },
  {
    text: "Очень тёплая и понятная подача. После разбора появилось чувство ясности, лёгкости и внутреннего спокойствия.",
    author: "Анна"
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
