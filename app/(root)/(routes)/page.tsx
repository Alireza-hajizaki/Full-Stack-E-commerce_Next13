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

    return null;
  }

  export default setupPage;
  