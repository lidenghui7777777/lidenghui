<template>
<div class="box">
    <div class="con">
        <h2>登陆页</h2>
        <div class="wrap1"> <input type="text" placeholder="请输入用户名"></div>
        <div class="wrap2"><input type="text" placeholder="请输入密码"></div>
        <div class="wrap3">
            <button>登陆</button>
        </div>
     
    </div>
  
</div>
</template>
<script>
export default {
components:{
},
data(){
return{
}
},
methods:{
},
}
</script>
<style>
.box{
    width: 100vw;
    height: 100vh;
    background:linear-gradient(to right,#563443,#303D60);

}
.box .con{
    width: 300px;
    height: 300px;
    /* border: 1px solid #000; */
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    text-align: center;


}
.wrap1,.wrap2{
margin-top: 70px;
}
.wrap1>input,.wrap2>input{
    width: 300px;
  height: 30px;
}
.btn{
   margin-top: 30px;
 

}
.wrap3 button{
    margin-top: 70px;
  width: 300px;
height: 40px;
background-color:aqua;
outline: none;
border: none;
}

    



</style>    