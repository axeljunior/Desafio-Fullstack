const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const CronJob = require('cron').CronJob
const integrador = require('./data/integrator')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
	console.log('Servidor rodando na porta 3333')
	new CronJob(
		'30 11 * * *',
		integrador,
		null,
		true,
		'America/Sao_Paulo',
		null,
		// true // True para executar a tarefa no momento da execução
	)
})