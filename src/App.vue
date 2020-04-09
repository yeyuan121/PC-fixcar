<template>
  <div id="app">
    <Tab 
    v-if="$route.path != '/login'"
    />
    <Swipe 
    v-if="$route.path != '/login'"
    />
    <Forms 
    v-if="$route.path != '/login'"
    />
    <router-view/>
    <Message 
    v-if="$route.path != '/login'"
    />
    <Footer 
    v-if="$route.path != '/login'"
    />
  </div>
</template>
<script>
import Tab from './views/layout/component/Tabbar'
import Swipe from './views/layout/component/Swipe'
import Footer from './views/layout/component/Footer.vue'
import Message from './views/layout/component/Message'
import Forms from './views/layout/component/Form'

export default {
  components:{Tab,Swipe,Footer,Message,Forms,}
}
</script>
<style lang="scss">
#app {
 
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
