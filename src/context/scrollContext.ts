/**
 * 鼠标左右滚动模块
 * @param id 滚动容器的ID
 * @param offset 每次滚动的偏移量（像素）
 */
export function ScrollContext(id: string, offset: number) {
    const scrollMenu = (direction: string) => {
        const container = document.querySelector(`#${id}`)
        if (container) {
            if (direction === 'right') {
                container.scrollLeft += offset
            } else {
                container.scrollLeft -= offset
            }
        }
    }

    function handleWheel(event: Event) {
        event.stopPropagation()
        if (event instanceof WheelEvent) {
            if (event.deltaY !== 0) {
                event.preventDefault()
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