import CouponStore from './coupon-store';

describe('CouponStore', () => {
    it('Should take array as parameter', () => {
        const couponStore = new CouponStore([]);

        expect(couponStore instanceof CouponStore).toBeTruthy();
    });

    it('Should throw error when parameter is not array', () => {
        expect(() => {
            const couponStore = new CouponStore('ERROR');
        }).toThrow();
    });

    it('Should return correct array when getCouponArray is called', () => {
        const couponArray = [
                'test-1',
                'test-2',
                'test-3',
                'test-4',
            ],
            couponStore = new CouponStore(couponArray);

        expect(couponStore.getAll()).toBe(couponArray);
    });

    it('Should return array items in order', () => {
        const couponArray = [
                '0',
                '1',
                '2',
                '3',
                '4',
            ],
            couponStore = new CouponStore(couponArray);

        expect(couponStore.getCoupon()).toBe('0');
        expect(couponStore.getCoupon()).toBe('1');
        expect(couponStore.getCoupon()).toBe('2');
        expect(couponStore.getCoupon()).toBe('3');
        expect(couponStore.getCoupon()).toBe('4');
    });

    it('Should return null if no more items in array', () => {
        const couponStore = new CouponStore([]);

        expect(couponStore.getCoupon()).toBeNull();
    });
});
