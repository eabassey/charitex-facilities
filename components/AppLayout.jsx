import Head from 'next/head';
import AppFooter from './AppFooter';

export function AppLayout({children}) {

    return (
        <>
            <Head>
            <title>Charlitex...</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="images/fav.ico" type="image/x-icon"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet"/>
            <link rel="stylesheet" href="css/font-awesome.min.css"/>
            <link href="/css/materialize.css" rel="stylesheet"/>
            <link href="/css/style.css" rel="stylesheet"/>
            <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
            <link href="/css/responsive.css" rel="stylesheet"/>

            </Head>

            {children}

            <AppFooter />
        </>
    );
}