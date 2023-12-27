import {ref} from 'vue'

export default function () {
    type Show = undefined | boolean
    const panelShow = ref(false)
    const self = ref(false)

    const setPanelShow = (show: Show, evt?: MouseEvent) => {
        show === undefined ? panelShow.value = !panelShow.value : panelShow.value = show
        if (evt) {
            self.value = true
        }
    }

    return {
        panelShow,
        setPanelShow
    }
}