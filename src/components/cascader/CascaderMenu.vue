<template>
    <div>
        <div v-for="item in items" :key="item.label || item">
            <div
                class="cascader-item"
                v-on="itemSelected(item)">
                <span>{{ item.label || item }}</span>
                <b-icon v-if="item.label" icon="chevron-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BCascaderMenu',

    props: {
        node: {
            type: [String, Number],
            required: true
        },

        items: {
            type: [Array, Object],
            required: true
        }
    },

    methods: {
        itemSelected(value) {
            this.$emit('item-selected', {
                node: this.node,
                value
            })
        }
    }

}
</script>
