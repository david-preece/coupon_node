import CouponStore from '../models/coupon-store';

const BRAND_NAMES = [
    'Tesco',
    'ASDA',
    'Morrisons',
    'JDSports',
    'Argos',
];

const randomSection = () => {
    return Math.random().toString(36).toUpperCase().substring(3, 7);
};

const randomBrand = () => {
    const index = Math.floor(Math.random() * BRAND_NAMES.length);
    return BRAND_NAMES[index];
};

const randomValue = () => {
    return Math.floor(Math.random() * 100);
}

class CouponFactory
{
    static create(numberOfCoupons = 50) {
        return new CouponStore(this.makeCoupons(numberOfCoupons));
    }

    static makeCoupons(length = 50) {
        let coupons = [];

        for(let i = 0; i < length; i++) {
            coupons.push(this.makeCoupon());
        }

        return coupons;
    }

    static makeCoupon(numberOfSections = 4) {
        let coupon = '';

        for (let i = 0; i < numberOfSections; i++) {
            coupon += randomSection() + '-';
        }

        return {
            brand: randomBrand(),
            value: randomValue(),
            coupon: coupon.substr(0, coupon.length - 1)
        };
    }
}

export default CouponFactory;
