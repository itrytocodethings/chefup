import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";

export const GroceryList = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  const [mealIngredients, setMealIngredients] = useState([]);
  const [groceryList, setGroceryList] = useState([]); // wip

  let ingred = []; //
  

  store.cart.forEach((meal, i) => {
    let filtered = meal.nutrition.ingredients.filter((ingredient) => {
      // console.log(!store.excludedIngredients.includes(`${ingredient.id}`));
      return !store.excludedIngredients.includes(`${ingredient.id}`);
    });
    filtered.map((ingredient, index) => {
     ingred.push(ingredient);
     //setGroceryList([...groceryList,ingredient])
       
    });
  });
  
  return (
    <div className="container">
      <h1>Grocery List</h1>
      <ul className="list-group">
        {ingred.map((ingredient,ingredientIndex) => (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {ingredient.name}
            <div class="d-flex justify-content-between"><span class="badge bg-primary rounded-pill">{`${ingredient.amount} ${ingredient.unit}`}</span>
              <span onClick={(e) => {
                ingred = ingred.filter((ingredient,index)=> {
                  return index != ingredientIndex})
                console.log(ingred)
                
                
                }
                
                  
                
              }><i
                className="fa fa-trash"></i></span>
            </div>

          </li>


        ))}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};


let oldexample = `<i
className="fa fa-trash"
onClick={(e) =>
  props.modlist(
    props.tlist.filter(
      (
        eachtask,
        eachtaskindex
      ) => {
        //this is where I think I will delete one task from the todo list
        //(PUT request?)
        return (
          eachtaskindex !=
          makespanIDtheindex
        );
      }
    )
  )
}></i>`
/* 
{store.trending.forEach((item, i) => {
          store.trending[i].nutrition.ingredients.map((item, index) => {
            console.log(store.trending[i].nutrition.ingredients[index]);
            console.log(store.trending[i].nutrition.ingredients[index]);
            if (
              store.trending[i].nutrition.ingredients[index].id != "14412" &&
              store.trending[i].nutrition.ingredients[index].id != "4053" &&
              store.trending[i].nutrition.ingredients[index].id != "10719335" &&
              store.trending[i].nutrition.ingredients[index].id != "4513" &&
              store.trending[i].nutrition.ingredients[index].id != "10014412" &&
              store.trending[i].nutrition.ingredients[index].id != "4053" &&
              store.trending[i].nutrition.ingredients[index].id != "1002030" &&
              store.trending[i].nutrition.ingredients[index].id != "20081" &&
              store.trending[i].nutrition.ingredients[index].id != "1004513" &&
              store.trending[i].nutrition.ingredients[index].id != "1012047" &&
              store.trending[i].nutrition.ingredients[index].id != "19335" &&
              store.trending[i].nutrition.ingredients[index].id != "4582" &&
              store.trending[i].nutrition.ingredients[index].id != "2047" &&
              store.trending[i].nutrition.ingredients[index].id != "1102047"
            ){
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                  style={{ background: item.background }}
                >
                  <span>
                    {store.trending[i].nutrition.ingredients[index].name}
                  </span>
                  <span>
                    Amount:
                    <span>
                      {store.trending[i].extendedIngredients[index].amount}
                    </span>
                    <span>
                      {store.trending[i].extendedIngredients[index].unit}
                    </span>
                  </span>
                  }
                  {
                    // Conditional render example
                    // Check to see if the background is orange, if so, display the message
                    item.background === "orange" ? (
                      <p style={{ color: item.initial }}>
                        Successfully Added to Cart
                      </p>
                    ) : null
                  }
                  <button
                    className="btn btn-success"
                    onClick={() => actions.changeColor(index, "orange")}
                  >
                    Add to Cart
                  </button>
                </li>
              );
            }
          });
        })} */
