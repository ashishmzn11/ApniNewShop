import { useState } from "react";
import { Table, Button, Row, Col, Card as BCard, Form } from "react-bootstrap";

function AddCard({ SendData }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");

  const HandlenameOnchange = (e) => setname(e.target.value);
  const HandlenacatOnchange = (e) => setcategory(e.target.value);

  // File input ke liye
  const HandleimgOnchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setimage(reader.result); // Base64 image URL set hoga
      reader.readAsDataURL(file);
    }
  };

  const HandleOnclick = () => {
    if (!name || !category || !image) {
      alert("⚠️ Please fill all fields before adding product");
      return;
    }
    SendData(name, category, image, "Remove");
    setname("");
    setcategory("");
    setimage("");
  };

  return (
    <BCard className="shadow-sm border-0 rounded-4 p-3 mt-4">
      <h4 className="fw-bold text-success mb-3">➕ Add New Product</h4>

      <Row className="align-items-end g-3">
        {/* Product Name */}
        <Col xs={12} md={4}>
          <Form.Group>
            <Form.Label className="fw-semibold">Product Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={HandlenameOnchange}
              placeholder="Enter product name"
            />
          </Form.Group>
        </Col>

        {/* Category */}
        <Col xs={12} md={3}>
          <Form.Group>
            <Form.Label className="fw-semibold">Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={HandlenacatOnchange}
              placeholder="Enter category"
            />
          </Form.Group>
        </Col>

        {/* Image Upload */}
        <Col xs={12} md={3}>
          <Form.Group>
            <Form.Label className="fw-semibold">Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={HandleimgOnchange}
            />
          </Form.Group>
        </Col>

        {/* Add Button */}
        <Col xs={12} md={2}>
          <Button
            variant="success"
            className="w-100 fw-bold"
            onClick={HandleOnclick}
          >
            Add Product
          </Button>
        </Col>
      </Row>

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

      {/* Back to Admin Button */}
      <div className="text-center mt-4">
        <Button
          variant="secondary"
          onClick={() => (window.location.href = "/Admin")}
        >
          Back to Admin
        </Button>
      </div>
    </BCard>
  );
}

export default AddCard;
