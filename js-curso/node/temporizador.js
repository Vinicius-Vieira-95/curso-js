const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * 11 * * 5', function () {
    console.log("Executando tarefa" , new Date().getSeconds())
})

setTimeout(function () {
    tarefa.cancel()
    console.log("Cancelando Tarefa")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log("Executando Tarefa 2", new Date().getSeconds())
})