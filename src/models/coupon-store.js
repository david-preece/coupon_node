class CouponStore
{
    constructor(couponArray) {
        if (!Array.isArray(couponArray)) {
            throw new Error('couponArray mus be an array');
        }

        this.couponArray = couponArray;
    }

    getAll() {
        return this.couponArray;
    }

    getCoupon() {
        return this.couponArray.length ? this.couponArray.shift() : null;
    }
}

export default CouponStore;
