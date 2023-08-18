<template>
    <div>
        <div class="boxed_wrapper">
            <Header/>
            <router-view/>
             <Footer/>
        </div>
    </div>
</template>
<script>
import Header from '@/components/HeaderSection'
import Footer from '@/components/FooterSection'
export default {
    name: 'MainView',
    components: {
        Header,
        Footer
    }
}
</script>
<style scoped></style>