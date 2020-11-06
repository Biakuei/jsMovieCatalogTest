//Here begins the section of event listeners
// let button = document.querySelector("button");
// let flag = 0;
// const changeColor = (event) => {
//     console.log(event.target);
//     button.style.background = "red";
    
// };

// button.addEventListener("mouseenter", changeColor);

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".add"),
    submitBtn = form.lastElementChild,
    inputForm = document.querySelector(".adding__input");
    
    const movieDB = {
        movies: [
            "Трансформеры 2",
            "Молчание ягнят",
            "Алладин",
            "Красная жара",
            "Невероятные приключения Уолтера Митти"
        ]
    };

    const reorderMovieDB = function(movieList) {
        movieDB.movies.sort();
        movieList.forEach((item, i) => {        
            item.innerText = `${i + 1} ${movieDB.movies[i]}`;
            if(movieDB.movies[i].length > 21) {
                item.style.cssText = "overflow: hidden; text-overflow:" + 
                        " ellipsis; white-space: nowrap; width: 500px;";
            }
        });
    };
        
    const addMovieToDB = (event) => {
        event.preventDefault();    

        if(inputForm.value) {
            let newMovieListItem = document.createElement("li");
            
            newMovieListItem.classList.add("promo__interactive-item");
            document.querySelector(".promo__interactive-list").append(newMovieListItem);
            movieDB.movies.push(inputForm.value);  
            reorderMovieDB(document.querySelectorAll(".promo__interactive-item"));

            document.querySelectorAll(".promo__interactive-item").forEach(item => {
                item.addEventListener("click", deleteListItem);
            });
            
            if(document.querySelector("[type='checkbox']").checked == true) {
                console.log("Insert favorite movie");
            }
            form.reset();
            console.log(movieDB.movies);
        }   
    };

    const deleteListItem = (event, i) => {
        event.preventDefault();

        movieDB.movies.splice(i, 1);
        event.target.remove();
        reorderMovieDB(document.querySelectorAll(".promo__interactive-item"));
        console.log(movieDB.movies);
    };

// Here's bigins the code implimentation
    reorderMovieDB(document.querySelectorAll(".promo__interactive-item"));

    document.querySelector(".promo__adv-title").remove();
    document.querySelectorAll("img").forEach(item => {
        item.remove();
    });

    document.querySelector(".promo__genre").innerHTML = "<h2>ДРАМА</h2>";
    document.querySelector(".promo__bg").style.background = "url(img/bg.jpg)";

    submitBtn.addEventListener("click", addMovieToDB);
});




