import express, {Express, Request, Response} from 'express'

const app: Express = express()

app.disable('x-powered-by')

app.use(express.json())

app.get('/' , (req: Request, res: Response) => {
    res.send('하이')
})

app.listen(3000, async function () {
    console.log(`
    ####오이시쿠 나래 오이시쿠 나래###########
    ######모에 모에#################큥!#######
    `)
})