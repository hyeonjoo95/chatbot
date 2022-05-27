const app = require('./app');	// 서버
const request = require('supertest');	// http 요청을 보낼 수 있는 라이브러리

it('GET /chatbot/skill/start 성공 시 Status Code는 200 을 반환한다.', async() => {
    // 명시한 api 경로를 통해 요청한 후 값을 받아온다.
    const response = await request(app).get('/chatbot/skill/start');
    // 응답한 값이 예상한 값과 맞는 지 비교한다.
     expect(response.statusCode).toBe(200);
 });

 it('GET /chatbot/card/pick/:card_id 성공 시 Status Code는 200 을 반환한다.', async() => {
    // 명시한 api 경로를 통해 요청한 후 값을 받아온다.
    const response = await request(app).get('/chatbot/card/pick/1');
    // 응답한 값이 예상한 값과 맞는 지 비교한다.
     expect(response.statusCode).toBe(200);
 });
