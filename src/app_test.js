import request from 'supertest';
import app from './app';

const couponRegex = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
    brandRegex = /^[A-Za-z]*$/;

describe('App', () => {
    it('Should return status code 400 if Accept header is not JSON', () => {
        return request(app).get('/get-coupon').set('Accept', 'text/css').then(response => {
            expect(response.statusCode).toBe(400);
        });
    });

    it('Should respond to /get-coupon GET request', () => {
        return request(app).get('/get-coupon').then(response => {
            expect(response.statusCode).toBe(200);
        });
    });

    it('Should respond with a valid coupon', () => {
        return request(app).get('/get-coupon').then(response => {
            const jsonResponse = JSON.parse(response.text);

            expect(jsonResponse.data.coupon.match(couponRegex)).toBeTruthy();
        });
    });

    it('Should respond with a valid brand', () => {
        return request(app).get('/get-coupon').then(response => {
            const jsonResponse = JSON.parse(response.text);

            expect(jsonResponse.data.brand.match(brandRegex)).toBeTruthy();
        });
    });

    it('Should respond with a valid value', () => {
        return request(app).get('/get-coupon').then(response => {
            const jsonResponse = JSON.parse(response.text);

            expect(parseInt(jsonResponse.data.value)).toBeTruthy();
        });
    });
});