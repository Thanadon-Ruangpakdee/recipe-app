// src/pages/HighlightPage.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const HighlightPage = () => {
  const [highlightedRecipes, setHighlightedRecipes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("highlightedRecipes");
    if (storedRecipes) {
      setHighlightedRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const removeRecipe = (recipeId) => {
    const updatedRecipes = highlightedRecipes.filter((recipe) => recipe.id !== recipeId);
    setHighlightedRecipes(updatedRecipes);
    localStorage.setItem("highlightedRecipes", JSON.stringify(updatedRecipes));
  };

  const clearAllRecipes = () => {
    setHighlightedRecipes([]);
    localStorage.removeItem("highlightedRecipes");
    setModalVisible(false);
  };

  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <Container className="mt-4">
      <div className="header" style={{ padding: "15px 0", backgroundColor: "#f8f9fa", marginBottom: "30px", textAlign: "left" }}>
        <h2 style={{ fontWeight: "700", fontSize: "2.2rem", color: "#343a40", margin: 0 }}>
          Highlighted Recipes
        </h2>
      </div>

      <Row className="mb-4">
        {highlightedRecipes.length === 0 ? (
          <Col>
            <p style={{ textAlign: "center", color: "#6c757d" }}>No highlighted recipes yet.</p>
          </Col>
        ) : (
          highlightedRecipes.map((recipe) => (
            <Col xs={12} sm={6} md={4} lg={3} key={recipe.id} className="mb-4">
              <Card
                className="shadow-lg h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.15)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={recipe.image} // Assuming your recipe object has an image property
                  alt={recipe.name} // Assuming your recipe object has a name property
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    objectFit: "cover",
                    height: "200px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    <strong>Ingredients:</strong> {recipe.ingredients.join(", ")} <br />
                    <strong>Instructions:</strong> {recipe.instructions}
                  </Card.Text>
                  <Button
                    variant="danger"
                    style={{
                      borderRadius: "30px",
                      fontWeight: "bold",
                      padding: "12px 24px",
                      marginTop: "10px",
                      display: "block",
                      width: "100%",
                    }}
                    onClick={() => removeRecipe(recipe.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {highlightedRecipes.length > 0 && (
        <Button
          variant="danger"
          onClick={toggleModal}
          style={{
            borderRadius: "30px",
            padding: "12px",
            fontWeight: "bold",
            fontSize: "1rem",
            width: "100%",
          }}
        >
          Clear All
        </Button>
      )}

      <Modal show={modalVisible} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Clear All Highlighted Recipes</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to clear all highlighted recipes?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={clearAllRecipes}>
            Clear All
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HighlightPage;