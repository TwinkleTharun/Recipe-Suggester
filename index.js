class Ingredient {
    constructor(name) {
        this.name = name;
    }
}

class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

const ingredients = [];
const recipes = [];

document.getElementById('add-ingredient').addEventListener('click', () => {
    try {
        const ingredientName = document.getElementById('ingredient').value.trim();
        if (!ingredientName) {
            throw new Error("Please enter an ingredient.");
        }

        const ingredient = new Ingredient(ingredientName);
        ingredients.push(ingredient);
        updateIngredientList();
        suggestRecipes();
        document.getElementById('ingredient').value = ''; // Clear the input field
    } catch (error) {
        showError(error.message);
    }
});

function updateIngredientList() {
    const ingredientList = document.getElementById('ingredient-list');
    ingredientList.innerHTML = '';
    ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.name;
        ingredientList.appendChild(listItem);
    });
}

function suggestRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    try {
        switch (ingredients.length) {
            case 0:
                throw new Error("Add ingredients to get recipe suggestions.");
            case 1:
                throw new Error("Add more ingredients for better recipe suggestions.");
            default:
                // Suggest recipes based on available ingredients
                const suggestedRecipes = recipes.filter(recipe => {
                    return ingredients.some(ingredient => 
                        recipe.ingredients.some(recipeIngredient => 
                            recipeIngredient.toLowerCase() === ingredient.name.toLowerCase()
                        )
                    );
                });

                if (suggestedRecipes.length === 0) {
                    throw new Error("No matching recipes found.");
                } else {
                    suggestedRecipes.forEach(recipe => {
                        const listItem = document.createElement('li');
                        listItem.textContent = recipe.name;
                        recipeList.appendChild(listItem);
                    });
                }
                break;
        }
    } catch (error) {
        showError(error.message);
    }
}

function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    setTimeout(() => {
        errorElement.textContent = '';
    }, 3000); // Clear the error message after 3 seconds
}

