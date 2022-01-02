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
        <AppLayout wrapperClass="">
            <div className="inn-body-section inn-detail inn-hotel-1">
			<div className="container">
				<div className="row">
					<div className="inn-bod">
						<div className="inn-detail-p1 inn-com">
							<h2>{currentHotel?.name}</h2>
							<div className="r2-ratt"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  <span>Excellent  4.5 / 5</span> </div>
							<p>Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays. It truly is one of the most spectacular sights on Earth. See the impressive falls from both the Brazilian and Argentine sides.</p>
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
						<div className="inn-detail-p1 inn-com inn-com-price">
							<div className="detail-title">
								<h2>Room Price</h2>
								<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
							</div>
							<h4>Price For 1 Night</h4>
							<p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p> <span>Non Refundable</span> <span className="inn-room-price">Rs.6,030</span> </div>
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

					</div>
				</div>
			</div>
		</div>

       	
        </AppLayout>
    );
} 