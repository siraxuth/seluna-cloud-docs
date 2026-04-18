import { HeroSection } from "./hero-section";
import HomeSections from "./sections";

export default function Home() {
    return (
        <main className="flex flex-col">
            <HeroSection />
            <HomeSections />
        </main>
    );
}
