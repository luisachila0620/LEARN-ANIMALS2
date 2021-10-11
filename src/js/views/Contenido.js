import React from "react";
import "../../styles/home.scss";

export const Contenido = () => (
	<div className="card bg-dark text-white">
		<img
			src="https://ichef.bbci.co.uk/news/976/cpsprodpb/4E55/production/_107135002_eagle.jpg"
			className="card-img"
			alt="eagle"
		/>
		<div className="card-img-overlay">
			<div className="hello">
				<p className="card-text">Click on any of the animal class you would like to learn.</p>
			</div>
			{/* <p className="card-text">Last updated 3 mins ago</p> */}
		</div>

		<div className="card-img-overlay">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card h-100">
						<img
							src="https://cdn.mos.cms.futurecdn.net/YB6aQqKZBVjtt3PuDSkJKe.jpg"
							className="card-img-top"
							alt="tiger"
						/>
						<div className="card-body">
							<h5 className="card-title">Carnivours</h5>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src="https://i.pinimg.com/originals/72/c4/35/72c435f259c5729de934aeec5c045ca9.jpg"
							className="card-img-top"
							alt="caribu"
						/>
						<div className="card-body">
							<h5 className="card-title">Herbivore</h5>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/218877601/1800"
							className="card-img-top"
							alt="hawk"
						/>
						<div className="card-body">
							<h5 className="card-title">Birds</h5>
						</div>
					</div>
				</div>
				<div className="col-whale">
					<div className="card h-100">
						<img
							src="https://i.guim.co.uk/img/media/4d7da2fd2eba5b69750e2c1fd5a485e9098ec187/0_174_3864_2318/master/3864.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=53cce41c79b14babaf71ce166533451f"
							className="card-img-top"
							alt="whale"
						/>
						<div className="card-body">
							<h5 className="card-title">Aquatic</h5>
						</div>
					</div>
				</div>
				<div className="col-croc">
					<div className="card h-100">
						<img
							src="https://greatbarrierreeftourscairns.com.au/wp-content/uploads/2021/03/saltwater-crocodile.jpg"
							className=""
							alt="crocodile"
						/>
						<div className="card-body">
							<h5 className="card-title">Reptiles</h5>
						</div>
					</div>
				</div>
				<div className="col-dog">
					<div className="card h-100">
						<img
							src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
							className="card-img-top"
							alt="dog"
						/>
						<div className="card-body">
							<h5 className="card-title">pets</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
