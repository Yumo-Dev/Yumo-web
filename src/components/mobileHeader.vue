<template>
  <div
    class="mobileHeader"
    v-if="
      $route.path == '/home' ||
      $route.path == '/games' ||
      $route.path == '/tasks' ||
      $route.path == '/plaza' ||
      $route.path == '/more' ||
      $route.path == '/home-community' ||
      $route.path == '/plaza-momo' ||
      $route.path == '/plaza-nft'
    "
  >
    <div class="containerB">
      <img class="logo" src="../assets/image/un/logo.png" alt="" />
      <div class="note">
        <template
          v-if="
            $route.path == '/plaza' ||
            $route.path == '/plaza-momo' ||
            $route.path == '/plaza-nft'
          "
        >
          <el-select
            v-model="globalValue"
            :suffix-icon="CaretBottom"
            @change="changeGlobal"
          >
            <el-option label="Global Space" value="Global Space" />
            <el-option label="Discover" value="Discover" />
            <el-option class="nft" label="NFT" value="NFT" />
          </el-select>
        </template>
        <img
          class="menu"
          @click="showB = true"
          src="../assets/image/header/menu.png"
          alt=""
        />
      </div>
    </div>

    <van-overlay :show="showB">
      <div class="content">
        <div class="title" @click="smooth('yumo')">
          <img class="logo" src="../assets/image/un/logo.png" alt="" />
        </div>
        <div class="close" @click="showB = false">
          <img src="../assets/image/un/close.png" alt="" />
        </div>
        <div class="p" @click="smooth('about')">
          {{ $t("pcHeader.word_T1") }}
        </div>
        <div class="p" @click="smooth('core')">
          {{ $t("pcHeader.word_T2") }}
        </div>
        <div class="p" @click="smooth('momo')">
          {{ $t("pcHeader.word_T3") }}
        </div>
        <div class="p" @click="smooth('ecosystem')">
          {{ $t("pcHeader.word_T4") }}
        </div>
        <div class="p" @click="smooth('tokenomics')">
          {{ $t("pcHeader.word_T5") }}
        </div>
        <div class="p" @click="smooth('roadmap')">
          {{ $t("pcHeader.word_T6") }}
        </div>
        <div class="connectWallet">
          <el-button :loading="loading_wallet">{{
            !store.getters.account
              ? t("contentWallet")
              : showAddress4(store.getters.account)
          }}</el-button>
        </div>
        <div class="language">
          <el-select
            v-model="value"
            :suffix-icon="CaretBottom"
            @change="changeLanguage"
          >
            <template #prefix>
              <img class="h1" src="../assets/image/header/H1.png" alt="" />
            </template>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="icon">
          <div class="icons" @click="goToLink(1)">
            <img src="../assets/image/un/icon1.png" alt="" />
          </div>
          <div class="icons tg" @click="goToLink(2)">
            <img src="../assets/image/un/icon2.png" alt="" />
          </div>
          <div class="icons gitBook" @click="goToLink(3)">
            <img src="../assets/image/un/icon3.png" alt="" />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { showToast } from "vant";
import { ethers } from "ethers";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { bscLogin } from "../api/post";
import { showAddress4 } from "../utils/index";
import { CaretBottom } from "@element-plus/icons-vue";
import { ref, computed, onMounted, watch, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();
const store = useStore();
const route = useRoute();
const router = useRouter();
const { locale: i18nLocale } = useI18n();

const showB = ref(false);

// 从 localStorage 或 store 获取初始语言
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("language_YUMO");
  if (savedLanguage) {
    return savedLanguage;
  }
  // 如果没有保存的语言，使用 store 中的值或默认值
  return store.getters.i18nLocal || "US";
};

const value = ref(getInitialLanguage());
const globalValue = ref("Global Space");

const options = [
  {
    value: "CN",
    label: "简体中文",
  },
  {
    value: "US",
    label: "English",
  },
];

const wAccount = ref("");
const loading_wallet = ref(false);

// 计算属性
const walletAccount = computed({
  get: () => store.getters.account,
  set: (value) => store.commit("setAccount", value),
});

const walletBalance = computed({
  get: () => store.getters.balance,
  set: (value) => store.commit("setBalance", value),
});

const currentLanguage = computed({
  get: () => store.getters.i18nLocal,
  set: (value) => store.commit("setI18nLocal", value),
});

watch(
  () => route.name,
  (newValue, oldValue) => {
    // console.log(newValue, "newValue");
    if (newValue) {
      globalValue.value = newValue;
    }
  }
);

const changeLanguage = (locale) => {
  i18nLocale.value = locale;
  currentLanguage.value = locale;
  localStorage.setItem("language_YUMO", locale);
};

// 点击滑动到相对应的位置
const smooth = (sectionId) => {
  localStorage.setItem("scrollTarget", sectionId);
  router.push("/slide");
  // 如果是移动端菜单，点击后关闭菜单
  if (showB.value) {
    showB.value = false;
  }
};

const changeGlobal = (value) => {
  if (value == "Global Space") {
    router.push("/plaza");
  }
  if (value == "Discover") {
    router.push("/plaza-momo");
  }
  if (value == "NFT") {
    router.push("/plaza-nft");
  }
};

