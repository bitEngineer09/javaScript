const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault(); // esse vo default kaam rok dega, matlab ki submit karne par vo values direct server ko nahi bhej paaega
    // un values ko hold kar lega

    const height = parseInt(document.querySelector('#height').value) // .value: gets the current value inside the input field.
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give valid height ${height}.`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // toFIxed(2) will give results upto 2 decimal places only
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
})