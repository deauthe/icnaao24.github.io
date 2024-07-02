export default function Curriculum() {
	return (
		<section className="grid md:grid-cols-3 grid-cols-1 lg:gap-5 md:gap-3 gap-2 mx-auto text-justify mb-3 ">
			<div className="card bg-base-200 shadow-lg hover:bg-base-100 hover:cursor-pointer transition-all duration-150 hover:scale-105">
				<div className="card-body ">
					<h3 className="font-extrabold card-title">OUR EDUCATION</h3>
					<p>
						Lorem ipsum dolor consectetursit amet, consectetur adipiscing elit
						consectetur euismod Lorem ipsum dolor sit amet, ea eum labitur
						scsstie percipitoleat fabulas complectitur deterruisset at pro. Odio
						quaeque reformidans est eu, expetendis intellegebat has ut, viderer
						invenire ut his. Has molestie percipit an. Falli volumus efficiantur
						sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci
						iudicabit constituto at mea.
					</p>
				</div>
			</div>
			<div className="card bg-base-200 shadow-lg hover:bg-base-100 hover:cursor-pointer transition-all duration-150 hover:scale-105">
				<div className="card-body">
					<h3 className="font-extrabold card-title">Courses</h3>
					<ul className="list-disc list-inside">
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet consectetur.</li>
						<li>Lorem ipsum dolor sit.</li>
					</ul>
				</div>
			</div>
			<div className="card bg-base-200 shadow-lg hover:bg-base-100 hover:cursor-pointer transition-all duration-150 hover:scale-105">
				<div className="card-body">
					<h2 className="card-title font-extrabold">
						Latest News
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<ul className="list-disc list-inside">
						<li>Abstract Submission is now open.</li>
						<li>
							Registration for attendance only is possible until September 30,
							2024.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}