import Section from "./Section";

const faq = [
  {
    question: "С чего начинается работа?",
    answer: "С короткой вводной встречи, на которой уточняем цель и формат взаимодействия."
  },
  {
    question: "Можно ли работать дистанционно?",
    answer: "Да, большая часть задач решается онлайн без потери качества."
  },
  {
    question: "Сколько длится сопровождение?",
    answer: "Зависит от запроса. Обычно стартовый этап занимает от 4 до 8 недель."
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
