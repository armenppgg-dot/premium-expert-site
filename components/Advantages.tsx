import Section from "./Section";

const advantages = [
  "Точное погружение в ваш запрос",
  "Конфиденциальность и деликатная коммуникация",
  "Решения, которые можно применять сразу"
];

export default function Advantages() {
  return (
    <Section id="advantages" title="Преимущества">
      <ul className="list">
        {advantages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
