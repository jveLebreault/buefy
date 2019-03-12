import Cascader from './Cascader'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Cascader)
    }
}

use(Plugin)

export default Plugin

export {
    Cascader
}
