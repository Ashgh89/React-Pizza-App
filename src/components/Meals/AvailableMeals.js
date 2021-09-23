import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza Marinara",
    description:
      "Features tomatoes, garlic, oregano, and extra virgin olive oil.",
    price: 13.99,
  },
  {
    id: "m2",
    name: " Chicago Pizza",
    description:
      "beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce.",
    price: 19.5,
  },
  {
    id: "m3",
    name: "New York-Style Pizza",
    description: "tomato sauce and mozzarella cheese.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Sicilian Pizza",
    description:
      "thick cut of pizza with pillowy dough, a crunchy crust, and robust tomato sauce.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
