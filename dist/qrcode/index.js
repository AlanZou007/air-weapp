const {
    createQrCodeImg
} = require('./qr/index');

Component({ 
    externalClasses: ['air-class'],
    properties: {
        value: {
            type: String,
            value: 'https://github.com/AlanZou007/air-weapp',
            observer(newVal) {
                this.draw(newVal);
            },
        },
        size: {
            type: Number,
            value: 300
        },
        preView: {
            type: Boolean,
            value: false
        }
    },
    data: {
        loading: true,
        qrcodeImage: null
    },
    attached() {
        this.draw(this.data.value);
    },
    methods: {
        draw(value) {
            this.setData({
                loading: true
            });
            try {
                const codeImg = createQrCodeImg(value, {
                    size: this.data.size
                });
                this.setData({
                    qrcodeImage: codeImg,
                    loading: false
                });
            } catch(ex) {
                this.triggerEvent('fail', ex);
            }

        },
        preViewImage() {
            if(!this.data.preView) {
                return;
            }

            wx.previewImage({
                urls: [this.data.qrcodeImage]
            });
        }
    }
});
