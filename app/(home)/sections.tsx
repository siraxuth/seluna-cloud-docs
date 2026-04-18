import { Footer } from "@/components/home/footer";
import * as motion from "motion/react-client";
import { UpdatesSectionServer } from "@/components/home/updates-server";
import { DocsGridServer } from "@/components/home/docs-grid-server";
import { CTASection } from "@/components/home/cta-section";

const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function HomeSections() {
  return (
    <>
      <AnimatedSection>
        <UpdatesSectionServer />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <DocsGridServer />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <CTASection />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <Footer />
      </AnimatedSection>
    </>
  );
}
