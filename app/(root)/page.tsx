"use client"

import { Modal } from "@/components/ui/modal";

// import { UserButton } from "@clerk/nextjs";

const setupPage =  () =>  {
    return (
      <div className="p-4">
        <Modal title="Test" description="Test Dest" isOpen onClose={() => {}}>
          children
        </Modal>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    )
  }

  export default setupPage;
  