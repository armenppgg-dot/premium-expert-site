import Section from "./Section";

const services = [
  "Личная консультация по дате рождения",
  "Разбор отношений и совместимости",
  "Разбор периода жизни и важных решений"
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
