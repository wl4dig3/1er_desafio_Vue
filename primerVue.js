const saludo = new Vue({
    el: '#app',
    data: {
        saludar: 'que codigo tan fino',
        frutas: [
            {nombre:'Kiwi', cantidad: 45},
            {nombre: 'Manzanas', cantidad: 99},
            {nombre: 'Pino', cantidad: 4},
            {nombre: 'Melon', cantidad: 9}
        ]
    }
})