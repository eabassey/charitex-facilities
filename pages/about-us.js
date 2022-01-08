
import {AppLayout} from '../components/AppLayout'


export default function AboutUs() {

    return (
        <AppLayout>
            <div className="inn-banner">
			<div className="container">
				<div className="row">
					<h4>About Us</h4>
					<p>Some charlitex hotels details...</p>
					<p> </p>
					<ul>
						<li><a href="/index">Home</a>
						</li>
						<li><a href="#">About Us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="inn-body-section">
			<div className="container">
				<div className="row">
					<div className="page-head">
						<h2>About Us</h2>
						<div className="head-title">
							<div className="hl-1"></div>
							<div className="hl-2"></div>
							<div className="hl-3"></div>
						</div>
						<p>Some additional about us details....</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="about-left">
							<h2>Welcome to <span>Charlitex Hotels</span></h2>
							{/* <h4>Cras eu nisl quis est mattis placerat. Etiam ut ante et lacus imperdiet sagittis a finibus mauris.</h4> */}
							<p>Some Placeholder text..Some Placeholder text..Some Placeholder text..Some Placeholder text..Some Placeholder text..Some Placeholder text..Some Placeholder text..Some Placeholder text..Some Placeholder text..</p>
							<p>Duis sollicitudin augue nec bibendum mollis. Proin luctus diam vel hendrerit dictum. Nunc tincidunt nibh in sem blandit venenatis. Suspendisse rutrum ultricies porttitor. Quisque at volutpat nibh.Aliquam dapibus turpis mollis felis fermentum bibendum. In finibus a nulla vitae dapibus. Nam non suscipit urna. Vestibulum et lacinia justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <a href="#" className="link-btn">Call to us: 02449854323</a> </div>
					</div>
					<div className="col-md-6">
						<div className="about-right"> <img src="/images/about.jpg" alt=""/> </div>
					</div>
				</div>
			</div>
		</div>
        </AppLayout>
    );
}