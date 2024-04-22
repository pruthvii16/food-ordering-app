import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Gourmet Meals, Straight to Your Door</h2>
      <p>
      Select your preferred dish from our extensive menu and savor a delightful lunch or dinner in the comfort of your home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
