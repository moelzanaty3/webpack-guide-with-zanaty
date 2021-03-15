const alertService = new AlertService()
const componentService = new ComponentService()

document.addEventListener('DOMContentLoaded', () => {
  const run = (alertService, componentService) => {
    alertService.hideErrors()

    componentService.onClick(() => {
      alertService.hideErrors()
      const inputs = componentService.getInputs()
      // convert inputs to numbers
      const parsedInputs = parseInputs(...inputs)
      // check if the input is valid numbers or not
      if (inputsAreValid(...parsedInputs)) {
        const [numA, numB] = parsedInputs
        componentService.setResult(numA + numB)
      } else {
        componentService.setResult('')
        alertService.handleAdditionError(inputs, parsedInputs)
      }
    })
  }
  run(alertService, componentService)
})
