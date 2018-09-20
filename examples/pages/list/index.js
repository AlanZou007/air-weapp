Page({
    data: {
        switch1 : true
    },
    onChange({detail}){
        this.setData({
            'switch1' : detail.checked
        })
    }
})