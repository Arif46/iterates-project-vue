<template>
    <div>
        <section class="contact-four p_relative sec-pad centred bg-gray-100">
        <div class="auto-container">
            <div class="auto-container">
                <div class="sec-title-nine p_relative d_block centred mb_50">
                    <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5 pr-2 pl-2">{{ $t('globalTrans.get_touch') }}
    
                    </h6>
                    <h2 class="d_block fs_40 fw_bold font_family_poppins">{{ $t('globalTrans.help_you') }}
                    </h2>
                    <p class="pt-4">{{ $t('globalTrans.contact_text') }}</p>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn text-center">
                <div id="calendar">
                    <div class="btn-box clearfix">
                        <a  data-cal-link="rodolphebalay" style="cursor: pointer;" class="cursor-pointer theme-btn theme-btn-five mr_25 b_radius_10">{{ $t('globalTrans.lets_talk') }}<i class="icon-4"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- contact-four -->
    <section class="contact-four p_relative sec-pad">
        <div class="shape">
            <div class="shape-1 p_absolute l_0 t_0" style="background-image: url(assets/images/shape/shape-210.png);">
            </div>
            <div class="shape-2 p_absolute b_0 r_150" style="background-image: url(assets/images/shape/shape-211.png);">
            </div>
        </div>

        <div class="auto-container">
            <div class="sec-title-nine p_relative d_block centred mb_50">
                <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5 pr-2 pl-2">{{ $t('globalTrans.contact_us') }}

                </h6>
            </div>
        </div>
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-lg-4 col-md-12 col-sm-12 info-column">
                    <div class="info-inner">
                        <ul class="info-list clearfix">
                            <li class="p_relative d_block pl_100 pb_18 mb_25">
                                <div
                                    class="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                    <div class="icon p_relative d_iblock"><i class="icon-181"></i></div>
                                    <div class="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-134.png"
                                            alt=""></div>
                                </div>
                                <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.company') }} </h4>
                                <p class="font_family_poppins">{{ $t('globalTrans.company_text') }} <br>{{ $t('globalTrans.company_vat') }}</p>
                            </li>
                            <li class="p_relative d_block pl_100 pb_18 mb_25">
                                <div
                                    class="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                    <div class="icon p_relative d_iblock"><i class="icon-180"></i></div>
                                    <div class="icon-img hidden-icon"><img loading="lazy"
                                            data-src="assets/images/icons/hid-icon-133.png"
                                            alt="Iterates localisation in Brussels"></div>
                                </div>
                                <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.office_location') }}</h4>
                                <p class="font_family_poppins"><a href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9"
                                        target="_blank">{{ $t('globalTrans.contact_address') }}</a></p>
                            </li>

                            <li class="p_relative d_block pl_100 pb_18">
                                <div
                                    class="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                    <div class="icon p_relative d_iblock"><i class="icon-182"></i></div>
                                    <div class="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-135.png"
                                            alt=""></div>
                                </div>
                                <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.contact_us') }}</h4>
                                <p class="font_family_poppins"><a href="tel:+32 4 56 25 26 21">{{ $t('globalTrans.number') }}</a><br>
                                    <a href="mailto:contact@iterates.be" target="_blank"> {{ $t('globalTrans.email') }}
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 form-column">
                    <div class="form-inner p_relative ml_40 pt_45 pr_50 pb_50 pl_50 b_radius_10 b_shadow_6">
                        <div class="text p_relative d_block mb_35">
                            <h3 class="d_block fs_30 lh_40 fw_bold">{{ $t('globalTrans.send_message') }}</h3>
                        </div>
                        <form method="post"     	 id="contact-form">
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="username" placeholder="Your Name" required="">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Email Address" required="">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="phone" required="" placeholder="Phone Number">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="subject" required="" placeholder="Subject">
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Leave A Comment"></textarea>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button class="theme-btn theme-btn-eight" type="submit" name="submit-form">{{ $t('globalTrans.send_message') }} <i class="icon-4"></i></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-four end -->
    </div>
</template>
<script>
export default {
    name: 'ContactSection'
}
</script>
<style>
</style>