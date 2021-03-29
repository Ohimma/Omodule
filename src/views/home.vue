<template>
    <div class="home">
        <div class="title" v-for="(item,index) in metas" :key="index">
            <h2>{{ item.name }}</h2>

            <div class="modules">
                <navpage  v-for="(itemChild,indexChild) in item.child" :key="indexChild" :meta="itemChild" >
                </navpage>
            </div>
        </div>
    </div>
</template>
<script>
import navpage from "@/components/navpage/nav1.vue"
export default {
    components: {
        navpage
    },
    data() {
       return {
           metas: [
               {
                name: "模块",
                child: [
                    {title: "登录页", herf: "#login", describe: "记录平时写的一些登录页面"},
                    {title: "导航页", herf: "#nav", describe: "记录平时写的一些导航页面"},
                    {title: "布局页", herf: "#layout", describe: "记录平时写的一些布局页面"},
                    {title: "错误页", herf: "#error", describe: "记录平时写的一些错误页面"},
                ]},
                {
                name: "系统",
                child: [
                    {title: "odemo", herf: "http://odemo.ohimma.cn", describe: "vue/gin 实现的简单权限管理文档"},
                ]},
                {
                name: "文档",
                child: [
                    {title: "运维", herf: "https://blog.51cto.com/tengxiansheng", describe: "第一份运维文档"},
                    {title: "SRE", herf: "http://sre.ohimma.cn", describe: "我的运维文档"},
                    {title: "Web", herf: "http://web.ohimma.cn", describe: "我的前端文档"},
                    {title: "Golang", herf: "http://go.ohimma.cn", describe: "我的后端文档"},
                ]},
            ]
       }
    },
   
}
</script>

<style scoped>
.home {
    height: 100%;
    background-color: #fdfdfd;
    margin: 10px;
    box-shadow: 0 0 20px 5px #cccccc;
   
}

.title > h2 {
    box-sizing: border-box;
    border-bottom: 1px solid #cccccc;
    margin: 0;
    padding: 10px 20px;
}
.modules {
    display: flex;
    justify-content:flex-start;
}



</style>