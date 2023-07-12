import {ChannelData} from './interface/publicInterface';
import {reactive} from 'vue';

const BChannel = new BroadcastChannel('vue-vite-typescript-element')

export default function () {

    BChannel.onmessage = (ev) => {
        const data = ev.data as ChannelData
        if (data && data.code >= 0 && data.msg) {
            // TODO 收到消息后处理
        }
    }

    const activeChannel = reactive<ChannelData>({
        code: -1,
        msg: ''
    })

    const resetChannel = () => {
        Object.assign(activeChannel, {
            code: -1,
            msg: ''
        })
    }

    const postMessage = (data: ChannelData) => {
        BChannel.postMessage(data)
    }

    return {
        postMessage,
        activeChannel,
        resetChannel
    }
}