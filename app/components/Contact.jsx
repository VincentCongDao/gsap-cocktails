"use client";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import React from "react";
import { openingHours, socials } from "../constants";
const Contact = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create("#contact h2", {
			type: "word",
		});
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#contact",
				start: "top center",
			},
			ease: "power1.inOut",
		});

		timeline
			.from(titleSplit.words, {
				opacity: 0,
				yPercent: 100,
				stagger: 0.02,
			})
			.from("#contact h3, #contact p", {
				opacity: 0,
				yPercent: 100,
				stagger: 0.02,
			})
			.to("#f-right-leaf", {
				y: "-50",
				duration: 1,
				ease: "power1.inOut",
			})
			.to(
				"#f-left-leaf",
				{
					y: "-50",
					duration: 1,
					ease: "power1.inOut",
				},
				"<"
			);
	});
	return (
		<footer id="contact">
			<img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf" />
			<img
				src="/images/footer-right-leaf.png"
				alt="right-leaf"
				id="f-right-leaf"
			/>
			<div className="content">
				<h2>Where to Find Us</h2>
				<div>
					<h3>Laboris nostrud</h3>
					<p>
						Deserunt et adipisicing non cillum pariatur occaecat aliquip laboris.
					</p>
				</div>
				<div>
					<h3>Contact Us</h3>
					<p>(111) 223-3242</p>
					<p>aliquip@shorttail.com</p>
				</div>
				<div>
					<h3>Open Everyday</h3>
					{openingHours.map((time) => (
						<p key={time.day}>
							{time.day} : {time.time}
						</p>
					))}
				</div>
				<div>
					<h3>Socials</h3>

					<div className="flex-center gap-5">
						{socials.map((s) => (
							<a
								key={s.name}
								href={s.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={s.name}
							>
								<img src={s.icon} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Contact;
