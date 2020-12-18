import app from '../server'
import supertest from 'supertest'
import axios from 'axios'
import mongoose from 'mongoose'
import config from '../config'
import Quiz from '../models/quiz'
import { mock } from '../services/openTrivia.test'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const request = supertest(app)
const host = 'Arnie Schwarn'

beforeAll(async () => {
  // Connect to a Mongo DB
  mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => console.error(err))
})

afterEach(async () => {
  await Quiz.deleteMany({ host })
})

afterAll(async () => {
  mongoose.connection.close()
})

describe('Quiz Routes:', () => {
  test('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/jatest')

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('pass!')

    done()
  })
  test('Create a quiz', async done => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mock }))

    const res = await request.post('/api/quiz').send({
      host,
      players: [{ name: host }]
    })

    const quiz = await Quiz.findOne({ host })

    //Database
    expect(quiz?.code).toBeTruthy()
    expect(quiz?.host).toEqual(host)
    expect(quiz?.players.length).toEqual(1)
    expect(quiz?.players[0].name).toEqual(host)
    expect(quiz?.game.length).toEqual(3)

    expect(res.body.code).toBeTruthy()
    expect(res.body.host).toEqual(host)
    expect(res.body.players.length).toEqual(1)
    expect(res.body.players[0].name).toEqual(host)
    expect(res.body.game.length).toEqual(3)

    done()
  })
})
