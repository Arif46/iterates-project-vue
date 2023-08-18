<template>
    <div>
        <header class="main-header header-style-two header-style-12">
            <!-- header-lower -->
            <div class="header-lower">
                <div class="outer-container">
                    <div id="header-box" class="outer-box">
                        <div class="logo-box">
                            <div class="logo">
                                <!-- <a href="#"><img class="image-iterates" loading="lazy"
                                        data-src="@/assets/images/iterates.png" alt="development services in Brussels"
                                        aria-label="iterates">
                                    </a> -->
                                <a href="#">
                                    <img class="image-iterates" loading="lazy" :src="profileImage" alt="development services in Brussels" aria-label="iterates">
                                </a>
                            </div>
                        </div>
                        <div class="menu-area clearfix">
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav id="main-nav" class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix home-menu">
                                        <li class="current dropdown">
                                            <!-- <a href="index.html">home</a> -->
                                            <router-link to="/">{{ $t('globalTrans.home') }}</router-link>
                                        </li>

                                        <!-- <li class="dropdown"><a href="about.html">about us</a></li> -->
                                        <li class="dropdown">
                                            <router-link to="/about">{{ $t('globalTrans.about_us') }}</router-link>
                                        </li>
                                        <!-- <li><a href="service.html" class="toggle-services">our services</a></li> -->
                                        <li><router-link to="/service">{{ $t('globalTrans.our_services') }}</router-link></li>
                                        <!-- <li><a href="contact.html" class="toggle-contact">contact</a></li> -->
                                        <li><router-link to="/contact">{{ $t('globalTrans.contact') }}</router-link></li>
                                        <li class="dropdown"><a href="https://www.iterates.be/blog/"
                                                target="_blank">{{ $t('globalTrans.blog') }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <nav id="nav-right" class="main-menu nav-right">
                            <ul class="navigation nav-language" @click="changeLang()">
                                <li class="current-fr">
                                    <a href="#">FR</a>
                                </li>
                                <li class="current-en"> 
                                    <a href="#">EN</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="outer-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <div class="logo">
                                <a href="#">
                                    <!-- <img loading="lazy" data-src="/assets/images/iterates.png"
                                        class="image-iterates" alt="iterates logo" aria-label="iterates"> -->
                                    <img class="image-iterates" loading="lazy" :src="profileImage" alt="iterates logo" aria-label="iterates">
                                </a>
                            </div>
                        </div>
                        <div class="menu-area clearfix">
                            <nav id="sticky-nav" class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                        <div class="nav-right">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
  name: 'HeaderSection',
  data () {
    return {
        profileImage: '/assets/images/iterates.png/'
    }
  },
  created () {
    this.$i18n.locale = this.currentLocale
  },
  computed: {
    bnActive: function () {
      return this.currentLocale === 'bn' ? 'active' : ''
    },
    enActive: function () {
      return this.currentLocale === 'en' ? 'active' : ''
    }
  },
  methods: {
    changeLang () {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'en' : 'fn'
    }
  }
}
</script>
<style scoped>

</style>