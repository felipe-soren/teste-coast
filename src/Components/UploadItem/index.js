import React from "react";

import { Container } from "./styles";

function UploadItem({ handleModel, type, model }) {
  return (
    <Container>
      <input
        type="file"
        name="file"
        accept={type}
        onChange={handleModel}
        value=""
      />
      {model ? (
        <h6>{model.name}</h6>
      ) : (
        <h6>Drop file here or Click to upload</h6>
      )}
    </Container>
  );
}

export default UploadItem;
