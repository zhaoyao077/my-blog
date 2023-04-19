<template>
    <div class = "analysis">
        <el-input class="content" type="textarea" autosize v-model="textToAnalyze" placeholder="请输入需要分析的文本"></el-input>
    </div>  
    <Horizon></Horizon>
    <div class="analyze-btn" @click="analyze" type="submit">Analyze</div>
    <div class="result">{{analyzeResult}}</div>
</template>
<script>
import Horizon from "@/components/Horizon.vue"
    export default{
        name:"String",
        components:{
            Horizon

        },
        data(){
            return {
                textToAnalyze:"",
                analyzeResult:""
            }
        },
        methods:{
            analyze(){
                var outputMode = sessionStorage.getItem("outputMode")
                var keyWordMode = sessionStorage.getItem("keyWordMode")
                var keyWord = sessionStorage.getItem("keyWord")
                var afterKey = sessionStorage.getItem("afterKey")
                var beforeKey = sessionStorage.getItem("beforeKey")
                // console.log(outputMode)
                // console.log(keyWordMode)
                // console.log(keyWord)
                // console.log(beforeKey)
                // console.log(afterKey)
                const formData = new FormData();
                // var contents=[];
                // contents = this.textToAnalyze.split("\n");
                sessionStorage.setItem("text",this.textToAnalyze)
                formData.append("outputMode",outputMode)
                if(sessionStorage.getItem("keyWordMode") != null ){
                    formData.append("keyWordMode",keyWordMode)
                    if(keyWordMode){
                        formData.append("keyWord",keyWord)
                        formData.append("beforeKey",beforeKey)
                        formData.append("afterKey",afterKey)
                    }
                }else{
                    formData.append("keyWordMode",false)
                    keyWordMode = false
                    formData.append("keyWord","")
                    keyWord = ""
                    formData.append("beforeKey","")
                    beforeKey = ""
                    formData.append("afterKey","")
                    afterKey = ""
                }
                // for(let key in contents){    
                //    formData.append(key,contents[key]);
                //    console.log(formData.get(key)) 
                // }
                this.axios({
                    method:"post",
                    url:"/api/analyze",
                    headers:{
                        "Content-Type":"application/json; charset=utf-8"
                    },
                    data:{
                        "outputMode":outputMode,
                        "textToAnalyze":this.textToAnalyze,
                        "keyWord":keyWord,
                        "keyWordMode":keyWordMode,
                        "beforeKey":beforeKey,
                        "afterKey" : afterKey
                    }
                }).then((response)=>{
                    console.log(response);
                    
                    let that = this
                    that.analyzeResult = response.data
                })
            
            },
        }
    }
</script>
<style scoped>
    
    .analyze-btn {
        background-color: #42b983;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        width: 5%;
        margin: 0 auto;
    }
    .result {
        margin-top: 20px;
        padding: 20px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 50%;
        margin:0 auto;
    }
    .analyze-btn:hover {
        background-color: #42b983;
    }
</style>