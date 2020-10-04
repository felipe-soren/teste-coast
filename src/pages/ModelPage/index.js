import React from "react";
import QRCode from "react-qr-code";
import "@google/model-viewer";
import { ModelViewer, ARLink } from "@real2u/react-ar-components";
import { useParams } from "react-router-dom";

import { Container, QRCodeContainer } from "./styles";

function ModelPage() {
  const { id } = useParams();

  console.log(id);

  const glb = "https://dashboardccoast.com/androidModels/plant.glb";
  const usdz = "https://dashboardccoast.com/iosModels/plant.usdz";

  return (
    <Container>
      {/* <ModelViewer
        glb={glb}
        style={{ width: "100%", height: "100vh", outline: "none" }}
        usdz={usdz}
        popup={false}
      /> */}
      <ARLink glb={glb} usdz={usdz}>
        View in 3D
      </ARLink>
      <QRCodeContainer>
        <QRCode value="http://192.168.0.10:3000/model/165651456" size={100} />
      </QRCodeContainer>
    </Container>
  );
}

export default ModelPage;
