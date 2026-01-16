<template>
  <div class="homeCharacterModify">
    <div class="container_home">
      <img
        class="return"
        @click="goTo('/home-Character')"
        src="../../assets/image/un/return.png"
        alt=""
      />
      <div class="h1 mt">{{ t("homeCharacterModify.word_T1") }}</div>
      <div class="h1 mb">{{ t("homeCharacterModify.word_T2") }}</div>
      <div class="home_frame" v-if="id == 1">
        <div class="frameBG">
          <div v-if="background == 0" class="background"></div>
          <img
            v-else
            class="background"
            :src="peopleBackground(background)"
            alt=""
          />
          <div class="frame_people">
            <img
              class="people"
              src="../../assets/image/home/iconAww.png"
              alt=""
            />
            <img class="emo" :src="peopleEmoji(emoji)" alt="" />
          </div>
        </div>
        <van-tabs
          v-model:active="activeA"
          :swipe-threshold="2"
          @click-tab="changeEmoji"
        >
          <van-tab v-for="(item, index) in 7" :key="index" :name="index + 1">
            <template #title>
              <div class="emojis">
                <img :src="showEmoji(item)" alt="" />
              </div>
            </template>
          </van-tab>
        </van-tabs>
        <div class="frame_button">
          <el-button @click="overlayOpen">{{
            t("homeCharacterModify.word_T3")
          }}</el-button>
        </div>
      </div>
      <div class="home_frame" v-if="id == 2">
        <div class="frameBG">
          <div v-if="background == 0" class="background"></div>
          <img
            v-else
            class="background"
            :src="peopleBackground(background)"
            alt=""
          />
          <div class="frame_people">
            <img
              class="people"
              src="../../assets/image/home/iconAww.png"
              alt=""
            />
            <img class="emo" :src="peopleEmoji(emoji)" alt="" />
          </div>
        </div>
        <van-tabs
          v-model:active="activeB"
          :swipe-threshold="4"
          @click-tab="changeBackground"
        >
          <van-tab v-for="(item, index) in 10" :key="index" :name="index + 1">
            <template #title
              ><div class="emojis">
                <img :src="showBackground(item)" alt="" />
              </div>
            </template>
          </van-tab>
        </van-tabs>
        <div class="frame_button">
          <el-button @click="overlayOpen">{{
            t("homeCharacterModify.word_T4")
          }}</el-button>
        </div>
      </div>
      <div class="home_frame" v-if="id == 3">
        <div class="frameBG">
          <div v-if="background == 0" class="background"></div>
          <img
            v-else
            class="background"
            :src="peopleBackground(background)"
            alt=""
          />
          <div class="frame_people">
            <img
              class="people"
              src="../../assets/image/home/iconAww.png"
              alt=""
            />
            <img class="emo" :src="peopleEmoji(emoji)" alt="" />
            <img class="access" :src="peopleAccessories(accessories)" alt="" />
          </div>
        </div>
        <van-tabs
          v-model:active="activeC"
          :swipe-threshold="4"
          @click-tab="changeAccessories"
        >
          <van-tab
            v-for="(item, index) in 6"
            :key="index"
            :name="index + 1"
            class="abdsadsadasdsad"
          >
            <template #title
              ><div
                class="accessories"
                :class="item == 3 || item == 6 ? 'modifyA' : ''"
              >
                <img :src="showAccessories(item)" alt="" />
              </div>
            </template>
          </van-tab>
        </van-tabs>
        <div class="frame_button">
          <el-button :loading="loading" @click="overlayOpen">{{
            t("homeCharacterModify.word_T5")
          }}</el-button>
        </div>
      </div>
    </div>

    <homeModify
      v-if="homeModifyShow"
      :initAccount="initAccount"
      :homeModifyShow="homeModifyShow"
      @overlayClose="overlayClose"
    ></homeModify>
  </div>
</template>

<script setup>
import { showToast } from "vant";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import { inviteRecord } from "../../api/get";
import { appearanceUpdate } from "../../api/post";
import { useRoute, useRouter } from "vue-router";
import homeModify from "../../components/overLay/homeModify.vue";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const id = ref(0);
const activeA = ref(0);
const activeB = ref(0);
const activeC = ref(0);
const emoji = ref(0);
const background = ref(0);
const accessories = ref(0);
const initAccount = ref({});
const loading = ref(false);
const homeModifyShow = ref(false);

const image_Emoji = import.meta.glob("../../assets/image/people/emojis/*.png", {
  eager: true,
});

const image_Background = import.meta.glob(
  "../../assets/image/people/background/*.png",
  {
    eager: true,
  }
);

const image_accessories = import.meta.glob(
  "../../assets/image/people/accessories/*.png",
  {
    eager: true,
  }
);

