const searchBtn = document.getElementById('search-baar');
const mealList = document.getElementById("meal");
const recipeCloseBtn = document.getElementById("ecipe-close-btn");
const mealDeatailsContent = document.querySelector(".meal-details");
const searchResult = document.getElementById("search-result");
searchBtn.addEventListener('click', getMealList);


 searchInputText = "";
function getMealList() {
  let searchInputText = document.getElementById('search-input').value;
  
  if (searchInputText) {
   
    
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText} `)
      .then(Response => Response.json())
      .then(data => {
        
        
        let html = " ";
        if (data.meals!=null) {
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
        else {
          html += ` <div class="meal-item" data-id="">
                   
        
                    <div class="meal-name">
                        <h3>plse enter valid search or opps this gradiant is not here....</h3>
                      
                    </div>
                  </div>
                    `;
        }
      
        mealList.innerHTML = html;
        searchResult.style.display = "block"
        searchInputText= "";
        

      })
  }
  else {
    
    searchResult.style.display = "none";
   
    
  }

}
