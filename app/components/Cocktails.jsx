import { cocktailLists, mockTailLists } from "../constants";

const Cocktails = () => {
	return (
		<section id="cocktails" className="noisy">
			<img src="/images/cocktail-left-leaf.png" alt="ct-l-leaf" id="c-left-leaf" />
			<img
				src="/images/cocktail-right-leaf.png"
				alt="ct-r-leaf"
				id="c-right-leaf"
			/>

			<div className="list">
				<div className="popular">
					<h2>
						Most popular cocktails:
						<ul>
							{cocktailLists.map((drink) => {
								return (
									<li key={drink.name}>
										<div className="md:me-28">
											<h3>{drink.name}</h3>
											<p>
												{drink.country} | {drink.detail}
											</p>
										</div>
										<span>- {drink.price}</span>
									</li>
								);
							})}
						</ul>
					</h2>
				</div>

				<div className="loved">
					<h2>
						Most love mocktails:
						<ul>
							{mockTailLists.map((drink) => {
								return (
									<li key={drink.name}>
										<div className="md:me-28">
											<h3>{drink.name}</h3>
											<p>
												{drink.country} | {drink.detail}
											</p>
										</div>
										<span>- {drink.price}</span>
									</li>
								);
							})}
						</ul>
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Cocktails;
