import React from "react";
import {createRoot} from "react-dom/client";

import {App} from './routes/App'

const container = document.querySelector('#app')
const root = createRoot(container)
console.group("Llamada a react")
root.render(<App />)
console.groupEnd("Llamada a react")
