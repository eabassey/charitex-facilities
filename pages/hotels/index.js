import { AppLayout } from "../../components/AppLayout";
import {hotels} from '../../data';
import Image from 'next/image';
import Link from 'next/link'


export default function Hotels() {

    return (
        <AppLayout>
        <div className="inn-banner">
			<div className="container">
				<div className="row">
					<h4>Our Hotels</h4>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
						</p>
							<ul>
								<li><Link href="#">Home</Link>
								</li>
								<li><Link href="#">Our Hotels</Link>
								</li>
							</ul>
				</div>
			</div>
		</div>
        {/* // */}
        <div className="inn-body-section pad-bot-60">
			<div className="container">
				<div className="row inn-page-com">
					<div className="page-head">
						<h2>Our Hotels</h2>
						<div className="head-title">
							<div className="hl-1"></div>
							<div className="hl-2"></div>
							<div className="hl-3"></div>
						</div>
						<p>Choose from a variety of accommodation facilities around the world. We are here to make you happy.</p>
					</div>
					{hotels?.map((h) => (
						<div key={h.id} className="col-md-3">
						<Link href={`/hotels/${h.id}`}>
							<div className="all-hotel-like-com">
								<div className="all-hotel-lc-img"> <img src="/images/hotel/2.jpg" alt=""/> </div>
								<div className="all-hotel-lc-con all-hotel-lc-con2">
									<h5>{h.name}</h5>
									{/* <p>{h.address}</p> */}
									<p>{h.city}, {h.country}</p>
								</div>
							</div>
						</Link>
					</div>
					))}
				</div>
			</div>
		</div>
        {/*  */}
        {/* <footer className="site-footer clearfix">
		<div className="sidebar-container">
			<div className="sidebar-inner">
				<div className="widget-area clearfix">
					<div className="widget widget_azh_widget">
						<div>
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-3 foot-logo"> <Image src="/images/logo1.png" alt="logo"/>
										<p className="hasimg">Hotels worldwide incl. Infos, Ratings and Photos. Make your Hotel Reservation cheap.</p>
										<p className="hasimg">The top-rated hotel booking services.</p>
									</div>
									<div className="col-sm-12 col-md-3">
										<h4>Support &amp; Help</h4>
										<ul className="two-columns">
											<li><Link href="dashboard.html">Dashboard</Link>
											</li>
											<li><Link href="db-activity.html">DB Activity</Link>
											</li>
											<li><Link href="booking.html">Booking</Link>
											</li>
											<li><Link href="contact-us.html">Contact Us</Link>
											</li>
											<li><Link href="about-us.html">About Us</Link>
											</li>
											<li><Link href="aminities.html">Aminities</Link>
											</li>
											<li><Link href="blog.html">Blog</Link>
											</li>
											<li><Link href="menu1.html">Food Menu</Link>
											</li>
										</ul>
									</div>
									<div className="col-sm-12 col-md-3">
										<h4>Cities Covered</h4>
										<ul className="two-columns">
											<li><Link href="#!">Sydney</Link>
											</li>
											<li><Link href="#!">Basel</Link>
											</li>
											<li><Link href="#!">Copenhagen</Link>
											</li>
											<li><Link href="#!">Frankfurt</Link>
											</li>
											<li><Link href="#!">Vancouver</Link>
											</li>
											<li><Link href="#!">Auckland</Link>
											</li>
											<li><Link href="#!">Vienna</Link>
											</li>
											<li><Link href="#!">Los Angeles</Link>
											</li>
										</ul>
									</div>
									<div className="col-sm-12 col-md-3">
										<h4>Address</h4>
										<p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport</p>
										<p> <span className="foot-phone">Phone: </span> <span className="foot-phone">+01 1245 2541</span> </p>
									</div>
								</div>
							</div>
						</div>
						<div className="foot-sec2">
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-3">
										<h4>Payment Options</h4>
										<p className="hasimg"> <Image src="/images/payment.png" alt="payment"/> </p>
									</div>
									<div className="col-sm-12 col-md-4">
										<h4>Subscribe Now</h4>
										<form>
											<ul className="foot-subsc">
												<li>
													<input type="text" placeholder="Enter your email id"/> </li>
												<li>
													<input type="submit" value="submit"/> </li>
											</ul>
										</form>
									</div>
									<div className="col-sm-12 col-md-5 foot-social">
										<h4>Follow with us</h4>
										<p>Join the thousands of other There are many variations of passages of Lorem Ipsum available</p>
										<ul>
											<li><Link href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></Link> </li>
											<li><Link href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></Link> </li>
											<li><Link href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></Link> </li>
											<li><Link href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></Link> </li>
											<li><Link href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></Link> </li>
											<li><Link href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link> </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer> 
	 <section className="copy">
		<div className="container">
			<p>copyrights © 2017 RN53Themes.net. &nbsp;&nbsp;All rights reserved. </p>
		</div>
	</section> */}

        </AppLayout>
    );
}