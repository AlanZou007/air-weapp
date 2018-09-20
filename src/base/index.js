function getCtx(selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length -1];

    const componentCtx = ctx.selectComponent(selector);

    if(!componentCtx) {
        console.error('没有找到对应的组件');
    }

    return componentCtx;
}

function Message(options) {
    const { selector = '#message' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    $Message: Message
};