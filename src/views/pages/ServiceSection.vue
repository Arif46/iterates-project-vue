<template>
    <div>
        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>

            <nav class="menu-box">
                <div class="nav-logo"><a href="index.html"><img src="assets/images/mobile-logo.png" alt="" title=""></a>
                </div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
            </nav>
        </div><!-- End Mobile Menu -->

        <!-- service-19 -->
        <section class="service-19 p_relative ">
            <div class="tabs-box">
                <div class=" p_relative d_block my_120">
                    <div class=" p_relative d_block mb_70">
                        <div class="auto-container max-width-1500">
                            <ul class="tab-btns tab-buttons clearfix">
                                <a href="#tab-1" onclick="activateTab(event, 'tab-1')">
                                    <li class="tab-btn active-btn">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-11"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.software_development') }}</h6>
                                    </li>
                                </a>

                                <a href="#tab-2" onclick="activateTab(event, 'tab-2')">
                                    <li class="tab-btn">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-12"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.automation') }}</h6>
                                    </li>
                                </a>

                                <a href="#tab-3" onclick="activateTab(event, 'tab-3')">
                                    <li class="tab-btn">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-13"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.artificial') }}</h6>
                                    </li>
                                </a>

                                <a href="#tab-4" onclick="activateTab(event, 'tab-4')">
                                    <li class="tab-btn">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-119"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.application') }}</h6>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div class="auto-container">
                        <div class="tabs-content">
                            <div class="tab active-tab" id="tab-1">
                                <div class="inner-box p_relative mb_150">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block mr_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{ $t('globalTrans.software_development') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins">{{ $t('globalTrans.software_development_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.scalabe_software') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.least_technology') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.secure_development') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.integration_support') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">
                                                            {{ $t('globalTrans.robust_relation') }}

                                                        </li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <!-- <a href="service-details-1.html"
                                                            class="theme-btn theme-btn-five">Read
                                                            More <i class="icon-4"></i></a> -->
                                                            <router-link to="/service-details-one"><button class="theme-btn theme-btn-five">{{ $t('globalTrans.read_more') }}<i class="icon-4"></i></button></router-link>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block ml_30">
                                                    <div class="shape">
                                                        <div class="shape-1 float-bob-x p_absolute w_95 h_95"
                                                            style="background-image: url(assets/images/shape/shape-193.png);">
                                                        </div>
                                                        <div class="shape-2 p_absolute b_20 float-bob-y"
                                                            style="background-image: url(assets/images/shape/shape-194.png);">
                                                        </div>
                                                        <div
                                                            class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="assets/images/service/s1.png" alt=""></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab " id="tab-2">

                                <div class="inner-box p_relative mb_150">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block mr_30">
                                                    <div class="shape">
                                                        <div class="shape-4 float-bob-x p_absolute w_95 h_95"
                                                            style="background-image: url(assets/images/shape/shape-193.png);">
                                                        </div>
                                                        <div class="shape-5 p_absolute b_20 float-bob-y"
                                                            style="background-image: url(assets/images/shape/shape-194.png);">
                                                        </div>
                                                        <div
                                                            class="shape-6 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="assets/images/service/s2.png" alt=""></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block ml_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{ $t('globalTrans.automation') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins">{{ $t('globalTrans.automation_process_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.connection_between') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.scalabe_solutions') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.reduce_solutions') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.time_cost') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">
                                                            {{ $t('globalTrans.real_time') }}

                                                        </li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <!-- <a href="service-details-2.html"
                                                            class="theme-btn theme-btn-five">Read
                                                            More <i class="icon-4"></i></a> -->
                                                            <router-link to="/service-details-two"><button class="theme-btn theme-btn-five">{{ $t('globalTrans.read_more') }}<i class="icon-4"></i></button></router-link> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab " id="tab-3">

                                <div class="inner-box p_relative mb_150">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block mr_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{ $t('globalTrans.artificial') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins">{{ $t('globalTrans.artification_service_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.customer') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.custom_service') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.reduces_respone_time') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.enhanced_customer') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">
                                                            {{ $t('globalTrans.analysis') }}</li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <!-- <a href="service-details-3.html"
                                                            class="theme-btn theme-btn-five">Read
                                                            More <i class="icon-4"></i></a> -->
                                                            <router-link to="/service-details-three"><button class="theme-btn theme-btn-five">{{ $t('globalTrans.read_more') }}<i class="icon-4"></i></button></router-link> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block ml_30">
                                                    <div class="shape">
                                                        <div class="float-bob-x shape-1 p_absolute w_95 h_95"
                                                            style="background-image: url(assets/images/shape/shape-193.png);">
                                                        </div>
                                                        <div class="shape-2 p_absolute b_20 float-bob-y"
                                                            style="background-image: url(assets/images/shape/shape-194.png);">
                                                        </div>
                                                        <div
                                                            class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="assets/images/service/s3.png" alt=""></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab " id="tab-4">

                                <div class="inner-box p_relative">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block mr_30">
                                                    <div class="shape">
                                                        <div class="float-bob-x shape-4 p_absolute w_95 h_95"
                                                            style="background-image: url(assets/images/shape/shape-193.png);">
                                                        </div>
                                                        <div class="shape-5 p_absolute b_20 float-bob-y"
                                                            style="background-image: url(assets/images/shape/shape-194.png);">
                                                        </div>
                                                        <div
                                                            class="shape-6 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="assets/images/service/s4.png" alt="">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block ml_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{ $t('globalTrans.application') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins">{{ $t('globalTrans.application_creation_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.cross_development') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.custom_modern_design') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.we_can_save_money') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.we_can_save_money') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">
                                                            {{ $t('globalTrans.scalable_applications') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">
                                                            {{ $t('globalTrans.notification') }}
                                                        </li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <!-- <a href="service-details-4.html"
                                                            class="theme-btn theme-btn-five">Read
                                                            More <i class="icon-4"></i></a> -->
                                                            <router-link to="/service-details-four"><button class="theme-btn theme-btn-five">{{ $t('globalTrans.read_more') }}<i class="icon-4"></i></button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>

        <!-- quote-one -->
        <section class="quote-one p_relative pb_150">
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_six p_relative">
                            <div class="bg-shape p_absolute b_radius_50 l_0"></div>
                            <div class="shape parallax-scene parallax-scene-4">
                                <div data-depth="0.30" class="shape-1 p_absolute w_150 h_150"
                                    style="background-image: url(assets/images/shape/shape-66.png);"></div>
                                <div data-depth="0.40" class="shape-2 p_absolute"
                                    style="background-image: url(assets/images/shape/shape-67.png);"></div>
                            </div>
                            <div
                                class="content-box p_relative d_block pt_40 pr_40 pb_40 pl_40 b_radius_10 b_shadow_7 ml_55 mr_85 z_1">
                                <div class="tabs-box">
                                    <div
                                        class="tab-btn-box p_relative d_block b_shadow_6 b_radius_10 mb_20 pt_16 pb_12">
                                        <ul class="tab-btns tab-buttons clearfix centred">
                                            <li class="tab-btn active-btn" data-tab="#sec-1">{{ $t('globalTrans.software') }}</li>
                                            <li class="tab-btn" data-tab="#sec-2">{{ $t('globalTrans.automat') }}</li>
                                            <li class="tab-btn" data-tab="#sec-3">{{ $t('globalTrans.ai') }}</li>
                                            <li class="tab-btn" data-tab="#sec-4">{{ $t('globalTrans.app') }}</li>
                                        </ul>
                                    </div>
                                    <div class="tabs-content quote-content">
                                        <div class="tab active-tab" id="sec-1">
                                            <div class="inner-box">
                                                <p class="font_family_poppins mb_20">{{ $t('globalTrans.as_soon') }}</p>
                                                <form action="https://formspree.io/f/mnqypkna" method="post" class="default-form">
                                                    <div class="form-group">
                                                        <input type="text" name="name" placeholder="Your Name"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" name="email" placeholder="Your Email"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" name="property"
                                                            placeholder="Describe your project needs" required="">
                                                    </div>
                                                    <div class="form-group message-btn">
                                                        <button type="submit" class="theme-btn theme-btn-five">{{ $t('globalTrans.start_saving') }}<i class="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab" id="sec-2">
                                            <div class="inner-box">
                                                <p class="font_family_poppins mb_20">{{ $t('globalTrans.as_soon') }}</p>
                                                <form action="https://formspree.io/f/mnqypkna" method="post" class="default-form">
                                                    <div class="form-group">
                                                        <input type="text" name="name" placeholder="Your Name"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" name="email" placeholder="Your Email"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" name="property"
                                                            placeholder="Describe your project needs" required="">
                                                    </div>
                                                    <div class="form-group message-btn">
                                                        <button type="submit" class="theme-btn theme-btn-five">{{ $t('globalTrans.start_saving') }}<i class="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab" id="sec-3">
                                            <div class="inner-box">
                                                <p class="font_family_poppins mb_20">{{ $t('globalTrans.start_saving') }}</p>
                                                <form action="https://formspree.io/f/mnqypkna" method="post" class="default-form">
                                                    <div class="form-group">
                                                        <input type="text" name="name" placeholder="Your Name"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" name="email" placeholder="Your Email"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" name="property"
                                                            placeholder="Describe your project needs" required="">
                                                    </div>
                                                    <div class="form-group message-btn">
                                                        <button type="submit" class="theme-btn theme-btn-five">{{ $t('globalTrans.start_saving') }}<i class="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab" id="sec-4">
                                            <div class="inner-box">
                                                <p class="font_family_poppins mb_20">{{ $t('globalTrans.start_saving') }}</p>
                                                <form action="https://formspree.io/f/mnqypkna" method="post" class="default-form">
                                                    <div class="form-group">
                                                        <input type="text" name="name" placeholder="Your Name"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" name="email" placeholder="Your Email"
                                                            required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" name="property"
                                                            placeholder="Describe your project needs" required="">
                                                    </div>
                                                    <div class="form-group message-btn">
                                                        <button type="submit" class="theme-btn theme-btn-five">{{ $t('globalTrans.start_saving') }}<i class="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_seven">
                            <div class="content-box">
                                <div class="sec-title-four p_relative d_block mb_25">
                                    <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5">{{ $t('globalTrans.need') }}</h6>
                                    <h2 class="d_block fs_40 fw_bold font_family_poppins">{{ $t('globalTrans.outsource') }}
                                    </h2>
                                </div>
                                <div class="text p_relative d_block mb_25">
                                    <p class="font_family_poppins">{{ $t('globalTrans.business') }}
                                    </p>
                                </div>
                                <ul class="list clearfix p_relative d_block">
                                    <li class="p_relative d_block fs_16 fw_sbold font_family_poppins mb_10 pl_30">
                                        {{ $t('globalTrans.client') }}</li>
                                    <li class="p_relative d_block fs_16 fw_sbold font_family_poppins pl_30">{{ $t('globalTrans.adapted') }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'ServiceSection'
}
</script>
<style>
</style>