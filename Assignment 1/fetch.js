 // store the url of a json file in variable//
 let shoppingcorner = document.getElementById('shopping');
 let requestURL = 'https://ajaypreet.github.io/phase2/shoppinglist.json';
 //using fetch method we will perform request
 fetch('https://ajaypreet.github.io/phase2/shoppinglist.json')
     .then((response) => {
         // that request return us response
         return response.json()

     })
     .then((shoppingcorner) => {
         console.log(shoppingcorner);
         shoppinginfo(shoppingcorner)
     })

 // assembling the shoppinginfo()function//
 function shoppinginfo(jsonObj) {
     //binding json obj to a var
     let shoppinginfo = jsonObj['shoppinglist'];
     // loop through the shopping info object//
     for (let i = 0; i < shoppinginfo.length; i++) {

         //building html element for the content
         let div = document.createElement('div');
         div.setAttribute('class', 'col-md-3');
         let image = document.createElement('img');
         let description = document.createElement('h3');
         let price = document.createElement('p');


         //Setting the textContent property for each of the above elements (except the UL), based on the JSON content
         image.setAttribute('src', 'https://ajaypreet.github.io/phase2/images/' + shoppinginfo[i].image);
         image.setAttribute('alt', shoppinginfo[i].item);
         description.textContent = shoppinginfo[i].item;
         price.textContent = shoppinginfo[i].price;
         // appending child
         div.appendChild(description);
         div.appendChild(price);
         div.appendChild(image);
         shoppingcorner.appendChild(div);

     }
 }