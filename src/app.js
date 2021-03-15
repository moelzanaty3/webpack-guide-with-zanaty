const errorBox = document.getElementById('error')

const parseInputs = (...input) => {
  return input.map((str) => parseInt(str))
}

const inputsAreValid = (...input) => {
  return input.every((num) => typeof num === 'number' && !isNaN(num))
}

const handleAdditionError = (inputs, numbers) => {
  const fullMessage = inputs.reduce((message, str, index) => {
    if (inputsAreValid(numbers[index])) {
      return message + ''
    } else {
      return message + `${str} is not a number. `
    }
  }, 'Please enter two valid numbers! ')

  errorBox.classList.remove('invisible')
  errorBox.innerText = fullMessage
}

const hideErrors = () => {
  errorBox.classList.add('invisible')
}

// clear errors
hideErrors()

document.addEventListener('DOMContentLoaded', () => {
  const addValuesButton = document.getElementById('addValues')
  addValuesButton.addEventListener('click', (e) => {
    // tells the user agent that if the event does not get explicitly handled, 
    // its default action should not be taken as it normally would be.
    e.preventDefault()

    // clear errors
    hideErrors()

    const numberOneInput = document.getElementById('numberOne')
    const numberTwoInput = document.getElementById('numberTwo')
    const resultDiv = document.getElementById('result')

    const inputs = [numberOneInput.value, numberTwoInput.value]
    // convert inputs to numbers
    const parsedInputs = parseInputs(...inputs)
    // check if the input is valid numbers or not 
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs
      resultDiv.innerText = numA + numB
    } else {
      resultDiv.innerText = ''
      handleAdditionError(inputs, parsedInputs)
    }
  })
})
