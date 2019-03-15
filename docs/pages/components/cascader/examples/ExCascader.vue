<template>
    <section>
        <b-cascader :menu="menu"/>
    </section>
</template>

<script>
const menu = [
    'action1', 
    'action2', 
    {
        label: 'action3'
    }]

export default {
    data() {
        return {
            menu
        }
    }
}
</script>

