// frontend/src/components/LoginFormModal/index.js
import React from "react";
import { useState } from "react";
import { Modal } from "../../components/context/Modal";
import CreateSpot from "./CreateSpot";

function CreateSpotModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="navbar__container-button-two"
        onClick={() => setShowModal(true)}
      >
        Add a Spot
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpot />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotModal;
