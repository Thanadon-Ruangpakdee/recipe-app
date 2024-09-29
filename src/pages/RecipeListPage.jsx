import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Card, Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const RecipeListPage = ({ recipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter recipes by category and search
  const filterRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [recipes, selectedCategory, searchQuery]);

  useEffect(() => {
    setFilteredRecipes(filterRecipes);
  }, [filterRecipes]);

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const categories = useMemo(() => {
    return ["All", ...new Set(recipes.map((recipe) => recipe.category))];
  }, [recipes]);

  if (recipes.length === 0) {
    return (
      <Container className="mt-4">
        <h1>No Recipes Found</h1>
        <p>It looks like there are no recipes available. Try adding some!</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1 className="text-black text-4xl font-bold mb-6">All Recipes</h1>

      {/* Search Input */}
      <Row className="mb-4">
        <Col xs={12} md={8} className="d-flex justify-content-center justify-content-md-end">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="dark" onClick={handleSearch}>Search</Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Category Filter Buttons */}
      <ButtonGroup className="mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "dark" : "outline-secondary"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      {/* Recipe Cards */}
      <Row>
        {filteredRecipes.map((recipe) => (
          <Col xs={12} sm={6} md={4} lg={3} key={recipe.id} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img
                variant="top"
                src={recipe.image}
                alt={recipe.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.instructions}</Card.Text>
                <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeListPage;