const res = basket.filter((item, index) => {
    return index === basket.findIndex((obj) => {
        return JSON.stringify(item.id) === JSON.stringify(obj.id)
    })
})