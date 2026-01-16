<template>
  <div class="pcHeader">
    <div class="containerA">
      <div class="left">
        <img
          class="logo"
          @click="smooth('yumo')"
          src="../assets/image/un/logo.png"
          alt=""
        />
        <div
          class="p"
          :class="store.getters.i18nLocal == 'US' ? 'modifyP' : ''"
          @click="smooth('about')"
        >
          {{ t("pcHeader.word_T1") }}
        </div>
        <div
          class="p"
          :class="store.getters.i18nLocal == 'US' ? 'modifyP' : ''"
          @click="smooth('core')"
        >
          {{ t("pcHeader.word_T2") }}
        </div>
        <div
          class="p"
          :class="store.getters.i18nLocal == 'US' ? 'modifyP' : ''"
          @click="smooth('momo')"
        >
          {{ t("pcHeader.word_T3") }}
        </div>
        <div
          class="p"
          :class="store.getters.i18nLocal == 'US' ? 'modifyP' : ''"
          @click="smooth('ecosystem')"
        >
          {{ t("pcHeader.word_T4") }}
        </div>
        <div
          class="p"
          :class="store.getters.i18nLocal == 'US' ? 'modifyP' : ''"
          @click="smooth('tokenomics')"
        >
          {{ t("pcHeader.word_T5") }}
        </div>
        <div
          class="p"
          :class="store.getters.i18nLocal == 'US' ? 'modifyP' : ''"
          @click="smooth('roadmap')"
        >
          {{ t("pcHeader.word_T6") }}
        </div>
      </div>
      <div class="right">
        <div class="yumo" @click="goTo">{{ t("slide.word_T8") }}</div>
        <div class="language">
          <el-select
            v-model="value"
            :suffix-icon="CaretBottom"
            @change="changeLanguage"
            :popper-append-to-body="false"
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
        <div class="line"></div>
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
    <div class="containerB">
      <img class="logo" src="../assets/image/un/logo.png" alt="" />
      <img
        class="menu"
        @click="showA = true"
        src="../assets/image/header/menu.png"
        alt=""
      />
    </div>

    <van-overlay :show="showA">
      <div class="content">
        <div class="title" @click="smooth('yumo')">
          <img class="logo" src="../assets/image/un/logo.png" alt="" />
        </div>
        <div class="close" @click="showA = false">
          <img src="../assets/image/un/close.png" alt="" />
        </div>
        <div class="p" @click="smooth('about')">
          {{ t("pcHeader.word_T1") }}
        </div>
        <div class="p" @click="smooth('core')">
          {{ t("pcHeader.word_T2") }}
        </div>
        <div class="p" @click="smooth('momo')">
          {{ t("pcHeader.word_T3") }}
        </div>
        <div class="p" @click="smooth('ecosystem')">
          {{ t("pcHeader.word_T4") }}
        </div>
        <div class="p" @click="smooth('tokenomics')">
          {{ t("pcHeader.word_T5") }}
        </div>
        <div class="p" @click="smooth('roadmap')">
          {{ t("pcHeader.word_T6") }}
        </div>
        <div class="connectWallet">
          <el-button @click="goTo">{{ t("slide.word_T8") }}</el-button>
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
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { eventBus } from "@/utils/eventBus";
import { CaretBottom } from "@element-plus/icons-vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const { t } = useI18n();
const store = useStore();
const router = useRouter();
const { locale: i18nLocale } = useI18n();

const showA = ref(false);
const screenWidth = ref(window.innerWidth);
const screenHeight = ref(window.innerHeight);

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("language_YUMO");
  if (savedLanguage) {
    return savedLanguage;
  }
  return store.getters.i18nLocal || "US";
};

const value = ref(getInitialLanguage());

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

const currentLanguage = computed({
  get: () => store.getters.i18nLocal,
  set: (value) => store.commit("setI18nLocal", value),
});

const changeLanguage = (locale) => {
  i18nLocale.value = locale;
  currentLanguage.value = locale;
  localStorage.setItem("language_YUMO", locale);
};

const goTo = () => {
  router.push("/home");
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  screenHeight.value = window.innerHeight;
  if (screenWidth.value) {
    showA.value = false;
  }
};

const smooth = (sectionId) => {
  eventBus.emit("scroll-to-section", sectionId);
  if (showA.value) {
    showA.value = false;
  }
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("language_YUMO");
  if (savedLanguage && savedLanguage !== value.value) {
    changeLanguage(savedLanguage);
  }
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
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
.pcHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fffefc;
  border-bottom: 2px solid #000000;
  z-index: 999 !important;
  .containerA {
    max-width: 1520px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .logo {
        cursor: pointer;
        width: 133px;
        height: auto;
        margin-right: 60px;
      }
      .p {
        cursor: pointer;
        color: #000;
        font-size: 16px;
        margin-right: 50px;
        font-weight: 700;
        font-family: "jtFont";
      }
      .p:last-child {
        margin-right: 0;
      }
      .modifyP {
        margin-right: 30px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .yumo {
        cursor: pointer;
        width: 150px;
        height: 50px;
        background: #ffd026;
        border-radius: 15px;
        border: 2px solid #000000;
        box-shadow: 3px 3px 0px 0px #000000;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #1d160d;
        font-weight: 700;
        font-family: "jtFont";
      }
      .language {
        .el-select {
          width: 155px;
          height: 50px;
          .el-select__wrapper {
            gap: 0;
            padding: 0;
            height: 50px;
            min-height: auto;
            line-height: normal;
            border-radius: 15px;
            background-color: #fffefc;
            border: 2px solid #000000;
            box-shadow: 3px 3px 0px 0px #000000;
            .el-select__prefix {
              margin-left: 15px;
              margin-right: 10px;
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
                  margin-top: 2px;
                  font-size: 16px;
                  font-weight: 700;
                  font-family: "jtFont";
                }
              }
            }
            .el-select__suffix {
              margin-right: 10px;
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
      .line {
        height: 23px;
        margin: 0 20px;
        border: 2px solid #000000;
      }
      .icon {
        cursor: pointer;
        width: 50px;
        height: 50px;
      }
      .icons {
        width: 50px;
        height: 50px;
        box-shadow: 3px 3px 0px 0px #ffd026;
        border-radius: 15px;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > img {
          width: 26px;
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
          width: 32px;
          height: auto;
        }
      }
    }
  }
  .containerB {
    display: none;
  }
  .van-overlay {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 20px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
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
      top: 20px;
      right: 20px;
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
              top: 82%;
              width: auto;
              color: #000;
              height: 50px;
              > span {
                font-size: 16px;
                font-weight: 700;
                font-family: "jtFont";
              }
            }
          }
          .el-select__suffix {
            margin-left: 16px;
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

@media (max-width: 750px) {
  .pcHeader {
    top: 20px;
    border: none;
    background: transparent;
    min-width: 320px;
    .containerA {
      display: none;
    }
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
      .menu {
        width: 38px;
        height: 38px;
        cursor: pointer;
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
        top: 20px;
        right: 20px;
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
                top: 82%;
                width: auto;
                color: #000;
                height: 50px;
                > span {
                  font-size: 16px;
                  font-weight: 700;
                  font-family: "jtFont";
                }
              }
            }
            .el-select__suffix {
              margin-left: 16px;
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
</style>