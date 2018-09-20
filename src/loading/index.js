Component({
    externalClasses: ['air-class'],
    properties: {
        // small || default || large
        size: {
            type: String,
            value: 'default'
        },
        fullscreen: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: 'circle'
        },
        color: {
            type: String,
            value: ''
        }
    }
});
