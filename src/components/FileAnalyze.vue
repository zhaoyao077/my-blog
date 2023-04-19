<template>
    <div class="anlysis">
        <el-upload
             action="#"
            :file-list="fileList"
            :on-change="handleChange"
            :headers="headers"
            :auto-upload="false"
        >
            <el-button size="default" type="primary">上传</el-button>
        </el-upload>
        <el-button size="default" type="success" @click="upload">开始分析</el-button>
        <br>
        <br>
        <a class = "download" href="/api/download.json">查看结果</a>
        
    </div>
</template>
<script>
import axios from 'axios';

    export default{
        name:"File",
        data(){
            return {
                fileList:[],
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
        },
        methods:{
            handleChange(file,fileList){
                this.fileList=fileList;
                
            },
            upload() {
                const fd = new FormData()
                this.fileList.forEach(
                    (val,index)=>{
                        fd.append("filename",val.raw);
                    }
                );
                axios.post("/api/upload",fd).then(responce=>{
                    console.log(responce)
                });
                this.$message({
                    message:"上传成功！",
                    duration:1000
                })
                
            },
        }
    }
</script>
<style>
    .download{
			padding: 7px 12px;
			text-decoration: none;
            color: white;
            border: 2px solid #67C23A;
            border-radius: 5px;
			background-color: #67C23A;
		}
</style>