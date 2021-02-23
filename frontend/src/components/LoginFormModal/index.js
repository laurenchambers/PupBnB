// frontend/src/components/LoginFormModal/index.js
import React from "react";
import { useState } from "react";
import { Modal } from "../../components/context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
