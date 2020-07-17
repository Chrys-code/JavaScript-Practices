 //Variables
 const button = document.querySelector('#btn')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

//Eventlisteners
button.addEventListener('click', () => {
    let hex = "#"

    for (var i = 0; i < 6; i++) {
        const hexIndex = parseInt(Math.random()*hexValues.length);
        hex += hexValues[hexIndex];
    }

    body.style.backgroundColor = hex;
    value.textContent = hex;
})