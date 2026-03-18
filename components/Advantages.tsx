import Section from "./Section";

const advantages = [
  "Бережная и спокойная консультация",
  "Понятное объяснение простыми словами",
  "Больше ясности и внутренней опоры после встречи"
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
