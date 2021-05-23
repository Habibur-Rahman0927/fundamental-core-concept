import React, { useEffect, useState } from 'react';
import MealFinder from '../MealFinder/MealFinder';

const About = () => {
    const [mael, setMael] = useState({});
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        .then(res => res.json())
        .then(data => setMael(data?.meals?.[0]))
    }, [])
    return (
        <div>
            <h1>This is About</h1> 
            <h2>Meals Name : {mael?.strMeal}</h2>
            <MealFinder></MealFinder>

        </div>
    );
};

export default About;   <h1>This is About</h1>