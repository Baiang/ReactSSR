import supertest from 'supertest';
import httpStatus from 'http-status';
import app from '../../index';

describe('## Mock', () => {
  const request = supertest(app.listen());

  describe('# GET /api/get-welcome', () => {
    it('should always return welcome string', async () => {
      const res = await request
        .get('/api/get-welcome')
        .expect(httpStatus.OK);

      const { success, code, data } = res.body;
      expect(success).toBe(true);
      expect(code).toBe(httpStatus.OK);
      expect(data).toBe('Hello, OLAF!');
    });
  });
});
