"use client"

import { useState } from "react"

interface AccessModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccessModal: React.FC<AccessModalProps> = ({ isOpen, setIsOpen }) => {

  // const [email, setEmail] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
 console.log(isOpen)

 return (
  <>
  {isOpen && <dialog >
    <h4>ACCESS MODAL</h4>

    <form action="">
     {/* <input type="text" onChange={(e) => setEmail(e.target.value)}/> */}
     {/* <button type="submit">Submit</button> */}
    </form>

    <button onClick={closeModal}>Close</button>
    <button onClick={openModal}>Open</button>
  </dialog>
  }
  </>
  )
}

export default AccessModal