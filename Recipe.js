const searchBtn = document.getElementById('search-baar');
const mealList = document.getElementById("meal");
const recipeCloseBtn = document.getElementById("ecipe-close-btn");
const mealDeatailsContent = document.querySelector(".meal-details");
console.log("my name is muqtadir alam");
searchBtn.addEventListener('click', getMealList);


//  searchInputText.value = "";
function getMealList() {
    let searchInputText = document.getElementById('search-input').value;
    
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText} `)
        .then(Response => Response.json())
        .then(data => {
            let html = " ";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += ` <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                      <img
                        src="${meal.strMealThumb}" />
                    </div>
        
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                      <a href="#" class="recipe-btn">get recipe</a>
                    </div>
                  </div>
                    `;
                });
            }
            mealList.innerHTML = html;

        })

}
