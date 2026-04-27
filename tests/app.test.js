// import request from 'supertest'
// import app from '../index.js'

// describe('test the api',()=>{

//     test('test get method api',async() => {

//         const res=await request(app).get('/')
//         expect(res.statusCode).toBe(200)
//         expect(res.text).toBe(`
//             <h1>Welcome to the app</h1>
//             <h2>Name: Suraj Prakash</h2>
//             `)
//     })

//     test()
// })

import request from 'supertest'
import app from '../index.js'

describe('Test the API', () => {

    test('GET / should return HTML response', async () => {

        const res = await request(app).get('/')

        expect(res.statusCode).toBe(200)

        expect(res.text).toBe(
`<h1>Welcome to the app</h1>
<h2>Name: Suraj Prakash</h2>`
        )
    })

})