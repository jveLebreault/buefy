<template>
    <section>
        <b-cascader :menu="menu"/>

        <b-cascader :menu="menu" hoverable/>
    </section>
</template>

<script>
const menu = [
    'action1', 
    'action2', 
    {
        label: 'action3 - dfsd fgvd gfdg fdgfr',
        thing: ['action4', 'action5']
    }]

export default {
    data() {
        return {
            menu
        }
    }
}
</script>

