<template>
  <div class="homeCharacter">
    <div class="container_home">
      <img
        class="return"
        @click="goTo('/home')"
        src="../../assets/image/un/return.png"
        alt=""
      />
      <div class="title">
        <div>{{ $t("homeCharacter.word_T1") }}</div>
        <el-button @click="goTo('/home-aiInsight')">{{
          $t("home.word_T11")
        }}</el-button>
      </div>
      <div class="home_frameA">
        <div class="frameA_bg">
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
      </div>
      <div class="home_frameB">
        <div class="p">{{ $t("homeCharacter.word_T2") }}</div>
        <template v-if="appearList.length != 0">
          <van-tabs v-model:active="active" :swipe-threshold="2">
            <van-tab
              v-for="(item, index) in appearList"
              :key="index"
              :name="index + 1"
            >
              <template #title>
                <div
                  @click="changeHistory(item)"
                  class="emojis"
                  :class="
                    item.accessories == 3 || item.accessories == 6
                      ? 'modifyA'
                      : ''
                  "
                >
                  <img :src="showHistory(item)" alt="" />
                </div>
                <div class="name">{{ item.createTime.slice(5, 16) }}</div>
              </template>
            </van-tab>
          </van-tabs>
        </template>
        <template v-else>
          <van-tabs v-model:active="active" :swipe-threshold="2">
            <van-tab v-for="(item, index) in 4" :key="index" :name="index + 1">
              <template #title>
                <div class="name">--</div>
              </template>
            </van-tab>
          </van-tabs>
        </template>
        <div class="p pl">{{ $t("homeCharacter.word_T3") }}</div>
      </div>
      <div class="home_frameC">
        <div class="p">{{ $t("homeCharacter.word_T4") }}</div>
        <div class="choose">
          <el-button
            @click="goTo('/home-Character-modify', 1)"
            :class="store.getters.i18nLocal == 'US' ? 'font8' : ''"
            >{{ $t("homeCharacter.word_T5") }}</el-button
          >
          <el-button
            @click="goTo('/home-Character-modify', 2)"
            :class="store.getters.i18nLocal == 'US' ? 'font8' : ''"
            >{{ $t("homeCharacter.word_T6") }}</el-button
          >
          <el-button
            @click="goTo('/home-Character-modify', 3)"
            :class="store.getters.i18nLocal == 'US' ? 'font8' : ''"
            >{{ $t("homeCharacter.word_T7") }}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { watchMomoSpace } from "../../api/post";
import { inviteRecord, appearanceLog } from "../../api/get";

const store = useStore();
const router = useRouter();

const active = ref(1);
const emoji = ref(0);
const background = ref(0);
const accessories = ref(0);
const appearList = ref([]);

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

const peopleBackground = (value) => {
  const imagePath = `../../assets/image/people/background/${value}.png`;
  const imageModule = image_Background[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const peopleAccessories = (value) => {
  const imagePath = `../../assets/image/people/accessories/${value}A.png`;
  const imageModule = image_accessories[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const showHistory = (value) => {
  if (value.emojis != 0) {
    const imagePath = `../../assets/image/people/emojis/${value.emojis}.png`;
    const imageModule = image_Emoji[imagePath];
    return imageModule ? imageModule.default || imageModule : "";
  }
  if (value.background != 0) {
    const imagePath = `../../assets/image/people/background/${value.background}.png`;
    const imageModule = image_Background[imagePath];
    return imageModule ? imageModule.default || imageModule : "";
  }
  if (value.accessories != 0) {
    const imagePath = `../../assets/image/people/accessories/${value.accessories}.png`;
    const imageModule = image_accessories[imagePath];
    return imageModule ? imageModule.default || imageModule : "";
  }
};

const changeHistory = (value) => {
  if (value.emojis != 0) {
    emoji.value = value.emojis;
    peopleEmoji(value.emojis);
  }
  if (value.background != 0) {
    background.value = value.background;
    peopleBackground(value.background);
  }
  if (value.accessories != 0) {
    accessories.value = value.accessories;
    peopleAccessories(value.accessories);
  }
};

const goTo = (value, item) => {
  if (!item) {
    router.push(value);
  } else {
    router.push({
      path: value, 
      query: { id: item },
    });
  }
};

const getInviteRecord = () => {
  inviteRecord().then((res) => {
    if (res.data.code === 200) {
      emoji.value = res.data.result.emojis;
      background.value = res.data.result.background;
      if (res.data.result.accessories != 0) {
        accessories.value = res.data.result.accessories;
      }
    }
  });
};

const getAppearanceLog = () => {
  appearanceLog().then((res) => {
    if (res.data.code === 200) {
      active.value = res.data.result.length;
      appearList.value = res.data.result;
    }
  });
};

const getWatchMomoSpace = () => {
  watchMomoSpace().then((res) => {
    if (res.data.code === 200) {
    }
  });
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    getInviteRecord();
    getAppearanceLog();
    getWatchMomoSpace();
  } else {
    emoji.value = 1;
    background.value = 1;
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeCharacter {
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
      .title {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        > div {
          width: 50%;
          font-weight: bold;
          font-size: 10px;
          color: #000000;
          font-family: "jtFont";
          margin-top: 5px;
        }
        .el-button {
          border: 0;
          width: 120px;
          height: 50px;
          background: #9d7cff;
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
      .home_frameA {
        width: 100%;
        min-height: 245px;
        background: #fff7dd;
        border-radius: 25px;
        border: 2px solid #000000;
        padding: 10px;
        position: relative;
        margin-bottom: 15px;
        overflow: hidden;
        .frameA_bg {
          max-width: 312px;
          height: 226px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          border: 2px dashed #000000;
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
      }
      .home_frameB {
        width: 100%;
        min-height: 120px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 10px 8px;
        text-align: center;
        .p {
          font-weight: bold;
          font-size: 10px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
        .pl {
          margin-top: 15px;
          margin-bottom: 0;
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
                line-height: bold;
                padding: 10px;
                background: #fff7dd;
                border-radius: 16px 16px 16px 16px;
                border: 2px solid #000000;
                margin-left: 5px;
                opacity: 0.6;
                .van-tab__text {
                  .emojis {
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
                  .name {
                    position: absolute;
                    top: 78px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    font-weight: bold;
                    font-size: 10px;
                    color: #000000;
                    font-family: "jtFont";
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
        .frameB_button {
          margin-top: 15px;
          padding: 0 7px;
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
      .home_frameC {
        margin-top: 20px;
        width: 100%;
        min-height: 80px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 10px 10px 20px;
        text-align: center;
        .p {
          font-weight: bold;
          font-size: 10px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
        .choose {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
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
          .font8 {
            span {
              font-size: 8px;
            }
          }
          .el-button + .el-button {
            margin-left: 0;
          }
          .li {
            height: 100px;
            background: #fff7dd;
            border-radius: 15px;
            border: 2px solid #000000;
            position: relative;
            cursor: pointer;
            .l {
              position: absolute;
              top: 50%;
              left: 10px;
              right: 10px;
              transform: translate(0, -50%);
              margin: auto;
              font-weight: bold;
              font-size: 10px;
              color: #000000;
              font-family: "jtFont";
            }
          }
        }
        .frameC_button {
          margin-top: 20px;
          padding: 0 5px;
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