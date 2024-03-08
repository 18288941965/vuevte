/**
 * 页面布局左侧菜单顶部吸附处理.
 * @param event 事件参数
 */
export const handleMenuScroll = (event: Event) => {
    event.stopPropagation()
    const mainElement: HTMLElement | null = document.querySelector('#admin-theme-main')
    if (mainElement) {
        const styles = getComputedStyle(mainElement)
        let data = styles.getPropertyValue('--header-banner-height')
        let top = 0
        if (data) {
            top =  parseInt(data.replace('px', '')) - window.scrollY
            top = top > 0 ? top : 0
        }
        mainElement.style.setProperty('--sticky-pane-height', `calc(100vh - ${top}px)`)
    }
}