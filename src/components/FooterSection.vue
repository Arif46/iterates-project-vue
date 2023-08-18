<template>
    <div>
        <footer class="footer-three p_relative">
            <div class="auto-container">
                <div class="footer-widget-section">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget about-widget">
                                <div class="footer-logo p_relative d_block mb_35">
                                    <a href="#" aria-label="Home">
                                        <!-- <img
                                            class="image-iterates" loading="lazy" data-src="/assets/images/iterates.png"
                                            alt="IT services and consulting in Brussels"> -->
                                        <img class="image-iterates" loading="lazy" :src="FooterImage" alt="iterates logo" aria-label="iterates">
                                    </a>
                                </div>
                                <div class="text">
                                    <p>{{ $t('globalTrans.footer_text') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget ml_80">
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget">
                                <div class="widget-title">
                                    <h4>iterates</h4>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <!-- <li><a href="about.html" >About Us</a></li> -->
                                        <li> <router-link to="/about">{{ $t('globalTrans.about_us') }}</router-link></li>
                                        <!-- <li><a href="service.html"
                                                >Our Services</a></li> -->
                                        <li><router-link to="/service">{{ $t('globalTrans.our_services') }}</router-link></li>      
                                        <li><router-link to="/contact">{{ $t('globalTrans.contact') }}</router-link></li>       
                                        <!-- <li><a href="contact.html">Contact Us</a></li> -->
                                        <li><a href="https://www.iterates.be/blog/" target="_blank">{{ $t('globalTrans.blog') }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget contact-widget">
                                <div class="widget-title">
                                    <h4>Contacts</h4>
                                </div>
                                <div class="widget-content">
                                    <ul class="info-list clearfix">
                                        <li><a href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9" target="_blank">{{ $t('globalTrans.footer_part') }}</a></li>
                                        <li><a href="mailto:contact@iterates.be">{{ $t('globalTrans.email') }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="bottom-inner clearfix">
                        <div class="copyright pull-left">
                            <p><a href="#">{{ $t('globalTrans.iterates') }}</a> &copy; {{ $t('globalTrans.year') }}</p>
                        </div>
                        <ul class="footer-nav clearfix pull-right">
                            <li><a href="https://presskite.com/presskit/iterates/" target="_blank">{{ $t('globalTrans.press_kit') }}</a></li>
                            <li><a href="https://www.iterates.be/privacy-policy/" target="_blank">{{ $t('globalTrans.privacy_policy') }}</a></li>
                            <li><a href="https://meet.jit.si/iterates-online-meeting" target="_blank">{{ $t('globalTrans.online_meeting') }}</a>
                            </li>
                            <li><a href="https://www.instagram.com/sskprod.be/?hl=fr" target="_blank">{{ $t('globalTrans.footer') }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'FooterSection',
        data () {
            return {
                FooterImage: '/assets/images/iterates.png/'
            }
        }
    }
</script>
<style>
</style>