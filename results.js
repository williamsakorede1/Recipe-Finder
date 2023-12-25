const apiKey = "d87e4b844d3325541b9953c355bc5e92"
const apiId = "5ae71f0e"
const apiUrl = "https://api.edamam.com/search?q="
const search = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

async function getRecipes(query){
    let response = await fetch(apiUrl + query + "&app_id=" + apiId + "&app_key=" + apiKey);
    var data = await response.json();
    if (data.more == false){
        document.querySelector(".error").innerHTML = "Invalid"
        document.querySelector(".generalContainer").style.display = "none"
        document.querySelector(".backLink").style.display = "none"
    }
    else {
        document.querySelector(".generalContainer").style.display = "flex"
        document.querySelector(".backLink").style.display = "flex"
        document.querySelector(".error").innerHTML = ""
    }


    // displaying Recipes option 1 out of 10

    document.querySelector(".name").innerHTML = data.hits[0].recipe.label
    let image = document.querySelector(".image");
    image.src = data.hits[0].recipe.image
    let link = document.querySelector(".link");
    link.href = data.hits[0].recipe.url

    // displaying Recipes option 2 out of 10

    document.querySelector(".name2").innerHTML = data.hits[1].recipe.label
    let image2 = document.querySelector(".image2");
    image2.src = data.hits[1].recipe.image
    let link2 = document.querySelector(".link2");
    link2.href = data.hits[1].recipe.url

    // displaying Recipes option 3 out of 10

    document.querySelector(".name3").innerHTML = data.hits[2].recipe.label
    let image3 = document.querySelector(".image3");
    image3.src = data.hits[2].recipe.image
    let link3 = document.querySelector(".link3");
    link3.href = data.hits[2].recipe.url

     // displaying Recipes option 4 out of 10

    document.querySelector(".name4").innerHTML = data.hits[3].recipe.label
    let image4 = document.querySelector(".image4");
    image4.src = data.hits[3].recipe.image
    let link4 = document.querySelector(".link4");
    link4.href = data.hits[3].recipe.url

     // displaying Recipes option 5 out of 10

    document.querySelector(".name5").innerHTML = data.hits[4].recipe.label
    let image5 = document.querySelector(".image5");
    image5.src = data.hits[4].recipe.image
    let link5 = document.querySelector(".link5");
    link5.href = data.hits[4].recipe.url

     // displaying Recipes option 6 out of 10

    document.querySelector(".name6").innerHTML = data.hits[5].recipe.label
    let image6 = document.querySelector(".image6");
    image6.src = data.hits[5].recipe.image
    let link6 = document.querySelector(".link6");
    link6.href = data.hits[5].recipe.url

     // displaying Recipes option 7 out of 10

    document.querySelector(".name7").innerHTML = data.hits[6].recipe.label
    let image7 = document.querySelector(".image7");
    image7.src = data.hits[6].recipe.image
    let link7 = document.querySelector(".link7");
    link7.href = data.hits[6].recipe.url

     // displaying Recipes option 8 out of 10

    document.querySelector(".name8").innerHTML = data.hits[7].recipe.label
    let image8 = document.querySelector(".image8");
    image8.src = data.hits[7].recipe.image
    let link8 = document.querySelector(".link8");
    link8.href = data.hits[7].recipe.url

     // displaying Recipes option 9 out of 10

    document.querySelector(".name9").innerHTML = data.hits[8].recipe.label
    let image9 = document.querySelector(".image9");
    image9.src = data.hits[8].recipe.image
    let link9 = document.querySelector(".link9");
    link9.href = data.hits[8].recipe.url

     // displaying Recipes option 10 out of 10

    document.querySelector(".name10").innerHTML = data.hits[9].recipe.label
    let image10 = document.querySelector(".image10");
    image10.src = data.hits[9].recipe.image
    let link10 = document.querySelector(".link10");
    link10.href = data.hits[9].recipe.url
}

searchBtn.onclick = function() {
    getRecipes(search.value)
}

// getRecipes("okra")
