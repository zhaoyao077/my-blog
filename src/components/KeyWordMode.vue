<template>
    <div class="keywordmode">
    <el-input class="content" type="textarea" :rows="3"   v-model="keyWord" 
                placeholder="请输入关键词,给定一个关键词列表,以及关键词前距离和关键词后距离(默认都为4),在对输入文本的分析过程中,超出关键词前后距离的单词将被忽略"
                @change="changeKeyWord"></el-input>
                <br>
                <el-input v-model="beforeKey" placeholder="关键词前距离" @change="changeBeforeKeyWord"></el-input>
                <br>
                <el-input v-model="afterKey" placeholder="关键词后距离" @change="changeAfterKeyWord"></el-input>
                <br>
                </div>
</template>
<script>

    export default{
        name:'KeyWordMode',
        data(){
            return {
                keyWord:"",
                beforeKey:"",
                afterKey:""
            }
        },
        methods:{
            changeKeyWord:function(val){
                this.keyWord=val
                sessionStorage.setItem("keyWord",this.keyWord)
            },
            changeBeforeKeyWord:function(val){
                this.beforeKey = val
                sessionStorage.setItem("beforeKey",this.beforeKey)
            },
            changeAfterKeyWord:function(val){
                this.afterKey = val
                sessionStorage.setItem("afterKey",this.afterKey)
            },
        }
    }
</script>
<style>
</style>