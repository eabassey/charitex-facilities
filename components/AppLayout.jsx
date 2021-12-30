import Head from 'next/head';
import AppFooter from './AppFooter';

export function AppLayout({children}) {

    return (
        <>
            <Head>
            <title>Charlitex...</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="/images/fav.ico" type="image/x-icon"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet"/>
            <link rel="stylesheet" href="css/font-awesome.min.css"/>
            <link href="/css/materialize.css" rel="stylesheet"/>
            <link href="/css/style.css" rel="stylesheet"/>
            <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
            <link href="/css/responsive.css" rel="stylesheet"/>

            </Head>

            <section>
		<div className="mm">
			<div className="mm-inn">
				<div className="mm-logo">
					<a href="/">
                        <span>Charlitex Hotels</span>
                        {/* <img src="/images/logo.png" alt=""/> */}
					</a>
				</div>
				<div className="mm-icon"><span><i className="fa fa-bars show-menu" aria-hidden="true"></i></span>
				</div>
				<div className="mm-menu">
					<div className="mm-close"><span><i className="fa fa-times hide-menu" aria-hidden="true"></i></span>
					</div>
					<ul>
                    <li><a href="/hotels">Our Hotels</a>
                    </li>
                    <li><a href="/about-us">About Us</a>
                    </li>
                    <li><a href="/contact-us">Contact Us</a>
                    </li>
					</ul>
				</div>
			</div>
		</div>
	</section>

    <section className="main">
    <div className="menu-section">
			<div className="container">
				<div className="row">
					<div className="top-bar">
						<ul>
							<li><a href="/hotels">Our Hotels</a>
							</li>
							<li><a href="/about-us">About Us</a>
							</li>
							<li><a href="/contact-us">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="logo">
						<a href="/">
                            {/* <img src="/images/logo.png" alt="" /> */}
                        <span>Charlitex Hotels</span>
						</a>
					</div>
					<div className="menu-bar">
						<ul>
							<li><a href="/">Home</a></li>
                            <li><a href="/hotels">Hotels</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
            {children}

    </section>


            <AppFooter />
        </>
    );
}