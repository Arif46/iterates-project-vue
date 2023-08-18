<template>
    <div>
         <!-- Page Title -->
         <section class="page-title p_relative centred">
            <div class="bg-layer p_absolute l_0 parallax_none parallax-bg" data-parallax='{"y": 100}'
                style="background-image: url(assets/images/service/software\ dev.png);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1 class="d_block fs_60 lh_70 fw_bold mb_10">{{ $t('globalTrans.software_development') }}</h1>
                </div>
            </div>
        </section>
        <!-- End Page Title -->


        <!-- service-details -->
        <section class="service-details service-details-1 p_relative sec-pad">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div class="service-details-content">
                            <div data-animation-box class="content-one p_relative d_block mb_55">
                                <figure data-animation-text
                                    class="overlay-anim-black-bg image p_relative d_block b_radius_10 mb_60"
                                    data-animation="overlay-animation"><img src="assets/images/service/1.png" alt="">
                                </figure>
                                <div class="text">
                                    <h2 class="d_block fs_40 fw_sbold lh_50 mb_25">{{ $t('globalTrans.software_development') }}
                                    </h2><br />
                                    <p class="font_family_poppins mb_25">{{ $t('globalTrans.details_text') }}
                                    </p>

                                    <p class="font_family_poppins mb_25">{{ $t('globalTrans.details_software_text') }}
                                    </p>
                                    <p class="font_family_poppins mb_25">{{ $t('globalTrans.details_software_text_one') }}

                                    </p>

                                </div>
                            </div>
                            <div class="content-two p_relative d_block mb_55">
                                <h3 class="d_block fs_30 lh_40 fw_sbold mb_25">{{ $t('globalTrans.you_need') }}</h3>
                                <p class="font_family_poppins mb_25">{{ $t('globalTrans.details_software_text_two') }}

                                </p>
                                <ul class="list clearfix">
                                    <li
                                        class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                        {{ $t('globalTrans.scalabe_software') }} </li>
                                    <li
                                        class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                        {{ $t('globalTrans.robust_relation') }}</li>

                                    <li
                                        class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                        {{ $t('globalTrans.least_technology') }} </li>

                                    <li
                                        class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                        {{ $t('globalTrans.integration_support') }} </li>
                                </ul>
                            </div>
                            <div data-animation-box class="two-column p_relative d_block mb_60">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure data-animation-text
                                            class="overlay-anim-black-bg image p_relative d_block b_radius_10"
                                            data-animation="overlay-animation"><img
                                                src="assets/images/service/software dev 1.png" alt=""></figure>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure data-animation-text
                                            class="overlay-anim-black-bg image p_relative d_block b_radius_10"
                                            data-animation="overlay-animation"><img
                                                src="assets/images/service/software dev 2.png" alt=""></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div class="service-sidebar p_relative d_block ml_30">
                            <div class="category-widget p_relative d_block mb_60">
                                <ul class="category-list clearfix">
                                    <li class="p_relative d_block mb_10">
                                        <a href="#" class="p_relative d_block fs_16 fw_sbold font_family_inter current"><i
                                            class="icon-11"></i>{{ $t('globalTrans.software_development') }}</a>   
                                    </li>
                                    <li class="p_relative d_block mb_10"><a href="#"
                                            class="p_relative d_block fs_16 fw_sbold font_family_inter"><i
                                                class="icon-12"></i>{{ $t('globalTrans.automation') }}</a></li>
                                    <li class="p_relative d_block mb_10"><a href="#"
                                            class="p_relative d_block fs_16 fw_sbold font_family_inter"><i
                                                class="icon-13"></i>{{ $t('globalTrans.artificial') }}</a></li>
                                    <li class="p_relative d_block mb_10"><a href="#"
                                            class="p_relative d_block fs_16 fw_sbold font_family_inter"><i
                                                class="icon-119"></i>{{ $t('globalTrans.application') }}</a></li>
                                </ul>
                            </div>
                            <div
                                class="consulting-widget sidebar-widget p_relative d_block pt_40 pr_30 pb_45 pl_30 b_radius_5 mb_60">

                                <div class="widget-title p_relative d_block mb_25">
                                    <h3 class="d_block fs_24 lh_30 fw_sbold">{{ $t('globalTrans.get_free_code') }}</h3>
                                </div>
                                <div class="form-inner">
                                    <form action="https://formspree.io/f/mnqypkna" method="post" class="default-form">
                                        <div class="form-group">
                                            <input type="text" name="name" placeholder="Your name" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Your email address" required>
                                        </div>
                                        <div class="form-group">
                                            <textarea name="message" v-model="message"></textarea>
                                        </div>
                                        <div class="form-group message-btn">
                                            <button type="submit" class="theme-btn theme-btn-eight">{{ $t('globalTrans.send_message') }} <i
                                                    class="icon-4"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                class="contact-widget sidebar-widget p_relative d_block pt_40 pr_30 pb_40 pl_30 b_radius_5">
                                <div class="widget-title p_relative d_block mb_20">
                                    <h3 class="d_block fs_24 lh_30 fw_sbold">{{ $t('globalTrans.contact_us') }}</h3>
                                </div>
                                <ul class="info-list clearfix">
                                    <li class="p_relative d_block fs_15 font_family_inter color_black pl_30 mb_10"><i
                                            class="icon-2"></i> {{ $t('globalTrans.call') }}: <a href="tel:123045615523"
                                            class="d_iblock color_black">{{ $t('globalTrans.code') }}</a></li>
                                    <li class="p_relative d_block fs_15 font_family_inter color_black pl_30 mb_10 "><i
                                            class="icon-137"></i> {{ $t('globaTrans.address_one') }} : <a class="color_black"
                                            href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9" target="_blank">{{ $t('globalTrans.softwareAddress') }}</a></li>
                                    <li class="p_relative d_block fs_15 font_family_inter color_black pl_30"><i
                                            class="icon-3"></i> {{ $t('globalTrans.Email') }}: <a href="mailto:contact@iterates.be"
                                            class="d_iblock color_black">{{ $t('globalTrans.email') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service-details -->
    </div>
</template>
<script>
export default {
    name: 'serviceDetails-1'
}
</script>
<style>
</style>