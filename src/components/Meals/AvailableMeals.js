import React from 'react'
import { MealsItem } from './MealsItem';
import classes from './AvailableMeals.module.css'
import { Card } from '../UI/Card/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  

export const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(mealItem => <MealsItem key={mealItem.id} name={mealItem.name} description={mealItem.description} price={mealItem.price} id={mealItem.id}/>);
  return (
    <section className={classes.meals}>
       <Card>
       <ul>
            {mealsList}
        </ul>
       </Card>
    </section>
  )
}
