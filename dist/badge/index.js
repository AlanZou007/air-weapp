Component({
    externalClasses: ['air-class'],
    properties: {
        dot: {
            type: Boolean,
            value: false
        },
        value: {
            type: Number,
            value: 0,
            observer: 'finalCount'
        },
        bgColor: {
            type: String,
            value: 'red'
        },
        color: {
            type: String,
            value: '#fff'
        },
        fontSize: {
            type: Number,
            value: 10
        },
        max: {
            type: Number,
            value: 99
        }
    },
    methods: {
        finalCount() {
            const {value, max} = this.data;

            this.setData({
                finalCount: value > max ? `${max}+` : value
            });

        }
    }
});
