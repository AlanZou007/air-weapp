Component({
    externalClasses: ['air-class'],
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: 'center'
        },
        showMask: {
            type: Boolean,
            value: false
        },
        closeOnClickMask: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        handleMaskClick() {
            if (!this.data.closeOnClickMask) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
