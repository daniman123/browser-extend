const sectionStyle = "row-span-1 h-full max-h-full rounded bg-slate-200 p-1";

interface SectionWrapperProps {
  children: React.ReactNode;
}

export const SectionWrapper = ({ children }: SectionWrapperProps) => (
  <section className={sectionStyle}>{children}</section>
);

export const renderSection = <P extends {}>(
  Component: React.ComponentType<P>,
  props: P,
) => (
  <SectionWrapper>
    <Component {...props} />
  </SectionWrapper>
);
