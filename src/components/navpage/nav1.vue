<template>
    <div class="nav">
        <header class="header"> 
            <!-- <h4>{{ meta.title}} </h4> -->
            <span>{{ meta.describe }}</span>
        </header>
        <footer class="footer">
            <span><a :href="meta.herf">{{ meta.title}}</a></span>
        </footer>
    </div>    
</template>

<script>
export default {
    props: ["meta"],
}

</script>

<style scoped>
h4 {
    margin: 0;
    padding: 0;
}

a {
    list-style: none;
}

.nav {
    width: 180px;
    height: 120px;
    box-sizing: border-box;
    margin: 20px 20px;
    border-radius: 10px;
    box-shadow: 7px 7px 7px 1px #bbbbbb;
}

.nav:hover {
    transform:scale(1.2);
}
.nav:active {
    transform: translateY(2px);
    filter: grayscale(50%);
    box-shadow: none;
}
.nav:visited {
    filter: grayscale(30%);
}

.header {
    height: 70%;
    background-color: #e1edff;
}

.footer {
    height: 30%;
    background-color: #e6e6e6;
    /* text-align: center; */
    display: flex;
    align-items: center;
    padding: 0 10px;
}
</style>