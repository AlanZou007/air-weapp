const defaultData = {
    visible: false,
    content: '',
    duration: 2,
    type: 'default', // default || success || warning || error
};

let timer = null;

Component({
    externalClasses: ['air-class'],
    data: {
        ...defaultData
    },
    methods: {
        handleShow(options) {
            const { type = 'default', duration = 2 } = options;
            this.setData({
                ...options,
                type,
                duration,
                visible: true
            });

            const d = this.data.duration * 1000;
            if (timer) clearTimeout(timer);
            if (d !== 0) {
                timer = setTimeout(() => {
                    this.handleHide();
                    timer = null;
                }, d);
            }
        },
        handleHide () {
            this.setData({
                ...defaultData
            });
        }
    }
});