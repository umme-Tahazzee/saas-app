
import { Button } from "@/components/ui/button";
import CompanionsCard from './../components/CompanionsCard';
import Companionslist from "@/components/Companionslist";
import CTA from "@/components/CTA";




export default function Home() {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionsCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="TNeural Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"

        />
        <CompanionsCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#FFDA6E" />
        <CompanionsCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Languages "
          subject="English Literature"
          duration={45}
          color="#BDE7FF"
        />

      </section>
      <section className="home-section">
        <Companionslist />
        <CTA />
      </section>
    </main>
  );
}
