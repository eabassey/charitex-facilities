import Head from 'next/head';
import AppFooter from './AppFooter';
import Link from 'next/link'

export function AppLayout({children, wrapperClass}) {

    return (
        <>
            <Head>
            <title>Charlitex...</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="/images/fav.ico" type="image/x-icon"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet"/>
            {/* <link rel="stylesheet" href="css/font-awesome.min.css"/>
            <link href="/css/materialize.css" rel="stylesheet"/>
            <link href="/css/style.css" rel="stylesheet"/>
            <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
            <link href="/css/responsive.css" rel="stylesheet"/> */}

            </Head>

            <section>
		<div className="mm">
			<div className="mm-inn">
				<div className="mm-logo">
					<Link passHref href="/">
                        <span>Charlitex Hotels</span>
                        {/* <Image src="/images/logo.png" alt=""/> */}
					</Link>
				</div>
				<div className="mm-icon"><span><i className="fa fa-bars show-menu" aria-hidden="true"></i></span>
				</div>
				<div className="mm-menu">
					<div className="mm-close"><span><i className="fa fa-times hide-menu" aria-hidden="true"></i></span>
					</div>
					<ul>
                    <li><Link href="/hotels">Our Hotels</Link>
                    </li>
                    <li><Link href="/about-us">About Us</Link>
                    </li>
                    <li><Link href="/contact-us">Contact Us</Link>
                    </li>
					</ul>
				</div>
			</div>
		</div>
	</section>

    <section className={wrapperClass}>
    <div className="menu-section">
			<div className="container">
				<div className="row">
					<div className="top-bar">
						<ul>
							<li><Link passHref href="/hotels">Our Hotels</Link>
							</li>
							<li><Link passHref href="/about-us">About Us</Link>
							</li>
							<li><Link passHref href="/contact-us">Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="logo">
						<Link href="/">
                            {/* <Image src="/images/logo.png" alt="" /> */}
                        <span>Charlitex Hotels</span>
						</Link>
					</div>
					<div className="menu-bar">
						<ul>
							<li><Link passHref href="/">Home</Link></li>
                            <li><Link passHref href="/hotels">Hotels</Link></li>
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