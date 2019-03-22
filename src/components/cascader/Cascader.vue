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
                    <slot>
                        <div
                            class="cascader-item"
                            v-for="item in menu"
                            :key="item.label || item">
                            {{ item.label || item }}
                        </div>
                    </slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'BCascader',
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
            isActive: false
        }
    },

    methods: {
        toggleActive() {
            if (!this.hoverable) this.isActive = !this.isActive
        }
    }
}
</script>
