// Note that the bitwise operators and shift operators operate on 32-bit ints
// so in that case, the max safe integer is 2^31-1, or 2147483647
const VERY_LARGE_NUMBER = 2147483647;

function addNum (num1, num2) {
    let sq1, sq2, m;
    try {
        sq1 = num1.toString().split('.')[1].length;
    }
    catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = num2.toString().split('.')[1].length;
    }
    catch (e) {
        sq2 = 0;
    }
    m = Math.pow(10, Math.max(sq1, sq2));
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}

Component({
    externalClasses: ['air-class'],
    properties: {
        max: {
            type: Number,
            value: VERY_LARGE_NUMBER
        },
        min: {
            type: Number,
            value: 1
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 1
        }
    },
    methods: {
        handleChangeStep(e, type) {
            const { dataset = {} } = e.currentTarget;
            const { disabled } = dataset;
            const { step } = this.data;
            let { value } = this.data;

            if (disabled) return null;

            if (type === 'minus') {
                value = addNum(value, -step);
            } else if (type === 'plus') {
                value = addNum(value, step);
            }

            if (value < this.data.min || value > this.data.max) return null;

            this.handleEmit(value);
        },
        handleMinus(e) {
            this.handleChangeStep(e, 'minus');
        },
        handlePlus(e) {
            this.handleChangeStep(e, 'plus');
        },
        handleBlur(e) {
            let {value} = e.detail;
            const { min, max } = this.data;
            value = +value;
            if(typeof value !== 'number') {
                console.error('value必须是数字！');
                return;
            }
            if(value > max) {
                value = max;
            }
            if(value < min) {
                value = min;
            }
            this.handleEmit(value);
        },
        handleEmit(value) {
            const data = {
                value,
            };
            this.triggerEvent('change', data);
        }
    }
});