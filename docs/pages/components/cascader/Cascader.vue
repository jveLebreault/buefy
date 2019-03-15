<template>
    <div>
        <Example :component="SimpleCascader" :code="SimpleCascaderCode"/>
    </div>
</template>

<script>
import SimpleCascader from './examples/ExCascader';
import SimpleCascaderCode from '!!raw-loader!./examples/ExCascader';

export default {
    data() {
        return {
            SimpleCascader,
            SimpleCascaderCode
        }
    }
}
</script>