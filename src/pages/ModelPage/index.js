import React from "react";
import QRCode from "react-qr-code";
import "@google/model-viewer";
import { ModelViewer } from "@real2u/react-ar-components";
import { useParams } from "react-router-dom";

import glb from "../../Resources/Models/plant.glb";
import usdz from "../../Resources/Models/plant.usdz";

import { Container, QRCodeContainer } from "./styles";

function ModelPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <Container>
      <ModelViewer
        glb={glb}
        style={{ width: "100%", height: "100vh", outline: "none" }}
        usdz={usdz}
        popup={false}
      />
      <QRCodeContainer>
        <QRCode value="http://192.168.0.10:3000/model/165651456" size={100} />
      </QRCodeContainer>
    </Container>
  );
}

export default ModelPage;
