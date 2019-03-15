<template>
    <div class="cascader">
        klk wawawa
        <div class="cascader-menu">
            <div v-for="item in menu" :key="item.label || item">
                {{ item.label || item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BCascader',
    props: {
        menu: {
            type: [Array, Object],
            required: true
        }
    },

    data() {
        return {
            msg: 'component'
        }
    }
}
</script>
