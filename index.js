// let input = document.getElementById("#button")

// input.addEventListener("click",addingEventListener)

// function addingEventListener(e) {
//     e.target.value;
// }

function addingEventListener()
{
    const input = document.getElementById('button');
    input.addEventListener('click', (e) => {
        alert("I was clicked!")
    })
    
};
