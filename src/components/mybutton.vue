<template lang="html">
    <div>

        <button class="mybutton" @click="add()">Love it! {{ count }}</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        add () {
            this.count += 1;
        }
    }
}
</script>
     
        


<style scoped lang="scss">
 .mybutton {
    background: transparent;
    border: 1px #050505;
    background: #eea394;
    border-radius: 10px;
    font-size: small;
    padding: 1px 1px;
    width: 60px;
    align-items: center;
  }
</style>
