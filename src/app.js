import express from 'express';
import CouponFactory from './factories/coupon-factory';

const app = express(),
    couponStore = CouponFactory.create();

app.get('/get-coupon', (request, response) => {
    if (!request.accepts('json')) {
        response.status(400).json({error: 'Must accept JSON.'});
    }

    const coupon = couponStore.getCoupon();

    if (!coupon) {
        response.status(500).json({error: 'No more coupons.'});
        return;
    }

    response.json({data: coupon});
});

export default app;