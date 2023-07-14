type cardprops = {
	title: string;
	subtitle: string;
	color?: string;
	loading?: string;
};

const Card = ({ title, subtitle, color, loading }: cardprops) => {
	return (
		<div className="card">
			<div className="card-title flex justify-between items-center">
				<h3 className="font-bold text-[1.6rem]">{title}</h3>
				<div className="more" />
			</div>
			<h4>{subtitle}</h4>

			<div className="progress-container flex justify-between items-end">
				<div className="flex gap-1 mt-6">
					<div className="progress" />
					<span className="font-semibold">Progress</span>
				</div>
				<span className="font-semibold text-white"> 7 / 10</span>
			</div>

			<div className="progress-bar">
				<div
					className="progress-bar--loading"
					style={{ backgroundColor: color, width: loading }}
				/>
			</div>

			<div className="date-info-container">
				<span className="font-semibold">24 Aug 2023</span>

				<div className="message-attach flex gap-4 text-[1.4rem]">
					<div className="flex gap-2 items-center	">
						<div className="messages" />
						<span>7</span>
					</div>
					<div className="flex gap-2 items-center">
						<div className="attach" />
						<span>2</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
