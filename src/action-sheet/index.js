Component({
    externalClasses: ['air-class', 'air-class-mask', 'air-class-header'],
    options: {
        multipleSlots: true
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        actions: {
            type: Array,
            value: []
        }
    },
    methods: {
        handleClickMask() {
            if(!this.data.maskClosable) return;
            this.handleClickCancel();
        },
        handleClickCancel() {
            this.triggerEvent('cancel');
        },
        handleClickItem(e) {
            const dataset = e.currentTarget.dataset || {};
            const {index} = dataset;
            this.triggerEvent('click', {index});
        }
    }
});
