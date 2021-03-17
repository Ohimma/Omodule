<template>
    <div class="home">
        <div class="title" v-for="(item,index) in metas" :key="index">
            <h2>{{ item.name }}</h2>

            <div class="modules">
                <navpage  v-for="(itemChild,indexChild) in item.child" :key="indexChild" 
                        :meta="itemChild" >
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
                    {title: "登录页", herf: "#login", describe: "xxxxxxxxxx"},
                    {title: "布局页", herf: "#layout", describe: "ccccccccccc"},
                    {title: "错误页", herf: "#error", describe: "bbbb"},
                ]},
                {
                name: "系统",
                child: [
                    {title: "grafana", herf: "http://www.baidu.com", describe: "xxxxxxxxxx"},
                    {title: "promethues", herf: "http://www.google.com", describe: "ccccccccccc"},
                    {title: "禅道", herf: "http://www.google.com", describe: "bbbb"},
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