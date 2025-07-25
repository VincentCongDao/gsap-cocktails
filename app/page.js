import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<div className="h-dvh bg-black"></div>
		</main>
	);
}
