"use client";
import { navLinks } from "@/app/constants";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";
const Navbar = () => {
	gsap.registerPlugin(useGSAP, ScrollTrigger);
	useGSAP(() => {
		const navTween = gsap.timeline({
			ScrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});
		navTween.fromTo(
			".navbar",
			{ backgroundColor: "transparent" },
			{
				backgroundColor: "#00000050",
				backdropFilter: "blur(5px)",
				duration: 1,
				ease: "power1.inOut",
			}
		);
	});
	return (
		<nav className="navbar">
			<div>
				<a href="#home" className="flex item-center gap-2">
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
