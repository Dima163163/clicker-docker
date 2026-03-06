import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <h1>Header HELLO JENKINS</h1>
                <nav style={{display: 'flex', gap: '30px'}}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/counter'}>Counter</Link>
                    <a target='_blank' href={import.meta.env.VITE_API_URL}>Google</a>
                    <a target='_blank' href={import.meta.env.SECRET_URL}>Ya</a>
                </nav>
            </header>
            <main style={{flex: '1'}}>
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>
    )
}