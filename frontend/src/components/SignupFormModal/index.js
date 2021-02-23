// frontend/src/components/SignupFormPage/index.js
import { useState } from "react";

import { Modal } from "../context/Modal";
import SignUpForm from "./SignUpForm";

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="navbar__button" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
