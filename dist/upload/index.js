Component({
    externalClasses: ['air-class'],

    properties: {
        // add | camera | custom
        type: {
            type: String,
            value: 'add'
        },
        // original 原图，compressed 压缩图, 默认二者都有
        sizeType: {
            type: Array,
            value: ['original', 'compressed']
        },
        // album 从相册选图，camera 使用相机，默认二者都有
        sourceType: {
            type: Array,
            value: ['album', 'camera']
        },
        count: {
            type: Number,
            value: 9
        },
        // 图标颜色
        color: {
            type: String,
            value: '#8c939d'
        },
    },
    methods: {
        handleUpload() {
            const {
                sizeType,
                count,
                sourceType
            } = this.data;

            const config = {
                count,
                sizeType,
                sourceType
            };
            wx.chooseImage({
                ...config,
                success: (res) => {
                    this.triggerEvent('success', res);
                },
                fail: (ex) => {
                    this.triggerEvent('fail', ex);
                }
            });
        },
        previewImage(payload) {
            let urls = [];
            if (typeof payload === 'string') {
                urls.push(payload);
            } else if (payload instanceof Array) {
                urls = payload;
            } else {
                console.warn('payload is not String or StringArray');
                return false;
            }

            wx.previewImag({
                urls,
            });
        }
    }
});
