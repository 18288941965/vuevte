import {ref, onMounted, onUnmounted} from 'vue';

export default function () {
    type Show = undefined | boolean
    const panelShow = ref(false)

    const setPanelShow = (show: Show) => {
        show === undefined ? panelShow.value = !panelShow.value : panelShow.value = show
    }

    const windowClick = () => {
        setPanelShow(false)
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