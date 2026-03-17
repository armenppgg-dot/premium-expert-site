import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <p className="eyebrow">{title}</p>
      </div>
      {children}
    </section>
  );
}
