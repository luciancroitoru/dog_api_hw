console.log(`Ready to fetch?`);

async function getBreedImage(){

    const selectedOption = dropdownMenu.querySelector("option:checked");
    const categoryName = selectedOption.textContent;

    let displayImageSrc = document.querySelector(`#display-view`);

    const response = await fetch(`https://dog.ceo/api/breed/${categoryName}/images/random`);
    const parsedResponse = await response.json();

    const imageUrl = parsedResponse.message;
    displayImageSrc.src = imageUrl;

    console.log(imageUrl);
}

    async function breedCategories() {

    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const objectCategories = data.message;
    const categoriesList = Object.keys(objectCategories);

    categoriesList.forEach((categoryName) => {
    console.log(categoryName);
    const option = document.createElement("option");
    option.textContent = categoryName;
    dropdownMenu.append(option);
  });
  
    button.disabled = false;
  }
  
  breedCategories();
  
  const button = document.querySelector(`#button`);
  button.addEventListener(`click`, getBreedImage);
  let dropdownMenu = document.querySelector(`#dropdown-menu`);