import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "French Fries",
    description: "Crispy.. ",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Potato Wedges",
    description: "Crispy",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Veg Burger",
    description: "Indian, Overloaded",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Mexican Pizza",
    description: "Mexican...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Italian Pizza",
    description: "Olives...and green vegetables...",
    price: 29.99,
  },
  {
    id: "m6",
    name: "Paneer Tikka Pizza",
    description: "Exotic paneer...and many more toppings...",
    price: 39.99,
  },
  {
    id: "m7",
    name: "Corn and Cheese Pizza",
    description: "Healthy...and tasty...",
    price: 19.99,
  },
  {
    id: "m8",
    name: "Garlic Bread",
    description: "Crispy...and cheesy...",
    price: 15.99,
  },
  {
    id: "m9",
    name: "Cold Coffee",
    description: "Creamy...and Ice cold...",
    price: 12.99,
  },
  {
    id: "m10",
    name: "Hot Chocolate",
    description: "Hot...and Chocolatyy...",
    price: 11.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
