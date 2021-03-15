import { run } from './app'
import { AlertService } from './services/alert.service'
import { ComponentService } from './services/component.service'

import './main.scss'

const alertService = new AlertService()
const componentService = new ComponentService()

document.addEventListener('DOMContentLoaded', () => {
  run(alertService, componentService)
})
