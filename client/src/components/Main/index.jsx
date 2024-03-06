import Navbar from "../Navbar/Navbar";
import car from "../../assets/Car.avif"
import main from "./main.module.css";
import Benefits from "./Benefits/Benefits";
import { BENEFITS } from '../data';
import { Link } from 'react-router-dom';
import { QUESTION } from "../data";
import Question from "./Question/Questions";

const Main = () => {

	return (
		<div className={main.main_page}>
			<nav>
				<Navbar/>
			</nav>
			<div className={main.container}>

				<div className={main.left_part}>
				<img className={main.img} src={car} alt="logo"/>
				</div>

				<div className={main.right_part}>
					<h1>Where Every Ride is an Adventure in Sharing. Join the Journey!</h1>
					<p>
					 Discover the joy of collaborative commuting with Slodgen! Share rides, reduce your carbon footprint, 
					 and connect with fellow travelers on a journey towards sustainability. Join us in fostering a community-driven 
					 approach to transportation, where every ride becomes an opportunity for shared experiences and responsible living.
					</p>

					<button className={main.white_btn}>
						<div className={main.links}>
					  <Link to="/search">Search</Link>
					  </div>
				    </button>
					
				</div>

			</div>
			
			<div className={main.benefits}>
				<h2 className={main.benefit_title}>Benefits</h2>
				<div  className={main.cards}>
				<ul>
                    <Benefits 
                      title={BENEFITS[0].title}
                      //description={BENEFITS[0].description}
                      image={BENEFITS[0].image}
                    />
                    <Benefits {...BENEFITS[1]}/>
                    <Benefits {...BENEFITS[2]}/>
                    <Benefits {...BENEFITS[3]}/>
					<Benefits {...BENEFITS[4]}/>
					<Benefits {...BENEFITS[5]}/>
                </ul>
				</div>
			</div>

			<div className={main.question_section}>
                <h2 className={main.question_title}>Frequently Asked Questions</h2>
				<div className={main.question}>
					<ol>
						<Question 
						  question={QUESTION[0].question}
						  answer={QUESTION[0].answer}
						/>
						<Question {...QUESTION[1]}/>
						<Question {...QUESTION[2]}/>
						<Question {...QUESTION[3]}/>
						<Question {...QUESTION[4]}/>
						<Question {...QUESTION[5]}/>
					</ol>
				</div>
			</div>


			<div>
	           <footer className={main.footer}>
				{/*<div className="waves">
					<div className="wave" id="wave1"></div>
					<div className="wave" id="wave2"></div>
					<div className="wave" id="wave3"></div>
					<div className="wave" id="wave4"></div>
	            </div>*/}
                 <div className={main.footerContent}>
                   <div className={main.footerColumn}>
                     <h4>POOLKARO</h4>
                     <p>Connecting commuters for a greener tomorrow.</p>
                   </div>
                   <div className={main.footerColumn}>
                     <h4>Navigation</h4>
                     <ul>
                       <li>How it works</li>
                       <li>Help</li>
                       <li>Feedback</li>
                       <li>Privacy & Policy</li>
                       <li>Terms & Conditions</li>
                     </ul>
                   </div>
                   <div className={main.footerColumn}>
                     <h4>Contact</h4>
                     <p>Helpline: +91 9876543210</p>
                     <p>Support Email: support@poolkaro.com</p>
                   </div>
                   <div className={main.footerColumn}>
                     <h4>Newsletter</h4>
                     <p>You can trust us. We only send promo offers, not a single spam.</p>
                     {/* Add your newsletter subscription form or input field here */}
                   </div>
                   </div>
				 <div className={main.copyright}>
					<h5> © CopyRight 2024</h5>
				 </div>
               </footer>
			</div>
		</div>
	);
};

export default Main;
