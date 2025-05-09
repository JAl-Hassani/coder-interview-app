import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <SignedOut>
        <SignInButton>
          <Button>
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
}
