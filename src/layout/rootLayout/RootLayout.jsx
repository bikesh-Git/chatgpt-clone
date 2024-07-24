import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const RootLayout = () => {


    // Import your publishable key
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    if (!PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }


    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

            <div className='rootLayout'>
                <header>
                    <Link to="/">Logo</Link>

                    <div>
                        <SignedOut>
                            {/* <Link to="/sign-in">Sign Up</Link> */}
                            <UserButton />
                        </SignedOut>
                        <SignedIn>
                        <UserButton />
                            {/* <UserButton /> */} <Link to="/sign-in">Sign In</Link>
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    )
}

export default RootLayout