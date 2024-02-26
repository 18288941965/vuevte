export function ScrollContext(id: string, offset: number) {
    /**
     * 鼠标左右滚动模块
     * @param direction 滚动的方向
     */
    const scrollMenu = (direction: string) => {
        const container = document.querySelector(`#${id}`)
        if (container) {
            // 根据滚动方向更新滚动位置
            if (direction === 'right') {
                container.scrollLeft += offset // 每次滚动100像素
            } else {
                container.scrollLeft -= offset
            }
        }
    }

    function handleWheel(event: Event) {
        event.stopPropagation()
        if (event instanceof WheelEvent) {
            if (event.deltaY !== 0) {
                // 阻止纵向滚动
                event.preventDefault()
                // 检查滚动方向
                const scrollDirection = event.deltaY > 0 ? 'right' : 'left'
                scrollMenu(scrollDirection)
            }
        }
    }

    const removeListenerWheel = () => {
        const container = document.querySelector(`#${id}`)
        if (container) {
            container.removeEventListener('wheel', handleWheel)
        }
    }

    // 启动滚动监听事件
    const listenerWheel = () => {
        removeListenerWheel()
        const container = document.querySelector(`#${id}`)
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
        }
    }

    return {
        scrollMenu,
        removeListenerWheel,
        listenerWheel
    }
}