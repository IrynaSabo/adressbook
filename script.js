const list = document.getElementById("anstallda");
const name = "Alexander";

function createNode(element){ //funktion som skapar element i HTML
    return document.createElement(element);
}
function append(parent,el){ //funktion som bifogar element till förälder-element 
    return parent.appendChild(el);
}

fetch('adressbok-1.json')// här tar jag emot information från json fil
 .then( 
  function(response){
      return response.json();
  })
  .then(
    function(employee){ // därifrån jobbar jag med objekter från emploee array 
        console.log("request saccesful", employee);       
       employee.sort(function(a, b){ //sorterar anstallda aldersmässigt
       return a.age - b.age;
       });
        for(i=0; i< employee.length;i++ ){
            console.log(employee[i].age)
            let li = createNode('li'), //  Skapar elementer som vi behover
          img = createNode('img'),
          span = createNode('span');
      img.src = employee[i].img;  
      span.innerHTML = `<br/>${employee[i].firstname}<br/> ${employee[i].lastname} <br/> ${employee[i].age} ${employee[i].email} ${employee[i].phone}`; // Make the HTML of our span to be the first and last name of our author
      append(li, img); // Bifogar alla vara elementer
      append(li, span);
      append(list, li);
        }
       
})

.catch(
function(error){
    console.log("request filed", error);
})