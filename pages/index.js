import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {AppLayout} from '../components/AppLayout'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <AppLayout wrapperClass="main">

		<div className="hom-body-section">
			<div className="container">
				<div className="row">
					<div className="home-bod">
						<div className="home-bod-1">
							<h4>Today up to <span>70%</span> offer</h4>
							<h2>Charlitex Hotels</h2>
							<p>We provide you with luxurious accommodation and make you feel at home.</p>
							{/* <p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p> */}
						</div>
						<div className="home-bod-2">
							<ul>
								<li>
                  <Link href="/hotels">
									<a href="/hotels" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                    <><img src="/images/icon/h1.png" alt=""/> Hotels</>
                    </a>
                  </Link>
								</li>
								{/* <li>
									<Link href="all-rooms.html" className="waves-effect waves-light btn-large wed-pop-ser-btn"><Image src="images/icon/h7.png" alt=""/> Booking</Link>
								</li> */}
								{/* <li>
									<Link href="menu.html" className="waves-effect waves-light btn-large wed-pop-ser-btn"><Image src="images/icon/h2.png" alt=""/> Menu</Link>
								</li> */}
								<li>
									<a href="/about-us" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                    <><img src="/images/icon/h5.png" alt=""/> About Us</>
                    </a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </AppLayout>
  )
}
