const buttons = document.querySelectorAll('.button')  // select all buttons
const body = document.querySelector('body')

// querySelectorAll will give nodelist, so apply forEach
buttons.forEach((button) => {
    console.log(button); // shows all buttons

    // ab event add karo i.e., click, then event ka kuch function(callBack fn) bhi to hoga
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target); // means: kis target se ye event aya hai
        
        // if(e.target.id === 'grey') {
        //     // body.style.backgroundColor = "grey"
        //     body.style.backgroundColor = e.target.id;
        // }

        const id = 'yellow'
        switch (id) {
            case 'grey': body.style.backgroundColor = e.target.id
            case 'whilte': body.style.backgroundColor = e.target.id
            case 'blue': body.style.backgroundColor = e.target.id
            case 'yellow': body.style.backgroundColor = e.target.id
        }
    })
})