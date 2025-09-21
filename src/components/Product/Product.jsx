import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

// Mock product data for the gallery
const products = [
  {
    id: 1,
    name: "Women's Night Dress",
    price: "₹218",
    source: "Shopsy By Flipkart",
    image: "https://via.placeholder.com/300x400.png?text=Product+1",
  },
  {
    id: 2,
    name: "Women's Color Block Long Top",
    price: "₹267",
    source: "Shopsy By Flipkart",
    image: "https://via.placeholder.com/300x400.png?text=Product+2",
  },
  {
    id: 3,
    name: "Asaaskm Women's Maternity/Nursing Nighty",
    price: "₹354",
    source: "Shopsy By Flipkart",
    image: "https://via.placeholder.com/300x400.png?text=Product+3",
  },
  {
    id: 4,
    name: "Blackboxes Reusable Grocery Bags Shopping Ba...",
    price: "₹252",
    source: "Shopsy By Flipkart",
    image: "https://via.placeholder.com/300x400.png?text=Product+4",
  },
  {
    id: 5,
    name: "Women's Stop-Embroidered Chanderi V-Neck...",
    price: "₹499",
    source: "Shoppers Stop",
    image: "https://via.placeholder.com/300x400.png?text=Product+5",
  },
  {
    id: 6,
    name: "42L Shopping Basket with Wheels",
    price: "₹1,835",
    source: "Amazon.in & more",
    image: "https://via.placeholder.com/300x400.png?text=Product+6",
  },
  {
    id: 7,
    name: "Amul Chocomini 250G",
    price: "₹140",
    source: "Zepto & more",
    image: "https://via.placeholder.com/300x400.png?text=Product+7",
  },
  {
    id: 8,
    name: "Women's Solid Full-Length-Blended Fabric Woven...",
    price: "₹699",
    source: "Women's Solid Full-Length",
    image: "https://via.placeholder.com/300x400.png?text=Product+8",
  },
  {
    id: 9,
    name: "KrisHyam Foldable Shopping Trolley cart Shopping...",
    price: "₹1,499",
    source: "KrisHyam Foldable",
    image: "https://via.placeholder.com/300x400.png?text=Product+9",
  },
  {
    id: 10,
    name: "Everbest Collapsible Shopping Cart & Tote Bag On Whe...",
    price: "₹1,599",
    source: "Everbest",
    image: "https://via.placeholder.com/300x400.png?text=Product+10",
  },
];

const Product = () => {
  return (
    <Container fluid className="min-vh-100 bg-light py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success display-4">Product Gallery</h1>
        <p className="text-muted mt-2">Explore our collection of products.</p>
      </div>

      <Row className="g-4 justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={6} sm={4} md={3} lg={2}>
            <Card className="shadow-sm border-0 rounded-3 h-100 overflow-hidden">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-sm font-semibold truncate">
                  {product.name}
                </Card.Title>
                <Card.Text className="text-muted mb-1 text-sm">{product.source}</Card.Text>
                <Card.Text className="fw-bold text-primary text-lg mt-auto">
                  {product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Back to Home Button */}
      <div className="text-center mt-5">
        <Button
          variant="outline-secondary"
          className="d-inline-flex align-items-center gap-2 rounded-pill px-4"
          onClick={() => (window.location.href = "/")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default Product;