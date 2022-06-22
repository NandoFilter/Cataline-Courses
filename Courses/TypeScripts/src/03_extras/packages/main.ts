import axios from 'axios'         // Já possui tipagem
import Simplebar from 'simplebar' // Não possui tipagem mas possui package separado com elas
import onscreen from 'onscreen'   // Não possui tipagem

axios.get('/todos', {})

const content = document.querySelector('#content') as HTMLElement;
const simplebar = new Simplebar(content, { autoHide: true })

// É necessário utilizar require ou criar as próprias definições (global.d.ts)
// const onscreen = require('onscreen')