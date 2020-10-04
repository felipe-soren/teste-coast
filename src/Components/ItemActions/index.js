import React, { useState } from "react";
import DeleteModal from "../DeleteModal";
import ChangeFolderModal from "../ChangeFolderModal";
import { FaEye, FaTrash, FaFolder } from "react-icons/fa";
import history from "../../history";

import { IconButton } from "./styles";

function ItemActions({ id, GLB, USDZ }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  const handleCloseFolderModal = () => setShowFolderModal(false);
  const handleShowFolderModal = () => setShowFolderModal(true);

  return (
    <>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        handleCloseDeleteModal={handleCloseDeleteModal}
        id={id}
      />
      <ChangeFolderModal
        showFolderModal={showFolderModal}
        handleCloseFolderModal={handleCloseFolderModal}
        id={id}
      />

      <IconButton
        type="button"
        onClick={() => history.push(`model/${id}`, GLB, USDZ)}
      >
        <FaEye color="blue" />
      </IconButton>
      <IconButton onClick={() => handleShowDeleteModal(true)}>
        <FaTrash color="red" />
      </IconButton>
      <IconButton>
        <FaFolder color="#0061da" onClick={() => handleShowFolderModal(true)} />
      </IconButton>
    </>
  );
}

export default ItemActions;
