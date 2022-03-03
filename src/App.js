import './App.css';
import React, { useState } from 'react';
import foodListJSON from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import SearchBar from './Components/SearchBar/SearchBar';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foodListJSON);
  const [displayFood, setDisplayFood] = useState(foodListJSON);
  const [showForm, setShowForm] = useState(foodListJSON);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodList, newFood];
    setFoodList(updatedFood);
    setDisplayFood(updatedFood);
  };

  const searchFilter = (searchQuery) => {
    let filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredFoods);
    setDisplayFood(filteredFoods);
  };

  const deleteFood = (foodName) => {
    let newFood = [...displayFood];
    const filteredFood = newFood.filter((foodToDelete) => {
      return foodToDelete.name !== foodName;
    });
    console.log(filteredFood);
    setDisplayFood(filteredFood);
  };

  const toggleShow = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {showForm && <AddFoodForm addFood={addNewFood}></AddFoodForm>}
      <Button onClick={toggleShow} >{showForm?'Hide':'Add New Food'} </Button>

      <SearchBar search={searchFilter} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayFood.map((food) => {
          return (
            <FoodBox key={food.name} clickToDelete={deleteFood} food={food} />
          );
        })}
      </Row>
      {!displayFood.length && (
        <h2> Ooops! There's no more content to show! </h2>
      )}
    </div>
  );
}

export default App;
