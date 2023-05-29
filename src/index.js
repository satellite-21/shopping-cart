import React from "react"
import ReactDOM from "react-dom";
import { useState } from "react"
 
const Shop = () => {

    const [arr, setArr] = useState([])

    function onSubmit(event){
        event.preventDefault(); 
        // this will prevent from submitting and refreshing the page 
        
        //how to retrieve the entire item from the input field
        const newItem = event.target.item.value

        setArr(prevArr => [...prevArr, newItem]);
        
         console.log(arr)
        //clear the  input field after adding the value to the array
        event.target.item.value = "";
    }

    //now after hitting the X it should delete that item from the array and shows rest of the items
    //the tutorial shows that we should do this using the filter function

    function deleteItem(index) {
        setArr(updateArr => updateArr.filter((_, i) => i !== index))
    }

    function clearArr() {
        setArr(updateArr => [])
    }


    return (

        <div>
            <h1>Project 4: Shopping List</h1>
            <h2> Items to buy: </h2>

            {/* adding the input box Here */}
            <form onSubmit={onSubmit}>
            <input type="text" name="item" placeholder="Add your Items here..." required></input>
            <button>Add</button>
            </form>

            {/* now here i need to display all the items in the array once the submit button is added */}

            <ul>
                {/* here we will be using the map function to display all the items in the array, the method to use the map is*/}
                {arr.map((item, index) => (
                    <li key={index}> {item}
                     
                     {/* when i am calling the function down , it erases all the elements while the other doesnt */}

                     {/* <button onClick={deleteItem(index)}>X</button>: */}

{/* In this syntax, the deleteItem function is immediately
 invoked during rendering, not when the button is clicked. 
 It means that the deleteItem function is called and its return 
 value is assigned as the event handler for the onClick event. 
 This behavior is not desired in most cases because you want the
  function to be executed when the button is clicked, not when the component renders.
<button onClick={() => deleteItem(index)}>X</button>:

In this syntax, an arrow function is used as an intermediate function wrapper. 
The arrow function is defined inline and serves as a callback function that calls 
the deleteItem function when the button is clicked. The deleteItem function is not
 called immediately during rendering but rather when the button is clicked. 
 This is the correct way to handle event handlers and execute the desired function when an event occurs.
Therefore, the second syntax using the arrow function is the correct one to 
ensure that the deleteItem function is called when the button is clicked. */}









                     {/* <button onClick={deleteItem(index)}>X</button> */} 

                     <button onClick={() => deleteItem(index)}>X</button>
                    </li>
                ))}

            </ul>
            <button onClick={clearArr}>clear</button>



        </div>

    );

};

ReactDOM.render(<Shop />, document.getElementById("root"));