// Sample recipes
const recipe1 = new Recipe("Pasta Carbonara", ["pasta", "eggs", "bacon", "cheese"]);
const recipe2 = new Recipe("Chicken Stir-Fry", ["chicken", "vegetables", "soy sauce"]);
const recipe3 = new Recipe("Spaghetti Bolognese", ["spaghetti", "ground beef", "tomato sauce", "onion"]);
const recipe4 = new Recipe("Vegetable Curry", ["potatoes", "carrots", "peas", "curry sauce"]);
const recipe5 = new Recipe("Caprese Salad", ["tomatoes", "mozzarella cheese", "fresh basil", "balsamic vinegar"]);
const recipe6 = new Recipe("Chicken Alfredo", ["chicken breast", "fettuccine", "heavy cream", "Parmesan cheese"]);
const recipe7 = new Recipe("Sushi Rolls", ["rice", "nori seaweed", "fish", "avocado"]);
const recipe8 = new Recipe("Mushroom Risotto", ["rice", "mushrooms", "vegetable broth", "white wine"]);
const recipe9 = new Recipe("Guacamole", ["avocado", "tomato", "onion", "lime juice"]);
const recipe10 = new Recipe("Caesar Salad", ["lettuce", "croutons", "Parmesan cheese", "Caesar dressing"]);
recipes.push(recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8, recipe9, recipe10);
const recipe11 = new Recipe("Taco Salad", ["ground beef", "lettuce", "tomatoes", "taco seasoning"]);
const recipe12 = new Recipe("Lemon Garlic Shrimp", ["shrimp", "garlic", "lemon juice", "butter"]);
const recipe13 = new Recipe("Vegetable Lasagna", ["lasagna noodles", "ricotta cheese", "spinach", "marinara sauce"]);
const recipe14 = new Recipe("Beef Stroganoff", ["beef strips", "mushrooms", "sour cream", "onion"]);
const recipe15 = new Recipe("Greek Salad", ["cucumber", "kalamata olives", "feta cheese", "red onion"]);
const recipe16 = new Recipe("Beef Tacos", ["beef", "taco shells", "salsa", "cheddar cheese"]);
const recipe17 = new Recipe("Pancakes", ["flour", "eggs", "milk", "syrup"]);
const recipe18 = new Recipe("Chicken Noodle Soup", ["chicken broth", "chicken breast", "noodles", "carrots"]);
const recipe19 = new Recipe("Caesar Wrap", ["chicken", "flour tortilla", "romaine lettuce", "Caesar dressing"]);
const recipe20 = new Recipe("Mango Salsa", ["mango", "red bell pepper", "red onion", "lime juice"]);
recipes.push(recipe11, recipe12, recipe13, recipe14, recipe15,recipe16, recipe17, recipe18, recipe19, recipe20);
const recipe21 = new Recipe("Margarita Pizza", ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil"]);
const recipe22 = new Recipe("Beef and Broccoli Stir-Fry", ["beef strips", "broccoli", "soy sauce", "garlic"]);
const recipe23 = new Recipe("Hawaiian Burger", ["ground beef", "pineapple slice", "teriyaki sauce", "hamburger bun"]);
const recipe24 = new Recipe("Pesto Pasta", ["pasta", "pesto sauce", "cherry tomatoes", "Parmesan cheese"]);
const recipe25 = new Recipe("Veggie Wrap", ["bell peppers", "zucchini", "hummus", "whole wheat tortilla"]);
const recipe26 = new Recipe("BBQ Ribs", ["pork ribs", "barbecue sauce", "coleslaw", "cornbread"]);
const recipe27 = new Recipe("Spinach and Mushroom Omelette", ["eggs", "spinach", "mushrooms", "cheddar cheese"]);
const recipe28 = new Recipe("Chicken Fajitas", ["chicken strips", "bell peppers", "onions", "tortillas"]);
const recipe29 = new Recipe("Tomato Soup", ["tomato soup", "grilled cheese sandwich"]);
const recipe30 = new Recipe("Tiramisu", ["ladyfingers", "mascarpone cheese", "espresso", "cocoa powder"]);
recipes.push(recipe21, recipe22, recipe23, recipe24, recipe25,recipe26, recipe27, recipe28, recipe29, recipe30);
const recipe31 = new Recipe("Shrimp Scampi", ["shrimp", "garlic", "white wine", "lemon"]);
const recipe32 = new Recipe("Mushroom and Swiss Burger", ["ground beef", "swiss cheese", "mushrooms", "hamburger bun"]);
const recipe33 = new Recipe("Chicken Parmesan", ["chicken breast", "tomato sauce", "mozzarella cheese", "spaghetti"]);
const recipe34 = new Recipe("Salmon with Dill Sauce", ["salmon fillet", "dill", "yogurt", "lemon"]);
const recipe35 = new Recipe("Vegetable Fried Rice", ["rice", "mixed vegetables", "soy sauce", "sesame oil"]);
const recipe36 = new Recipe("Cobb Salad", ["lettuce", "chicken", "bacon", "avocado"]);
const recipe37 = new Recipe("Beef Tamales", ["beef", "corn masa", "chili sauce", "corn husks"]);
const recipe38 = new Recipe("Spicy Thai Curry", ["chicken", "coconut milk", "red curry paste", "bamboo shoots"]);
const recipe39 = new Recipe("Classic BLT Sandwich", ["bacon", "lettuce", "tomato", "mayonnaise"]);
const recipe40 = new Recipe("Chocolate Chip Cookies", ["butter", "flour", "chocolate chips", "sugar"]);
recipes.push(recipe31, recipe32, recipe33, recipe34, recipe35,recipe36, recipe37, recipe38, recipe39, recipe40);
const recipe41 = new Recipe("Beef and Bean Burrito", ["ground beef", "beans", "rice", "tortilla"]);
const recipe42 = new Recipe("Lemon Butter Chicken", ["chicken thighs", "lemon", "butter", "garlic"]);
const recipe43 = new Recipe("Veggie Pizza", ["pizza dough", "tomato sauce", "bell peppers", "mushrooms"]);
const recipe44 = new Recipe("Pineapple Fried Rice", ["rice", "pineapple chunks", "shrimp", "soy sauce"]);
const recipe45 = new Recipe("Baked Ziti", ["ziti pasta", "ricotta cheese", "mozzarella cheese", "marinara sauce"]);
const recipe46 = new Recipe("Caesar Chicken Salad", ["chicken breast", "romaine lettuce", "Caesar dressing", "croutons"]);
const recipe47 = new Recipe("Homemade Chili", ["ground beef", "kidney beans", "tomatoes", "chili powder"]);
const recipe48 = new Recipe("Vegetable Pot Pie", ["mixed vegetables", "pie crust", "vegetable broth", "butter"]);
const recipe49 = new Recipe("Garlic Shrimp Pasta", ["shrimp", "linguine", "garlic", "white wine"]);
const recipe50 = new Recipe("Tofu Stir-Fry", ["tofu", "broccoli", "soy sauce", "ginger"]);
recipes.push(recipe41, recipe42, recipe43, recipe44, recipe45,recipe46, recipe47, recipe48, recipe49, recipe50);
//Add more recipes as you want
