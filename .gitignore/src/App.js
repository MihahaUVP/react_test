import React from "react"
export function App() {
return (<div>
<h1>Мое простое React приложение</h1>
<h3>Время : {new Date().toLocaleTimeString('ru-RU')}</h3>
</div>)
}