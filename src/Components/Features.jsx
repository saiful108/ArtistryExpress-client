import { FaCamera, FaRandom } from "react-icons/fa";




const features = [
	{
		icon: FaCamera,
		title: "Product Design",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		icon: FaRandom,
		title: "Branding",
		description:
			"Forth form seasons land life whales bring every First man light said greater every given seas called grass Own fourth.",
	},
	{
		icon: FaCamera,
		title: "Photography",
		description:
			"Were stars seas blessed behold to seas in image morning creature day their fruitful herb Divide face day every first.",
	},
	{
		icon: FaCamera,
		title: "Photography",
		description:
			"Were stars seas blessed behold to seas in image morning creature day their fruitful herb Divide face day every first.",
	},
	{
		icon: FaCamera,
		title: "Photography",
		description:
			"Were stars seas blessed behold to seas in image morning creature day their fruitful herb Divide face day every first.",
	},
	{
		icon: FaCamera,
		title: "Photography",
		description:
			"Were stars seas blessed behold to seas in image morning creature day their fruitful herb Divide face day every first.",
	},
];

const Features = () => {
    const FeatureItem = ({ feature }) => {
        return (
            <div className="rounded-[20px] bg-blue-50 dark:bg-[#1E2735] relative overflow-hidden">
                <div className="w-[85px] h-[92px] bg-[#fc6e5c] text-white rounded-br-[42px] text-[35px] inline-flex justify-center items-center mb-4">
                    {/* <FontAwesomeIcon icon={feature.icon} /> */}
                </div>
                <div className="p-6 lg:px-12 lg:pb-12">
                    <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                    <p className="opacity-70">{feature.description}</p>
                </div>
            </div>
        );
    };
    return (
        <section className="ezy__featured12 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 mb-12">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-14 text-center">
						<h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
							Our Features
						</h2>
						<p className="text-lg leading-6 mb-6">
							Dominion dry make shall is is greater fish moving set seas open
							man which. Green make appear moveth fruit likeness.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-6">
					{features.map((feature, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
    );
};

export default Features;