import Link from "next/link";
import A from "./A";
import Head from "next/head";
const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"kingcode, " + keywords} />
                <title>Home Page</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text='Home' />
                <A href={'/users'} text='Users' />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                        display: flex;
                        gap: 25px;
                    }
                `}
            </style>
        </>
    )
}
export default MainContainer;