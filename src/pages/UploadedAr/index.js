import React, { useEffect, useState, useCallback } from "react";
import DefaultLayout from "../__layouts/defaultLayout";
import { NavLink } from "react-router-dom";
import Pagination from "react-bootstrap-4-pagination";
import useModel from "../../Context/hooks/useModel";
import QRCode from "react-qr-code";
import ItemActions from "../../Components/ItemActions";
import { Button, Form, InputGroup, FormControl, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import history from "../../history";

import { Container, TableCard } from "./styles";

function UploadedAr({ location }) {
  const [models, setModels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { folder } = location;

  const { allModels, paginateModels } = useModel();

  const fetchModels = useCallback(async () => {
    const data = await allModels();

    setTotalPages(Math.ceil(data.length / 5));

    const { modelsPaginated } = paginateModels(data, currentPage);

    setModels(modelsPaginated);
  }, [allModels, paginateModels, currentPage]);

  useEffect(() => {
    fetchModels();
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderTableItem = () => {
    return models.map(({ id, GLB, USDZ, folder, AR }) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <QRCode
              value="http://192.168.0.10:3000/model/165651456"
              size={55}
            />
          </td>
          <td>
            <Form.Control as="textarea" />
          </td>
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
            {AR ? (
              <Button variant="danger">Disable</Button>
            ) : (
              <Button variant="success">Enable</Button>
            )}
          </td>
          <td>
            <ItemActions id={id} GLB={GLB} USDZ={USDZ} />
          </td>
        </tr>
      );
    });
  };

  const paginationConfig = {
    totalPages,
    currentPage,
    showMax: 5,
    size: "md",
    threeDots: true,
    prevNext: true,
    onClick: function (page) {
      setCurrentPage(page);
    },
  };

  return (
    <DefaultLayout>
      <Container>
        <Button
          onClick={() => history.push("/create-ar")}
          style={{ marginLeft: "auto" }}
        >
          UPLOAD NEW MODEL
        </Button>
        <TableCard>
          <h5>Asset Management {folder && `- ${folder.name}`}</h5>
          <div className="table-header">
            <div className="pagination">
              <span>Show</span>
              <Form.Control
                as="select"
                style={{
                  width: "60px",
                  height: "35px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <option>5</option>
                <option>10</option>
              </Form.Control>
              <span>entries</span>
            </div>
            <Form>
              <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                Search
              </Form.Label>
              <InputGroup className="mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroupUsername2"
                  placeholder="Search"
                />
              </InputGroup>
            </Form>
          </div>
          <Table striped hover borderless responsive center>
            <thead>
              <tr>
                <th>SR NO.</th>
                <th>QR CODE</th>
                <th>EMBED CODE</th>
                <th>GLB MODEL</th>
                <th>USDZ MODEL</th>
                <th>FOLDER</th>
                <th>AR</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>{renderTableItem()}</tbody>
          </Table>
          <Pagination {...paginationConfig} />
        </TableCard>
      </Container>
    </DefaultLayout>
  );
}

export default UploadedAr;
