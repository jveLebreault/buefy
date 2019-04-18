<template>
    <div class="cascader" :class="{'is-hoverable': hoverable, 'is-active': isActive}">
        <div class="cascader-trigger" @click="toggleActive">
            <slot name="trigger">
                <button class="button">
                    <span>Select</span>
                    <b-icon icon="menu-down"/>
                </button>
            </slot>
        </div>
        <transition name="fade">
            <div class="cascader-menu">
                <div class="cascader-content">
                    <b-cascader-menu :items="menu" node="1"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CascaderMenu from './CascaderMenu'

export default {
    name: 'BCascader',

    components: {
        [CascaderMenu.name]: CascaderMenu
    },

    props: {
        menu: {
            type: [Array, Object],
            required: true
        },

        hoverable: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: false,
            selectedItem: null
        }
    },

    methods: {
        toggleActive() {
            if (!this.hoverable) this.isActive = !this.isActive
        },

        itemSelected(item) {
            console.log('ITEM SELECTED', item)
        },

        getSelectionHandlers(item) {
            if (this.hoverable) {
                return {
                    mouseover: this.selectItem.bind(this, item)
                }
            } else {
                return {
                    click: this.selectItem.bind(this, item)
                }
            }
        }
    }
}
</script>
