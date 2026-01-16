<template>
  <PCHeader v-if="$route.path == '/' || $route.path == '/slide'"></PCHeader>
  <MobileHeader v-else></MobileHeader>
  <ElMain>
    <router-view></router-view>
    <Footer v-if="$route.path == '/' || $route.path == '/slide'"></Footer>

    <MobileFooter
      v-if="
        $route.path != '/' &&
        $route.path != '/slide' &&
        $route.path != '/games-mode'
      "
      class="mobileIf"
    ></MobileFooter>
    <MobileFooter
      v-if="
        $route.path != '/' &&
        $route.path != '/slide' &&
        $route.path != '/games-mode'
      "
      class="mobilElse"
    ></MobileFooter>
  </ElMain>
</template>

<script setup>
import PCHeader from "./components/pcHeader.vue";
import MobileHeader from "./components/mobileHeader.vue";
import Footer from "./components/footer.vue";
import MobileFooter from "./components/mobileFooter.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { ElMain } from "element-plus";
import { isMobile } from "@/utils/device.js";

const store = useStore();
const { locale: i18nLocale } = useI18n();

const isMobileView = ref(false);

const currentLanguage = computed({
  get: () => store.getters.i18nLocal,
  set: (value) => store.commit("setI18nLocal", value),
});

const checkDeviceType = () => {
  const isPhone = isMobile();
  isMobileView.value = isPhone;

  if (isPhone) {
    document.body.classList.add("mobile");
    document.body.classList.remove("pc");
  } else {
    document.body.classList.add("pc");
    document.body.classList.remove("mobile");
  }
};

const localeMap = {
  en: "US",
  cn: "CN",
};

const initLanguage = () => {
  try {
    const storedLang = localStorage.getItem("language_YUMO");

    if (storedLang) {
      const locale = localeMap[storedLang] || storedLang;
      applyLanguage(locale);
    } else {
      const defaultLocale = i18nLocale.value || "en";
      applyLanguage(defaultLocale);
    }
  } catch (error) {
    console.error("语言初始化失败:", error);
    applyLanguage("en"); 
  }
};

const applyLanguage = (locale) => {
  i18nLocale.value = locale;
  currentLanguage.value = locale;
  localStorage.setItem("language_YUMO", locale);
};

let resizeTimeout = null;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(checkDeviceType, 100);
};

onMounted(() => {
  checkDeviceType();
  initLanguage();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
});
</script>

<style lang="scss">
@import "@/assets/css/global.css";
@import "@/assets/font/fonts.css";

#app {
  height: auto;
  overflow: auto;
  .el-main {
    padding: 0;
    height: auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: #fffbf0;
    position: relative;
  }
}

.mobileIf {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
}

.mobilElse {
  display: none;
}

@media (max-width: 750px) {
  @media (min-aspect-ratio: 13/20) {
    .mobileIf {
      display: none;
    }
    .mobilElse {
      display: block;
    }
  }
}

html::-webkit-scrollbar {
  width: 0px;
}

html::-webkit-scrollbar-track {
  background: #fff;
}

html::-webkit-scrollbar-thumb {
  background: #fde101;
  border-radius: 10px;
}

body.mobile ::-webkit-scrollbar {
  width: 0;
  height: 0;
}

body.pc ::-webkit-scrollbar {
  width: 0;
  height: 0px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #0e191f;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #fff;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #fff;
}

.el-button.is-disabled {
  background: #999999 !important;
  span {
    color: #ffffff !important;
  }
}

.el-popper {
  border: none !important;
  border-radius: 0px !important;
  background: transparent !important;
  border: 0px solid transparent !important;
  box-shadow: none !important;
  .el-select-dropdown {
    background: #fffefc;
    box-shadow: 3px 3px 0px 0px #000000;
    border-radius: 15px;
    border: 2px solid #000000;
    .el-scrollbar {
      padding: 0 15px;
      .el-select-dropdown__wrap {
        max-height: 100% !important;
        .el-select-dropdown__list {
          padding: 0;
          .el-select-dropdown__item {
            color: #000;
            font-size: 16px;
            font-family: "jtFont";
            height: 42.5px;
            line-height: normal;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            > span {
              font-weight: 700;
            }
          }
          .el-select-dropdown__item:first-child {
            border-bottom: 0;
          }
          .el-select-dropdown__item:nth-child(2) {
            border-top: 2px solid #000;
          }
          .nft {
            border-top: 2px solid #000;
          }
          .el-select-dropdown__item.is-hovering {
            background-color: transparent;
          }
        }
      }
    }
    .el-select-dropdown__empty {
      padding: 20px 0;
      line-height: normal;
      > span {
        font-weight: bold;
        color: #000;
        font-size: 16px;
        font-family: "jtFont";
      }
    }
  }
  .el-popper__arrow {
    display: none !important;
  }
}

.van-toast {
  min-width: 240px !important;
  height: auto !important;
  line-height: normal !important;
  font-size: 28px !important;
  border-radius: 20px !important;
  font-weight: 7000 !important;
  font-family: "jtFont" !important;
  padding: 15px 10px !important;
}

.el-popover {
  padding: 10px 10px !important;
  line-height: normal !important;
  width: 240px !important;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffbf0 !important;
  border: 3px solid #000 !important;
  border-radius: 10px !important;
  .el-popover__title {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #000 !important;
    font-family: "jtFont" !important;
    margin-bottom: 0 !important;
  }
}

.el-input input[type="number"]::-webkit-outer-spin-button,
.el-input input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.el-input input[type="number"] {
  -moz-appearance: textfield;
}

@media (max-width: 750px) {
  .el-popper {
    border: none !important;
    border-radius: 0px !important;
    background: transparent !important;
    border: 0px solid transparent !important;
    box-shadow: none !important;
    .el-select-dropdown {
      background: #fffefc;
      box-shadow: 3px 3px 0px 0px #000000;
      border-radius: 15px;
      border: 2px solid #000000;
      .el-scrollbar {
        padding: 0 15px;
        .el-select-dropdown__wrap {
          max-height: 100% !important;
          .el-select-dropdown__list {
            padding: 0;
            .el-select-dropdown__item {
              color: #000;
              font-size: 14px;
              font-family: "jtFont";
              height: 42.5px;
              line-height: normal;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              > span {
                font-weight: 700;
              }
            }
            .el-select-dropdown__item:first-child {
              border-bottom: 0;
            }
            .el-select-dropdown__item:nth-child(2) {
              border-top: 1.5px solid #000;
            }
            .nft {
              border-top: 1.5px solid #000;
            }
            .el-select-dropdown__item.is-hovering {
              background-color: transparent;
            }
          }
        }
      }
      .el-select-dropdown__empty {
        padding: 10px 0;
        line-height: normal;
        > span {
          font-weight: bold;
          color: #000;
          font-size: 14px;
          font-family: "jtFont";
        }
      }
    }
    .el-popper__arrow {
      display: none !important;
    }
  }
  .van-toast {
    width: 280px !important;
    height: auto !important;
    line-height: normal !important;
    font-size: 16px !important;
    border-radius: 15px !important;
    padding: 15px 10px !important;
  }
  .el-popover {
    padding: 10px 5px !important;
    line-height: normal !important;
    width: 190px !important;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffbf0 !important;
    border: 2px solid #000 !important;
    border-radius: 10px !important;
    .el-popover__title {
      font-size: 14px !important;
      font-weight: 700 !important;
      color: #000 !important;
      font-family: "jtFont" !important;
      margin-bottom: 0 !important;
    }
  }
}
</style>