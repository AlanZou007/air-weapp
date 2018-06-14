Component({
    externalClasses: ['air-class'],

    relations: {
        '../cell/index': {
            type: 'child',
            linked () {
                this._updateIsLastCell();
            },
            linkChanged () {
                this._updateIsLastCell();
            },
            unlinked () {
                this._updateIsLastCell();
            }
        }
    },

    methods: {
        _updateIsLastCell() {
            let cells = this.getRelationNodes('../cell/index');;
            const len = cells.length;

            if(len > 0) {
                let lastIndex = len - 1;
                cell.updateIsLastCell(index === lastIndex);
            }

        }
    }
})