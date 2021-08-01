let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
// // document.addEventListener("click", e => {console.log(e.target.name)  })
// // * Set up event listeners to respond to user events
// // document.querySelector('.submit').addEventListener('submit', handleSubmit)
// // document.addEventListener(e) => {
//   // function handleSubmit(e) {
//     //   e.preventDefault() }
//     //   let toyObj = {
//       //     name: e.target.name.value,
//       //     image: e.target.image.value
      
//       //   }
//       // }
//       // * Use `fetch()` to make a "POST" request to create a new toy, then add it to the
//       //   DOM
//       // function addNewToy(toyObj) {
//         //   fetch('http://localhost:3000/toys',{
//           //     method: 'POST',
//           //     headers: {
//             //         'Content-Type': 'application/json'
//             //     },
//             //     body:JSON.stringify(toyObj)
//             //   })
//             //   .then(resp => resp.json())
//             //   .then(toy => console.log(toy))
//             // }
//             function getToys(){
//               fetch('http://localhost:3000/toys')
//               .then(resp => resp.json())
//               // .then(toy => console.log(toy))
//               .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
//             }
//       //Dom Render Functions
//       function renderOneToy(toy) {
//         //build toy
//         let toyCard = document.createElement('li')
//           toyCard.innerHTML = `
//         <div class="card">  
//         <h2>Toy Name: ${name}</h2>
//         <img src = "${toy.image}" class=="toy-avatar'/>
//         <p>
//         Likes
//         </p>
//         <button class="like-btn" id=${id}>Like </button>
//         </div> 
//         `
//         document.querySelector('#toy-collection').appendChild(toyCard)
//       }
//         // * Use `fetch()` to make a "GET" request, then render the returned toys to the
// //   DOM
// //get data and render our toys to the dom
// function initialToyRender() {
//   // toyData.forEach(toy => renderOneToy(toy))
//   getToys()
// }
// initialToyRender()
// * `h2` tag with the toy's name
// * `img` tag with the `src` of the toy's image attribute and the class name "toy-avatar"
// * `p` tag with how many likes that toy has
// * `button` tag with a class "like-btn" and an id attribute set to the toy's id number

// After all of that, the toy card should look something like this:

// ```html
//   <div class="card">
//     <h2>Woody</h2>
//     <img src="[toy_image_url]" class="toy-avatar" />
//     <p>4 Likes </p>
//     <button class="like-btn" id="[toy_id]">Like <3</button>
//   </div>

// * Use `fetch()` to make a "PATCH" request that updates an existing toy, then
//   render the updated information to the DOM

//console.log("Remember: You're good enough, you're strong enough and gosh darn it, people like you!")
///*****First Deliverable */
//fetch a toy and render it to the DOM
//function fetchToys() {
// document.addEventListener("click", e => {e.preventDefault()
//   {console.log(e.target)  }})

const toyboxContainer = document.querySelector("#toy-collection")
  console.log(toyboxContainer)
  
const BASE_URL = 'http://localhost:3000/toys/'
  //console.log(toybox)

let toyList = document.createElement('form')  
toyboxContainer.appendChild( toyList )

//console.log(toyList)
fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((toyArray) => { 
    //console.log(toyArray)
    toyArray.forEach( (toy) => { 
      //console.log(toy)
    let toyItem = document.createElement('div') 
    console.log(toyItem)   
    toyList.appendChild(toyItem)  

   let toyImageToAppend = document.createElement("img")
      toyItem.appendChild(toyImageToAppend)
      console.log(toyImageToAppend)   
 // let toyToAppend2.innerHTML = document.createElement("ul")
//       //console.log(toyToAppend)
       toyImageToAppend.src = toy.image

//       toyboxContainer.append(toyToAppend)
  
    })
  })
//renderOneToy(toy)))

   // toyArray.forEach((objInArray) => { console.log(objInArray)
    //function getToys(){
      //               fetch('http://localhost:3000/toys')
      //               .then(resp => resp.json())
      //               // .then(toy => console.log(toy))
      //               .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
      //             }
    // console.log(dataArray[0].image_url)
    //image
    //console.log(objInArray)
    //})// objInArray cannot be called from outside of here
    //const toyImage = document.querySelector("input-text");
    // console.log(imageToChange)
    //toyImage[1].src = dataArray[0].image_url;
    //imageToChange.src =
    //name
    //const toyName = document.querySelector("input-text");
    //console.log(nameToChange)
    //toyName.textContent = dataArray[0].name;
    //description
    
    
  //fetchToys(toyArray)
  //}
  //)}
  //renderOneToy()

//get container
  //render toy to DOM container
  //creat a list under #toy-collection
