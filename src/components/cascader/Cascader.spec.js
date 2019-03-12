import { shallowMount } from '@vue/test-utils'
import BDropdown from '@components/cascader/Cascader'

describe('BCascader', () => {
    it('is called', () => {
        const wrapper = shallowMount(BDropdown)
        expect(wrapper.name()).toBe('BCascader')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