const validateGlobal = () => {
  if (route.name == "Global Space") {
    globalValue.value = route.name;
  }
  if (route.name == "Discover") {
    globalValue.value = route.name;
  }
  if (route.name == "NFT") {
    globalValue.value = route.name;
  }
};

// 组件挂载时同步语言状态
onMounted(() => {
  validateGlobal();
  const savedLanguage = localStorage.getItem("language_YUMO");
  if (savedLanguage && savedLanguage !== value.value) {
    changeLanguage(savedLanguage);
  }
});


const goToLink = (value) => {
  if (value == 1) {
    window.open("https://x.com/yumo_ai", "_blank");
  }
  if (value == 2) {
    window.open("https://t.me/YUMOOfficialGroup", "_blank");
  }
  if (value == 3) {
    window.open("https://yumo-1.gitbook.io/yumo-gitbook/", "_blank");
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .mobileHeader {
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    z-index: 99;
    .containerB {
      height: 38px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 90px;
        height: auto;
        cursor: pointer;
      }
      .note {
        display: flex;
        align-items: center;
      }
      .el-select {
        height: 38px;
        .el-select__wrapper {
          gap: 0;
          padding: 0 10px;
          height: 38px;
          min-height: auto;
          line-height: normal;
          border-radius: 15px;
          background: #fff7dd;
          border: 2px solid #000000;
          .el-select__selection {
            height: 38px;
            width: auto;
            .el-select__input-wrapper.is-hidden {
              display: none;
            }
            .el-select__selected-item {
              position: unset;
              transform: none;
              width: auto;
              height: 38px;
              color: #000;
              display: flex;
              align-items: center;
              > span {
                font-weight: bold;
                font-size: 14px;
                font-weight: 700;
                font-family: "jtFont";
              }
            }
          }
          .el-select__suffix {
            margin-left: 10px;
            .el-icon {
              color: #000;
              width: 25px;
              height: 25px;
            }
            .el-icon svg {
              width: 25px;
              height: 25px;
            }
          }
        }
        .el-select__wrapper.is-focused {
          box-shadow: none;
        }
      }
      .menu {
        width: 38px;
        height: 38px;
        cursor: pointer;
        margin-left: 10px;
      }
    }
    .van-overlay {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      padding: 20px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      .content {
        max-width: 710px;
        margin: 0 auto;
        position: relative;
        .title {
          text-align: center;
          margin-bottom: 35px;
          .logo {
            width: 133px;
            height: auto;
            cursor: pointer;
          }
        }
        .close {
          cursor: pointer;
          width: 38px;
          height: 38px;
          background: #fffefc;
          box-shadow: 2px 2px 0px 0px #000000;
          border-radius: 10px;
          border: 2px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          right: 0;
          > img {
            width: 26px;
            height: 26px;
          }
        }
        .p {
          text-align: center;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          font-family: "jtFont";
          margin-bottom: 32px;
          cursor: pointer;
        }
        .connectWallet {
          margin-top: 65px;
          margin-bottom: 25px;
          text-align: center;
          .el-button {
            min-width: 182px;
            height: 50px;
            background: #ffd026;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 14px;
            border: 2px solid #000000;
            span {
              font-size: 16px;
              color: #000;
              font-weight: 700;
              font-family: "jtFont";
            }
          }
        }
        .language {
          position: relative;
          margin-bottom: 30px;
          text-align: center;
          .el-select {
            width: 182px;
            height: 50px;
            .el-select__wrapper {
              gap: 0;
              padding: 0;
              height: 50px;
              min-height: auto;
              line-height: normal;
              border-radius: 14px;
              background-color: #fffefc;
              border: 2px solid #000000;
              box-shadow: 3px 3px 0px 0px #000000;
              .el-select__prefix {
                margin-left: 21px;
                margin-right: 16px;
                .h1 {
                  width: 25px;
                  height: 25px;
                }
              }
              .el-select__selection {
                height: 50px;
                width: auto;
                .el-select__input-wrapper.is-hidden {
                  display: none;
                }
                .el-select__selected-item {
                  position: unset;
                  transform: none;
                  width: auto;
                  height: 50px;
                  color: #000;
                  display: flex;
                  align-items: center;
                  > span {
                    font-size: 16px;
                    font-weight: 700;
                    font-family: "jtFont";
                  }
                }
              }
              .el-select__suffix {
                margin-left: 14px;
                margin-right: 12px;
                .el-icon {
                  color: #000;
                  width: 25px;
                  height: 25px;
                }
                .el-icon svg {
                  width: 25px;
                  height: 25px;
                }
              }
            }
          }
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          > img {
            width: 50px;
            height: 50px;
            cursor: pointer;
          }
          .icons {
            width: 50px;
            height: 50px;
            background: #ffffff;
            box-shadow: 3px 3px 0px 0px #ffd026;
            border-radius: 15px;
            border: 2px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            > img {
              width: 28px;
              height: auto;
            }
          }
          .tg {
            margin: 0 15px;
            box-shadow: 3px 3px 0px 0px #4e9fff;
            > img {
              width: 22px;
              height: auto;
            }
          }
          .gitBook {
            box-shadow: 3px 3px 0px 0px #ff4d4d;
            > img {
              width: 30px;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>