<template>
    <div class="loginall">
        <div class="header">
             <el-carousel ref="carousel" :initial-index="0" :interval="4000" type="card" height="300px" @click="handleClick">
                <el-carousel-item> <login01 /> </el-carousel-item>
                <el-carousel-item> <login02 /> </el-carousel-item>
                <el-carousel-item> <login03 /> </el-carousel-item>
                <el-carousel-item> <login04 /> </el-carousel-item>
            </el-carousel>
        </div>
        
        <div class="content">
            <router-view />
        </div>
    </div>
    
</template>

<script>
import login01 from '@/components/login/login01.vue'
import login02 from '@/components/login/login02.vue'
import login03 from '@/components/login/login03.vue'
import login04 from '@/components/login/login04.vue'

export default {
    components: {
        login01, login02, login03, login04
    },
   
    methods: {
        handleClick(){
            const index = this.$refs.carousel.data.activeIndex + 1
            const url = "/login/login0" + index
            this.$router.push(url)
        },
    },
}
</script>

<style >
.loginall {
    height: 100%;
}

.loginall .content {
    height: 100%;
}


</style>