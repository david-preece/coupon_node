import CouponFactory from './coupon-factory';
import Coupon from '../models/coupon-store';

const couponRegex = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

describe('CouponFactory', () => {
    it('Should return a CouponStore', () => {
        const couponStore = CouponFactory.create();

        expect(couponStore instanceof Coupon).toBeTruthy();
    });

    it('Should return an array of length 50 by default', () => {
        const coupons = CouponFactory.makeCoupons();

        expect(coupons).toHaveLength(50);
    });

    it('Should return an array of coupons of specified length', () => {
        const coupons = CouponFactory.makeCoupons(100);

        expect(coupons).toHaveLength(100);
    });

    it('Should return a valid coupon', () => {
        const coupon = CouponFactory.makeCoupon();

        expect(coupon.coupon.match(couponRegex)).toBeTruthy();
    });

    it('Should return an array of valid coupons', () => {
        const coupons = CouponFactory.makeCoupons(5);

        coupons.forEach(coupon => {
            expect(coupon.coupon.match(couponRegex)).toBeTruthy();
        })
    });
});
