//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Exportic from './components/GlavniExport'
//import { Zaglavlje, GlavniDio, Podnozje } from './components/NamedExporti'
import { GlavniExport as Exportic, Zaglavlje, GlavniDio, Podnozje} from './components'

function App() {

  return (
    <>
      <h1>Zadatak za vježbu - import_export</h1>
      <h2>Ovo nam je primjer export default modula:</h2>
      <Exportic />
      <h2>Ovo su nam primjeri named importa:</h2>
      <Zaglavlje />
      <GlavniDio />
      <Podnozje />
    </>
  )
}

export default App
