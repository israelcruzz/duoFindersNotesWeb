import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <h2 className="font-normal text-2xl text-[#999591] border-b border-[#3E3B47] py-2 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

function Column ({ children }: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  )
}

Section.Column = Column