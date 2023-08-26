"use client"

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";


// import { Modal } from "@/components/ui/modal";
// import { UserButton } from "@clerk/nextjs";

const setupPage =  () =>  {

  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen])

    return (
      <div className="p-4">
        Root Page
        {/* <Modal title="Test" description="Test Dest" isOpen onClose={() => {}}>
          children
        </Modal> */}
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    )
  }

  export default setupPage;
  