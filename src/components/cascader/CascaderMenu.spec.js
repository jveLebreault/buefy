import { shallowMount } from '@vue/test-utils'
import CascaderMenu from '@components/cascader/CascaderMenu'

describe('BCascaderMenu', () => {
    it('is called', () => {
        const wrapper = shallowMount(CascaderMenu)
        expect(wrapper.name()).toBe('BCascaderMenu')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
