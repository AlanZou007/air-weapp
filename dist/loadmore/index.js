Component({
    externalClasses: ['air-class'],
    properties: {
        // loading | nodata
        type: {
            type: String,
            value: 'loading'
        },
        color: {
            type: String
        },
        text: {
            type: String,
            value: '没有更多的数据了'
        }
    }
});