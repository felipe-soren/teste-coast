import React, { useState } from "react";
import DefaultLayout from "../__layouts/defaultLayout";
import UploadItem from "../../Components/UploadItem";
import ModalUpload from "../../Components/ModalUpload";

import { Button } from "react-bootstrap";

import { Container, FormCard, FormUpload } from "./styles";

function CreateAr() {
  const [showModal, setShowModal] = useState(false);
  const [glbModel, setGlbModel] = useState(null);
  const [usdzModel, setUsdzModel] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleGlb = (event) => {
    if (event.target.files[0] === null) {
      setGlbModel(null);
      return;
    }
    setGlbModel(event.target.files[0]);
  };

  const handleUSDZ = (event) => {
    if (event.target.files[0] === null) {
      setUsdzModel(null);
      return;
    }

    setUsdzModel(event.target.files[0]);
  };

  const handleProcedData = () => {
    if (!usdzModel && !glbModel) return;
    handleShow();
  };

  return (
    <DefaultLayout>
      <Container>
        <ModalUpload
          handleClose={handleClose}
          showModal={showModal}
          glbModel={glbModel}
          usdzModel={usdzModel}
        />

        <FormCard>
          <div className="form-item">
            <legend>
              <span>GLB Model</span>
            </legend>
            <FormUpload>
              <UploadItem
                handleModel={handleGlb}
                type=".glb"
                model={glbModel}
              />
            </FormUpload>
          </div>
          <div className="form-item">
            <legend>
              <span>USDZ Model</span>
            </legend>
            <FormUpload>
              <UploadItem
                handleModel={handleUSDZ}
                type=".usdz"
                model={usdzModel}
              />
            </FormUpload>
          </div>
          <Button size="md" block onClick={handleProcedData}>
            PROCEED DATA
          </Button>
        </FormCard>
      </Container>
    </DefaultLayout>
  );
}

export default CreateAr;
