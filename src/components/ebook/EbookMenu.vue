<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{ 'hide-box-shadow': !menuVisible || settingVisible >= 0 }" v-show="menuVisible">
        <div class="icon-wrapper">
          <span class="icon-menu" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-popup></ebook-setting-font-popup>
    <ebook-setting-theme></ebook-setting-theme>
    <ebook-setting-progress></ebook-setting-progress>
    <ebook-slide></ebook-slide>
  </div>
</template>

<script>
import EbookSettingFont from "./EbookSettingFont.vue"
import EbookSettingFontPopup from "./EbookSettingFontPopup.vue"
import EbookSettingTheme from "./EbookSettingTheme"
import EbookSettingProgress from "./EbookSettingProgress.vue"
import EbookSlide from "./EbookSlide.vue"
import { ebookMixin } from '../../utils/mixin.js'


export default {
  mixins: [ebookMixin],
  components: {
    EbookSettingFont,
    EbookSettingFontPopup,
    EbookSettingTheme,
    EbookSettingProgress,
    EbookSlide,
  },
  methods: {
    showSetting(key) {
      this.setSettingVisible(key)
    }
  },
}
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
@import "../../assets/styles/global.scss";

.menu-bar {
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    width: 100%;
    height: px2rem(48);
    font-size: px2rem(20);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);

    &.hide-box-shadow {
      box-shadow: none;
    }

    .icon-wrapper {
      flex: 1;
      @include center;

      .icon-progress {
        font-size: px2rem(24);
      }

      .icon-bright {
        font-size: px2rem(22);
      }
    }
  }
}
</style>