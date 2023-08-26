import Button from "@/components/Buttons";
import { UserButton } from "@clerk/nextjs";

const setupPage =  () =>  {
    return (
      <div className="p-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    )
  }

  export default setupPage;
  