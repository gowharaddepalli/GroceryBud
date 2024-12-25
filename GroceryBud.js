function demo() {//to defind the function
    data.push(input.value) //to check the input value of data(or)refers to the current value of an input element
    add()//add the value
}


const input = document.getElementById('Search')// take to input value form server

function deleteData(e) {
    data.splice(e, 1)// method adds and/or removes array elements.
    add();
}

function changeData(e) {
    const index = e ;
    const input = prompt("Enter a new value:"); // Display a prompt to the user
    if (input !== null) { // If the user didn't click "Cancel"
      const targetElement = document.getElementsByClassName("ed")[index];//targetElement is check the data or value
      targetElement.innerHTML = input; // Change the value of the element
    }
  }
       
document.getElementById("exit").addEventListener("click", () => {
    data.length = 0;
    add()
    
})


const data = ["Bacoon", 'Meat', 'Milk', 'Eggs']
add()

function add() {
    let elements = document.getElementsByTagName('p')//Find elements by tag name
    if(elements.length > 0) {
        [...elements].forEach((ele) => {
            let divTags = ele.getElementsByTagName('div')
            for(let i = divTags.length - 1; i >= 0; i--) {
                let divTag = divTags[i]
                divTag.parentNode.removeChild(divTag)//Remove an HTML element
            }
        })
    }
    data.forEach((e, i) => {
        const para = document.createElement("p");
        para.innerHTML = `<div class="bu" id="bu${i}"><span class="ed">${e}</span> <button onclick="deleteData(${i})" class="btn"><i  class="fa fa-trash"></i></button><button onclick="changeData(${i})" class="icon"><i   class="fa fa-edit"></i></button> </div>`;
        document.getElementById("items").appendChild(para);//Add an HTML element    
    })
}