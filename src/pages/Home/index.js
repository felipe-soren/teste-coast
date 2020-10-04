import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DefaultLayout from "../__layouts/defaultLayout";
import useModel from "../../Context/hooks/useModel";
import ItemActions from "../../Components/ItemActions";

import { FaPlusCircle } from "react-icons/fa";
import { Row, Col, Button, Table } from "react-bootstrap";
import history from "../../history";

import { Container, Card, BlueCard, TableCard } from "./styles";

function Home() {
  const [models, setModels] = useState([]);

  const { recentUploadedModels } = useModel();

  useEffect(() => {
    async function fetchModels() {
      const data = await recentUploadedModels();
      setModels(data);
    }

    fetchModels();
  }, [recentUploadedModels]);

  const renderModelsItems = () => {
    return models.map(({ id, GLB, USDZ, folder }, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>
            <a href={GLB.link}>{GLB.name}</a>
          </td>
          <td>
            <a href={USDZ.link}>{USDZ.name}</a>
          </td>
          <td>
            <NavLink
              to={{
                pathname: `/folder/${folder.id}`,
                folder,
              }}
            >
              {folder.name}
            </NavLink>
          </td>
          <td>
            <ItemActions id={id} GLB={GLB} USDZ={USDZ} />
          </td>
        </tr>
      );
    });
  };

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col xl={4} sm={12}>
            <Card>
              <p>ACTIVE AR</p>
              <strong className="total">12</strong>
            </Card>
          </Col>
          <Col xl={4} sm={12}>
            <Card>
              <span className="requirements">Requiriments</span>
              <ul>
                <li>
                  <a
                    href="https://developers.google.com/ar/discover/supported-devices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    List of ARCore Supported Devices
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/ar/develop/java/scene-viewer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Model Requirements
                  </a>
                </li>
              </ul>
            </Card>
          </Col>
          <Col xl={4} md={12} sm={12}>
            <BlueCard>
              <FaPlusCircle color="#fff" size={50} />
              <Button
                onClick={() => history.push("/create-ar")}
                variant="light"
                style={{
                  borderRadius: "20px",
                  marginTop: "auto",
                  width: "100px",
                }}
              >
                Create AR
              </Button>
            </BlueCard>
          </Col>
        </Row>
        <Row>
          <div className="table-wrapper">
            <div className="table-header">
              <h6>Recently Uploaded AR</h6>
            </div>
            <TableCard>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>GLB MODEL</th>
                    <th>USDZ MODEL</th>
                    <th>FOLDER</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>{renderModelsItems()}</tbody>
              </Table>
            </TableCard>
          </div>
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default Home;
