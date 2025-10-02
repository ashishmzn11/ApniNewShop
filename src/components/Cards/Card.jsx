import { useContext, useState } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Card as BCard,
  Form,
  Container,
} from "react-bootstrap";
import { AppContaxt } from "../../store/store";
import EditCard from "./EditCard";
// import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pencil, Plus } from "react-bootstrap-icons";

export default function Card() {
  const { handleAddProduct } = useContext(AppContaxt);
  const navigate=useNavigate()

  // original state
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [Discound, setDiscound] = useState("");
  const [Discussion, setDiscussion] = useState("");

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (!name || !Price || !image || !Discound || !Discussion) return;
    handleAddProduct(name, Price, image, Discound, Discussion);
    setName("");
    setPrice("");
    setImage("");
    setDiscound("");
    setDiscussion("");
  };

  return (<>
    <Container
      fluid
      className="bg-light py-5 d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <BCard
        className="shadow-lg w-100 mx-auto"
        style={{ maxWidth: "1400px" }}
      >
        <BCard.Body className="p-3 p-md-4">
          <h2 className="text-center text-success fw-bold mb-4">
            🏪 Pantry Manager
          </h2>

          {/* Table Responsive */}
          <div
            className="table-responsive"
            style={{ maxHeight: "500px", overflowY: "auto" }}
          >
            <Table
              bordered
              hover
              responsive
              className="align-middle text-center mb-4"
            >
              <thead className="table-primary">
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Discound</th>
                  <th>Discussion</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <EditCard />
            </Table>
          </div>

          {/* Add Product Form */}
          <BCard className="shadow-sm border-0 rounded-4 p-3 mt-4">
            <h4 className="fw-bold text-success mb-3">➕ Add New Product</h4>

            {/* Row with g-3 gap makes auto-wrap on small screens */}
            <Row className="align-items-end g-3">
              <Col xs={12} md={3}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter product name"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={2}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={2}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Discound</Form.Label>
                  <Form.Control
                    type="number"
                    value={Discound}
                    onChange={(e) => setDiscound(e.target.value)}
                    placeholder="Enter Discound"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={2}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Discussion</Form.Label>
                  <Form.Control
                    type="text"
                    value={Discussion}
                    onChange={(e) => setDiscussion(e.target.value)}
                    placeholder="Enter Discussion"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={3}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImgChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={2}>
                <Button
                  variant="success"
                  className="w-100 fw-bold"
                  onClick={handleClick}
                >
                  Add Product
                </Button>
              </Col>
            </Row>
            
  <div className="mt-4 mb-5">
      <Button
        variant="outline-secondary"
        className="d-inline-flex align-items-center gap-2 rounded-pill px-4"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={16} />
        Back to Home
      </Button>
    </div>
            {/* Image Preview */}
            {image && (
              <div className="mt-4 text-center">
                <p className="fw-semibold text-muted">Preview:</p>
                <img
                  src={image}
                  alt="preview"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "2px solid #28a745",
                  }}
                />
              </div>
            )}
          </BCard>
        </BCard.Body>
      </BCard>
      
    </Container>
   
  </>
  );
}
