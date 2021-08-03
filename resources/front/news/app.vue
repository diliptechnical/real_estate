<template>
    <div id="app" class="light-dark">
        <div id="page" class="page">
            <router-view/>
        </div>
    </div>
</template>
<script>
import Header from './components/Header'
//require('./css/jquery-ui.min.css')
//require('./css/style.css')
require('./css/main.css')
export default {
    components: {
        Header
    }
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a{font-family: 'Nunito', sans-serif;}

.news-margin{margin: 20px 0;}
.menu-position-left .menu-block{
    overflow: auto!important;
}
.index-isotope {
    padding-top: 0px!important;
}
</style>>