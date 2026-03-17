import Section from "./Section";

const services = [
  "Персональная стратегия и сопровождение",
  "Аудит текущей ситуации и точек роста",
  "Индивидуальные консультации для руководителей"
];

export default function Services() {
  return (
    <Section id="services" title="Услуги">
      <ul className="list">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </Section>
  );
}
