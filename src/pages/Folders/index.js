import React, { useState } from "react";
import DefaultLayout from "../__layouts/defaultLayout";
import { AiFillFolder, AiFillPlusCircle } from "react-icons/ai";
import NewFolderModal from "../../Components/NewFolderModal";

import { Container, ResponsiveGrid, GridItem, GridItemButton } from "./styles";

function Folders() {
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);

  const handleCloseNewFolderModal = () => setShowNewFolderModal(false);
  const handleShowNewFolderModal = () => setShowNewFolderModal(true);

  return (
    <DefaultLayout>
      <NewFolderModal
        showNewFolderModal={showNewFolderModal}
        handleCloseNewFolderModal={handleCloseNewFolderModal}
      />
      <Container>
        <ResponsiveGrid>
          <GridItemButton onClick={() => handleShowNewFolderModal()}>
            <AiFillPlusCircle size="50%" color="#0061da" />
          </GridItemButton>
          <GridItem to="/folder/test folder">
            <AiFillFolder size="50%" color="#0061da" />
            <h6>Test Folder</h6>
          </GridItem>
          <GridItem to="/home">
            <AiFillFolder size="50%" color="#0061da" />
            <h6>Test Folder</h6>
          </GridItem>
          <GridItem to="/home">
            <AiFillFolder size="50%" color="#0061da" />
            <h6>Test Folder</h6>
          </GridItem>
          <GridItem to="/home">
            <AiFillFolder size="50%" color="#0061da" />
            <h6>Test Folder</h6>
          </GridItem>
          <GridItem to="/home">
            <AiFillFolder size="50%" color="#0061da" />
            <h6>Test Folder</h6>
          </GridItem>
          <GridItem to="/home">
            <AiFillFolder size="50%" color="#0061da" />
            <h6>Test Folder</h6>
          </GridItem>
        </ResponsiveGrid>
      </Container>
    </DefaultLayout>
  );
}

export default Folders;
