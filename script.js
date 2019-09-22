const list = document.getElementById("anstallda");

function createNode(element){
    return document.createElement(element);
}
function append(parent,el){
    return parent.appendChild(el);
}

fetch('adressbok-1.json')
 .then( 
  function(response){
      return response.json();
  })
  .then(
    function(employee){ 
        console.log("request saccesful", employee);       
       employee.sort(function(a, b){
       return a.age - b.age;
       });
        for(i=0; i< employee.length;i++ ){
            console.log(employee[i].age)
            let li = createNode('li'), //  Create the elements we need
          img = createNode('img'),
          span = createNode('span');
      img.src = employee[i].img;  // Add the source of the image to be the src of the img element
      span.innerHTML = `<br/>${employee[i].firstname}<br/> ${employee[i].lastname} <br/> ${employee[i].age} ${employee[i].email} ${employee[i].phone}`; // Make the HTML of our span to be the first and last name of our author
      append(li, img); // Append all our elements
      append(li, span);
      append(list, li);
        }
       
})

.catch(
function(error){
    console.log("request filed", error);
})