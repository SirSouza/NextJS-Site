"use client";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";
import CardNav from "@/components/CardNav";
import ShinyText from "@/components/ShinyText";

export default function Home() {
	const items = [
		{
			label: "About",
			bgColor: "#0D0716",
			textColor: "#fff",
			links: [
				{ label: "Company", ariaLabel: "About Company" },
				{ label: "Careers", ariaLabel: "About Careers" },
			],
		},
		{
			label: "Projects",
			bgColor: "#170D27",
			textColor: "#fff",
			links: [
				{ label: "Featured", ariaLabel: "Featured Projects" },
				{ label: "Case Studies", ariaLabel: "Project Case Studies" },
			],
		},
		{
			label: "Contact",
			bgColor: "#271E37",
			textColor: "#fff",
			links: [
				{ label: "Email", ariaLabel: "Email us" },
				{ label: "Twitter", ariaLabel: "Twitter" },
				{ label: "LinkedIn", ariaLabel: "LinkedIn" },
			],
		},
	];

	return (
		<div
			id="body-content"
			className="flex flex-col w-full min-h-screen  items-center bg-black text-white"
		>
			<LightPillar
				topColor="#8ff382"
				bottomColor="#00eb2f"
				intensity={0.8}
				rotationSpeed={0.3}
				interactive={false}
				glowAmount={0.002}
				pillarWidth={3}
				pillarHeight={0.4}
				noiseIntensity={0.5}
				pillarRotation={25}
			/>
			<div
				id="content-container"
				className="w-5xl flex flex-col items-center justify-center"
			>
				<header
					className="w-full h-11/12 flex justify-center mt-10"
					id="header"
				>
					<CardNav
						logo="/logo.svg"
						logoAlt="Logo"
						items={items}
						baseColor=""
						menuColor="#fff"
						ease="circ.out"
						theme="dark"
						className=" "
					/>
				</header>
				{/* Content Start */}
				<main id="main" className="w-full mt-28">
					{/* Hero */}
					<section className="w-full min-h-96 p-5 flex justify-center items-center">
						<ShinyText
							text="Programar é dar forma ao invisível, criando sistemas que conectam, resolvem e inovam..."
							speed={2}
							delay={0}
							color="#b5b5b5"
							shineColor="#ffffff"
							spread={120}
							direction="left"
							yoyo={false}
							pauseOnHover={false}
							disabled={false}
							className="text-5xl text-center font-space font-bold"
						/>
					</section>
					{/* Portfolio */}
					<section></section>
					{/* Contatct */}
					<section></section>
				</main>
			</div>
		</div>
	);
}
