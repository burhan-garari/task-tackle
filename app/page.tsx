import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-[75px] p-1 border-b-2 border-black">
      <div className="font-lg text-xl">
        T
      </div>
      <div>
        <ClerkLoading>
          <Button size="lg" variant={"loading"}></Button>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton
                mode="modal"
            >
                <Button size="lg">SignIn</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
            />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="h-[75px] flex flex-row items-center justify-center border-t-2 border-black">
      Task Manager
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen flex flex-col lg:flex-row lg:gap-20 justify-center items-center">
        <section className="text-lg p-1">
          Manage your tasks with ease.
        </section>
        <section className="flex flex-row justify-between items-center gap-10">
          <div>
            <ClerkLoading>
              <div className="flex flex-row items-center justify-center gap-5">
                <Button size="lg" variant={"loading"}></Button>
                <Button size="lg" variant={"loading"}></Button>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <div className="flex flex-row items-center justify-center gap-5">
                  <SignedOut>
                    <SignInButton
                      mode="modal"
                      signUpForceRedirectUrl="/"
                      signUpFallbackRedirectUrl={"/"}
                    >
                        <Button size="lg">SignIn</Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <Button size="lg">View Boards</Button>
                  </SignedIn>
                  <Link href="board/1">
                    <Button size="lg">Demo</Button>
                  </Link>
              </div>
            </ClerkLoaded>
          </div>
        </section>
        
      </main>
      <Footer />
    </>

  );
}
