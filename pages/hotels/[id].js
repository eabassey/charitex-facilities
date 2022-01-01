import {useState} from 'react';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AppLayout } from "../../components/AppLayout";
import {hotels} from '../../data';
import Image from 'next/image';
import Link from 'next/link'

export default function HotelDetail() {
    const router = useRouter();
    const {id} = router.query;
    const [currentHotel, setCurrentHotel] = useState(null);

    useEffect(() => {
        console.log({id})
        const hotel = hotels.find(h => h.id === id);
        setCurrentHotel(hotel);
    }, [id]);

    return (
        <AppLayout>
            <div className="inn-body-section inn-detail inn-hotel-1">
			<div className="container">
				<div className="row">
					<div className="inn-bod">
						<div className="inn-detail-p1 inn-com">
							<h2>{currentHotel?.name}</h2>
							<div className="r2-ratt"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <Image layout={'fill'} src="/images/h-trip.png" alt=""/> <span>Excellent  4.5 / 5</span> </div>
							<p>Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays. It truly is one of the most spectacular sights on Earth. See the impressive falls from both the Brazilian and Argentine sides.</p>
							<p>Brazil’s view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Rio de Janeiro, Iguassu Falls, and Buenos Aires will leave you with vacation memories you’ll cherish for life.</p>
						</div>
						<div className="inn-detail-p1 inn-com inn-com-list-point">
							<div className="detail-title">
								<h2>Hotel Amenities</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<ul>
								<li><i className="fa fa-check" aria-hidden="true"></i> Airport transportation (surcharge)</li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Number of floors - 9 </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Coffee shop or café </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Dry cleaning/laundry service</li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Health club </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Billiards or pool table</li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Total number of rooms - 108</li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Bar/lounge </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Air Conditioner </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Mini Bar (with liquor) </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Separate Bedroom </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Living Room Space </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Smoking Rooms Available </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Internet </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Transport to / from Hotel </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Concierge </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Rental Car Service Desk On Site </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Room Service </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Beauty Salon </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Business Centre </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Fitness Centre </li>
								<li><i className="fa fa-check" aria-hidden="true"></i> Spa and Pool </li>
							</ul>
						</div>
						<div className="inn-detail-p1 inn-com inn-com-form">
							<div className="detail-title">
								<h2>Hotel Booking</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<form className="col s12">
								<div className="row">
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>First Name</label>
									</div>
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Last Name</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Phone</label>
									</div>
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Email</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Check In</label>
									</div>
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Check Out</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Adults</label>
									</div>
									<div className="input-field col s6">
										<input type="text" className="validate"/>
										<label>Childrens</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<textarea id="textarea1" className="materialize-textarea"></textarea>
										<label htmlFor="textarea1">Textarea</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input type="submit" value="submit" className="waves-effect waves-light full-btn"/> </div>
								</div>
							</form>
						</div>
						<div className="inn-detail-p1 inn-com inn-com-price">
							<div className="detail-title">
								<h2>Room Price</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<h4>Price For 1 Night</h4>
							<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p> <span>Non Refundable</span> <span className="inn-room-price">Rs.6,030</span> </div>
						<div className="inn-detail-p1 inn-com">
							<div className="detail-title">
								<h2>Photo Gallery</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<div className="room-photo-all">
								<div className="col-md-3 room-photo">
									<div className="gall-grid room-photo-gal"> <Image layout={'fill'} className="materialboxed" data-caption="A picture of a way with a group of trees in a park" src="/images/room/1.jpg" alt="" /> </div>
								</div>
								<div className="col-md-3 room-photo">
									<div className="gall-grid room-photo-gal"> <Image layout={'fill'} className="materialboxed" data-caption="A picture of a way with a group of trees in a park" src="/images/room/2.jpg" alt="" /> </div>
								</div>
								<div className="col-md-3 room-photo">
									<div className="gall-grid room-photo-gal"> <Image layout={'fill'} className="materialboxed" data-caption="A picture of a way with a group of trees in a park" src="/images/room/3.jpg" alt="" /> </div>
								</div>
								<div className="col-md-3 room-photo">
									<div className="gall-grid room-photo-gal"> <Image layout={'fill'} className="materialboxed" data-caption="A picture of a way with a group of trees in a park" src="/images/room/4.jpg" alt="" /> </div>
								</div>
								<div className="col-md-3 room-photo">
									<div className="gall-grid room-photo-gal"> <Image layout={'fill'} className="materialboxed" data-caption="A picture of a way with a group of trees in a park" src="/images/room/5.jpg" alt="" /> </div>
								</div>
								<div className="col-md-3 room-photo">
									<div className="gall-grid room-photo-gal"> <Image layout={'fill'} className="materialboxed" data-caption="A picture of a way with a group of trees in a park" src="/images/room/6.jpg" alt="" /> </div>
								</div>
							</div>
						</div>
						<div className="inn-detail-p1 inn-com">
							<div className="detail-title">
								<h2>Hotel Rooms</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<div className="re-room">
								<ul>
									<li>
										<div className="re-room-list">
											<div className="col-md-3 re-room-list-1"><Image layout={'fill'} src="/images/room/1.jpg" alt=""/> </div>
											<div className="col-md-6 re-room-list-2">
												<h4>Ultra Deluxe</h4>
												<p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> </div>
											<div className="col-md-3 re-room-list-3"> <span className="hot-list-p3-1">Price Per Night</span> <span className="hot-list-p3-2">$940</span> <Link href="booking.html" className="hot-page2-alp-quot-btn spec-btn-text">Book Now</Link> </div>
										</div>
									</li>
									<li>
										<div className="re-room-list">
											<div className="col-md-3 re-room-list-1"><Image layout={'fill'} src="/images/room/2.jpg" alt=""/> </div>
											<div className="col-md-6 re-room-list-2">
												<h4>Premium Rooms(EXECUTIVE)</h4>
												<p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> </div>
											<div className="col-md-3 re-room-list-3"> <span className="hot-list-p3-1">Price Per Night</span> <span className="hot-list-p3-2">$720</span> <Link href="booking.html" className="hot-page2-alp-quot-btn spec-btn-text">Book Now</Link> </div>
										</div>
									</li>
									<li>
										<div className="re-room-list">
											<div className="col-md-3 re-room-list-1"><Image layout={'fill'} src="/images/room/3.jpg" alt=""/> </div>
											<div className="col-md-6 re-room-list-2">
												<h4>Executive Deluxe Marine Bay View</h4>
												<p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> </div>
											<div className="col-md-3 re-room-list-3"> <span className="hot-list-p3-1">Price Per Night</span> <span className="hot-list-p3-2">$560</span> <Link href="booking.html" className="hot-page2-alp-quot-btn spec-btn-text">Book Now</Link> </div>
										</div>
									</li>
									<li>
										<div className="re-room-list">
											<div className="col-md-3 re-room-list-1"><Image layout={'fill'} src="/images/room/4.jpg" alt=""/> </div>
											<div className="col-md-6 re-room-list-2">
												<h4>Normal Rooms</h4>
												<p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> </div>
											<div className="col-md-3 re-room-list-3"> <span className="hot-list-p3-1">Price Per Night</span> <span className="hot-list-p3-2">$420</span> <Link href="booking.html" className="hot-page2-alp-quot-btn spec-btn-text">Book Now</Link> </div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="inn-detail-p1 inn-com">
							<div className="detail-title">
								<h2>User Reviews</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<div className="room-rat-inn room-rat-bor">
								<div className="row">
									<div className="col-md-12 room-rat-body">
										<div className="room-rat-img"> <Image layout={'fill'} src="/images/users/2.png" alt=""/>
											<p>Orange Fab &amp; Weld <span>19th January, 2017</span> </p>
										</div>
										<div className="dir-rat-star"> <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i> </div>
										<p>Michael &amp; his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call.</p>
										<ul>
											<li><Link href="#"><><span>Like</span><i className="fa fa-thumbs-o-up"></i></></Link> </li>
											<li><Link href="#"><><span>Dis-Like</span><i className="fa fa-thumbs-o-down"></i></></Link> </li>
											<li><Link href="#"><><span>Report</span> <i className="fa fa-flag-o"></i></></Link> </li>
											<li><Link href="#"><><span>Comments</span> <i className="fa fa-commenting-o"></i></></Link> </li>
											<li><Link href="#"><><span>Share Now</span>  <i className="fa fa-facebook"></i></></Link> </li>
											<li><Link href="#"><i className="fa fa-google-plus"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-twitter"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-linkedin"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-youtube"></i></Link> </li>
										</ul>
									</div>
								</div>
							</div>
							<div className="room-rat-inn room-rat-bor">
								<div className="row">
									<div className="col-md-12 room-rat-body">
										<div className="room-rat-img"> <Image layout={'fill'} src="/images/users/5.png" alt=""/>
											<p>Orange Fab &amp; Weld <span>19th January, 2017</span> </p>
										</div>
										<div className="dir-rat-star"> <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i> </div>
										<p>Michael &amp; his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call.</p>
										<ul>
											<li><Link href="#"><><span>Like</span><i className="fa fa-thumbs-o-up"></i></></Link> </li>
											<li><Link href="#"><><span>Dis-Like</span><i className="fa fa-thumbs-o-down"></i></></Link> </li>
											<li><Link href="#"><><span>Report</span> <i className="fa fa-flag-o"></i></></Link> </li>
											<li><Link href="#"><><span>Comments</span> <i className="fa fa-commenting-o"></i></></Link> </li>
											<li><Link href="#"><><span>Share Now</span>  <i className="fa fa-facebook"></i></></Link> </li>
											<li><Link href="#"><i className="fa fa-google-plus"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-twitter"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-linkedin"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-youtube"></i></Link> </li>
										</ul>
									</div>
								</div>
							</div>
							<div className="room-rat-inn room-rat-bor">
								<div className="row">
									<div className="col-md-12 room-rat-body">
										<div className="room-rat-img"> <Image layout={'fill'} src="/images/users/3.png" alt=""/>
											<p>Orange Fab &amp; Weld <span>19th January, 2017</span> </p>
										</div>
										<div className="dir-rat-star"> <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i> </div>
										<p>Michael &amp; his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call.</p>
										<ul>
											<li><Link href="#"><><span>Like</span><i className="fa fa-thumbs-o-up"></i></></Link> </li>
											<li><Link href="#"><><span>Dis-Like</span><i className="fa fa-thumbs-o-down"></i></></Link> </li>
											<li><Link href="#"><><span>Report</span> <i className="fa fa-flag-o"></i></></Link> </li>
											<li><Link href="#"><><span>Comments</span> <i className="fa fa-commenting-o"></i></></Link> </li>
											<li><Link href="#"><><span>Share Now</span>  <i className="fa fa-facebook"></i></></Link> </li>
											<li><Link href="#"><i className="fa fa-google-plus"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-twitter"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-linkedin"></i></Link> </li>
											<li><Link href="#"><i className="fa fa-youtube"></i></Link> </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="inn-detail-p1 inn-com room-soc-share">
							<div className="detail-title">
								<h2>Share this Hotel</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<ul>
								<li><Link href="#"><><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</></Link> </li>
								<li><Link href="#"><><i className="fa fa-google-plus" aria-hidden="true"></i> Google+</></Link> </li>
								<li><Link href="#"><><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</></Link>
								</li>
								<li><Link href="#"><><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</></Link>
								</li>
								<li><Link href="#"><><i className="fa fa-whatsapp" aria-hidden="true"></i> Whats App</></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

        {/* <footer className="site-footer clearfix">
		<div className="sidebar-container">
			<div className="sidebar-inner">
				<div className="widget-area clearfix">
					<div className="widget widget_azh_widget">
						<div>
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-3 foot-logo"> <Image layout={'fill'} src="/images/logo1.png" alt="logo"/>
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
										<p className="hasimg"> <Image layout={'fill'} src="/images/payment.png" alt="payment"/> </p>
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