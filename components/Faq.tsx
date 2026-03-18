import Section from "./Section";

const faq = [
  {
    question: "С чем можно прийти на консультацию?",
    answer: "С вопросами о себе, отношениях, выборе пути, повторяющихся ситуациях, внутренних сомнениях и важных жизненных решениях."
  },
  {
    question: "Подойдёт ли консультация, если я раньше не была у нумеролога?",
    answer: "Да. Консультация проходит спокойно и понятно: всё объясняется простыми словами и в комфортном для вас темпе."
  },
  {
    question: "Что я получу после консультации?",
    answer: "Больше ясности в своей ситуации, лучшее понимание себя и спокойное ощущение, куда двигаться дальше."
  }
];

export default function Faq() {
  return (
    <Section id="faq" title="FAQ">
      <div className="stack">
        {faq.map((item) => (
          <div className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