const peopleEmoji = (value) => {
  const imagePath = `../../assets/image/people/emojis/${value}A.png`;
  const imageModule = image_Emoji[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const showEmoji = (value) => {
  const imagePath = `../../assets/image/people/emojis/${value}.png`;
  const imageModule = image_Emoji[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const peopleBackground = (value) => {
  const imagePath = `../../assets/image/people/background/${value}.png`;
  const imageModule = image_Background[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const showBackground = (value) => {
  const imagePath = `../../assets/image/people/background/${value}.png`;
  const imageModule = image_Background[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const peopleAccessories = (value) => {
  const imagePath = `../../assets/image/people/accessories/${value}A.png`;
  const imageModule = image_accessories[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const showAccessories = (value) => {
  const imagePath = `../../assets/image/people/accessories/${value}.png`;
  const imageModule = image_accessories[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const changeEmoji = (value) => {
  let emo = Number(value.name);
  emoji.value = emo;
  peopleEmoji(emo);
};

const changeBackground = (value) => {
  let back = Number(value.name);
  background.value = back;
  peopleBackground(back);
};

const changeAccessories = (value) => {
  let access = Number(value.name);
  accessories.value = access;
  peopleBackground(access);
};

const goTo = (value) => {
  router.push(value);
};

const overlayOpen = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    if (id.value == 1) {
      if (Number(activeA.value) == Number(initAccount.value.emojis)) {
        showToast(t("homeCharacterModify.word_T6"));
        return;
      }
    }
    if (id.value == 2) {
      if (Number(activeB.value) == Number(initAccount.value.background)) {
        showToast(t("homeCharacterModify.word_T7"));
        return;
      }
    }
    if (id.value == 3) {
      if (Number(activeC.value) == Number(initAccount.value.accessories)) {
        showToast(t("homeCharacterModify.word_T8"));
        return;
      }
    }
    homeModifyShow.value = true;
  }
};

const overlayClose = (value) => {
  homeModifyShow.value = false;
  if (value) {
    setAppearanceUpdate();
  }
};

const getInviteRecord = () => {
  inviteRecord().then((res) => {
    if (res.data.code === 200) {
      initAccount.value = res.data.result;
      activeA.value = res.data.result.emojis;
      emoji.value = res.data.result.emojis;
      activeB.value = res.data.result.background;
      background.value = res.data.result.background;
      if (res.data.result.accessories != 0) {
        activeC.value = res.data.result.accessories;
        accessories.value = res.data.result.accessories;
      } else {
        activeC.value = 1;
        accessories.value = 1;
      }
    }
  });
};

const setAppearanceUpdate = () => {
  loading.value = true;
  const type =
    id.value == 1 ? "emojis" : id.value == 2 ? "background" : "accessories";
  const idx =
    id.value == 1
      ? activeA.value
      : id.value == 2
      ? activeB.value
      : activeC.value;
  let data = {
    appearanceType: type,
    appearanceIdx: idx,
  };
  appearanceUpdate(data).then((res) => {
    if (res.data.code === 200) {
      showToast(t("homeCharacterModify.word_T9"));
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
    }
    loading.value = false;
  });
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  if (route.query) {
    id.value = route.query.id;
  } else {
    id.value = 1;
  }
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    getInviteRecord();
  } else {
    emoji.value = 1;
    background.value = 1;
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeCharacterModify {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 20px 20px 100px;
    margin: auto;
    .container_home {
      .return {
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
      .h1 {
        font-weight: bold;
        font-size: 10px;
        color: #000000;
        font-family: "jtFont";
        text-align: center;
        &.mt {
          margin-top: 25px;
        }
        &.mb {
          margin-top: 5px;
          margin-bottom: 15px;
        }
      }
      .home_frame {
        width: 100%;
        min-height: 320px;
        background: #fff7dd;
        border-radius: 25px;
        border: 2px solid #000000;
        padding: 10px 10px 20px;
        text-align: center;
        overflow: hidden;
        .frameBG {
          max-width: 312px;
          height: 226px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          border: 2px dashed #000000;
          margin-bottom: 20px;
          .background {
            width: 100%;
            height: 226px;
          }
          .frame_people {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 10;
            width: 226px;
            height: auto;
            .people {
              width: 100%;
              height: 100%;
            }
            .emo {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: auto;
              z-index: 11;
              width: 226px;
              height: auto;
            }
            .access {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: auto;
              z-index: 12;
              width: 226px;
              height: auto;
            }
          }
        }
        .van-tabs {
          .van-tabs__wrap {
            height: 90px;
            .van-tabs__nav {
              background: transparent;
              padding-bottom: 0;
              .van-tab {
                width: 74px;
                height: 74px;
                line-height: normal;
                background: #fff7dd;
                border-radius: 15px;
                border: 2px solid #000000;
                margin-left: 4px;
                opacity: 0.6;
                overflow: hidden;
                .van-tab__text {
                  .emojis {
                    width: 64px;
                    height: auto;
                    > img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .accessories {
                    width: 64px;
                    height: auto;
                    > img {
                      width: 100%;
                      height: 100%;
                    }
                    &.modifyA {
                      width: 32px;
                    }
                  }
                }
              }
              .van-tab:first-child {
                margin-left: 0;
              }
              .van-tab--active {
                opacity: 1;
              }
            }
            .van-tabs__line {
              display: none;
            }
          }
        }
        .frame_button {
          margin-top: 15px;
          .el-button {
            border: 0;
            padding: 0;
            width: 100%;
            height: 50px;
            background: #ffd026;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 15px;
            border: 3px solid #000000;
            span {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
          }
        }
      }
    }
  }
}
</style>