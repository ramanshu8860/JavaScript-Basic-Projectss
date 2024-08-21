const inputText = document.querySelector('input')
const lowerCase = document.querySelector('#lowerCase span')
const upperCase = document.querySelector('#upperCase span');
const camelCase = document.querySelector('#camelCase span');
const pascalCase = document.querySelector('#pascalCase span');
const snakeCase = document.querySelector('#snakeCase span')
const trimCase = document.querySelector('#trim span')
const kebabCase = document.querySelector('#kebabCase span')

function capitalTheFirstLetter(String){
    return String[0].toUpperCase() + String.slice(1, String.length)
}

function toCamelCase(String){
    const lowerCaseString = String.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');
    const finalArray = wordsArray.map((word, i) => {
        if(i == 0){
            return word;
        }else{
            return capitalTheFirstLetter(word)
        }
    })
    return finalArray.join('')
}

function toPascalCase(String){
    const outPutOfCamelCase = toCamelCase(String);
    return outPutOfCamelCase[0].toUpperCase() + outPutOfCamelCase.slice(1, outPutOfCamelCase.length)
}

function updateScreen(){
    lowerCase.innerText = inputText.value.toLowerCase();
    upperCase.innerText = inputText.value.toUpperCase();
    camelCase.innerText = toCamelCase(inputText.value);
    pascalCase.innerText = toPascalCase(inputText.value);
    snakeCase.innerText = inputText.value.split('').join('_')
    kebabCase.innerText = inputText.value.split('').join('-')
    trimCase.innerText = inputText.value.split('').join('')

}

inputText.addEventListener('input', updateScreen)