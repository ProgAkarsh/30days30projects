const input = document.querySelector('input')


const lowerCaseOutput = document.querySelector('#lowercase span')

const upperCaseOutput = document.querySelector('#uppercase span')

const camelCaseOutput = document.querySelector('#camelcase span')

const pascalCaseOutput = document.querySelector('#pascalcase span')

const snakeCaseOutput = document.querySelector('#snakecase span')

const kebabCaseOutput = document.querySelector('#kebabcase span')

const trimOutput = document.querySelector('#trim span')





input.addEventListener('input', function(){
    lowerCaseOutput.innerHTML = input.value.toLowerCase() 
    upperCaseOutput.innerHTML = input.value.toUpperCase() 
})

function capitalizeString(str){
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}


function camelcase(str){
    const loweCaseString = str.toLowerCase()
    const wordsArray = loweCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if (i=== 0) return word
        return capitalizeString(word)
    })
    return finalArray.join('')
}


function pascalcase(str){
    const loweCaseString = str.toLowerCase()
    const wordsArray = loweCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function snakeCase(str){
    return str.replaceAll(' ','_')
}

function kebabCase(str){
    return str.replaceAll(' ','-')
}

function trimCase(str){
    return str.replaceAll(' ','')
}


function updateScreen(){
    lowerCaseOutput.innerHTML = input.value.toLowerCase() 
    upperCaseOutput.innerHTML = input.value.toUpperCase()
    camelCaseOutput.innerHTML = camelcase(input.value)
    pascalCaseOutput.innerHTML = pascalcase(input.value)
    snakeCaseOutput.innerHTML = snakeCase(input.value)
    kebabCaseOutput.innerHTML = kebabCase(input.value)
    trimOutput.innerHTML = trimCase(input.value)
}
updateScreen()

input.addEventListener('input',function(){
    updateScreen()
})