const request = require('supertest')
const app = require('../../server')

describe('GEt Endpoints', () => {
  it('should get default message', async () => {
    const res = await request(app)
      .get('/')

    expect(res.statusCode).toEqual(200)
    
    expect(res.body).toHaveProperty('message')
    expect(res.body).toEqual({ "message": "Hello World!"})
  })
})
