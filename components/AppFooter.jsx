import Image from 'next/image';
import Script from 'next/script'
import Link from 'next/link'

export default function AppFooter() {

    return (
        <>
	<div className="hom-footer-section">
		<div className="container">
			<div className="row">
				<div className="foot-com foot-1">
					<ul>
						<li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
						</li>
						<li><Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
						</li>
						<li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
						</li>
					</ul>
				</div>
				<div className="foot-com foot-2">
					<h5>Phone: 1234567890</h5> </div>
				<div className="foot-com foot-3">
                {/* <Link className="waves-effect waves-light" href="booking.html">room reservation</Link>  */}
				</div>
				<div className="foot-com foot-4">
					<Link href="#"><img  src="/images/card.png" alt="" />
					</Link>
				</div>
			</div>
		</div>
	</div>

	<Script src="/js/jquery.min.js"></Script>
	<Script src="/js/jquery-ui.js"></Script>
	{/* <Script src="/js/angular.min.js"></Script> */}
	<Script src="/js/bootstrap.js" type="text/javascript"></Script>
	<Script src="/js/materialize.min.js" type="text/javascript"></Script>
	<Script src="/js/jquery.mixitup.min.js" type="text/javascript"></Script>
	<Script src="/js/custom.js"></Script>
        </>
    );
}