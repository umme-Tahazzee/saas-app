import CompanionsCard from './../components/CompanionsCard';
import Companionslist from "@/components/Companionslist";
import CTA from "@/components/CTA";
import { recentSessions } from '@/constants';




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
        <Companionslist 
        title ="Recently completed lessons"
        companions ={recentSessions} 
        classNames="w-2/3 max-lg:w-full "/>
        <CTA />
      </section>
    </main>
  );
}
