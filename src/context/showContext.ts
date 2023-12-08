import {ref, onMounted, onUnmounted} from 'vue';

export default function () {
    type Show = undefined | boolean
    const panelShow = ref(false)
    const self = ref(false)

    const windowClick = () => {
        self.value ?  self.value = false : setPanelShow(false)
    }

    const setPanelShow = (show: Show, evt?: MouseEvent) => {
        show === undefined ? panelShow.value = !panelShow.value : panelShow.value = show
        if (evt) {
            self.value = true
        }
    }

    onMounted(() => {
        window.addEventListener('click', windowClick)
    })

    onUnmounted(() => {
        window.removeEventListener('click', windowClick)
    })

    return {
        panelShow,
        setPanelShow
    }
}