function Home({ setIsLoggedIn, setIsOtpSend }) {
    const logout = () => {
        setIsLoggedIn(false);
        setIsOtpSend(false);
    }
    return (
        <>
            <h1>I am home</h1>
            <p>Welcome to home</p>
            <button onClick={() => logout()} >Log out</button>
        </>
    )
}

export default Home;