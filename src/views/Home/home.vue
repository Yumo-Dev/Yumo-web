<template>
  <div class="home">
    <div class="home_container">
      <div class="container_user">
        <div class="user_frame" @click="goTo('/home-Character')">
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
        <div class="frame_name" @click="modifyNameShow = true">
          {{
            !store.getters.account
              ? "MOMO"
              : !initAccount.logicSuperior
              ? ""
              : initAccount.logicSuperior
          }}
          <img class="modify" src="../../assets/image/home/iconB.png" alt="" />
        </div>
      </div>
      <div class="container_level">
        <div class="level_title">
          <div>{{ $t("home.word_T1") }}</div>
          <div>
            {{ $t("home.word_T2") }}
            {{ !initAccount.nextActiveNeedXp ? "--" : initXp }}
            {{ $t("home.word_T3") }}
            {{ !initAccount.active ? "1" : initAccount.active + 1
            }}{{ $t("home.word_T4") }}
          </div>
        </div>
        <div class="level_content">
          <div class="level_l">
            {{ $t("home.word_T5") }}0{{
              !initAccount.active ? "0" : initAccount.active
            }}
          </div>
          <div class="level_line">
            <div class="line_active" :style="{ width: progress + '%' }">
              <div
                class="line_l"
                :style="{ width: progress + 1000 + '%' }"
              ></div>
            </div>
          </div>
          <div class="level_p">{{ progress }}%</div>
        </div>
      </div>
      <div class="container_press">
        <div class="press_top">
          <div
            class="top_balance"
            :class="store.getters.i18nLocal == 'US' ? 'modifyBalance' : ''"
          >
            <div class="top_left">
              <img src="../../assets/image/home/iconC.png" alt="" />
              {{ $t("home.word_T6") }}
            </div>
            <div class="top_right">
              {{ !userInfo_yumo.amount ? "0" : userInfo_yumo.amount }}
            </div>
          </div>
          <el-button
            :class="store.getters.i18nLocal == 'US' ? 'modifyButton' : ''"
            @click="goTo('/home-check')"
            >{{ $t("home.word_T7") }}</el-button
          >
        </div>
        <div class="press_center">
          <div class="center_days">
            <div class="toDay">
              <div>{{ $t("home.word_T8") }}</div>
              <div>
                {{
                  !initAccount.gametype1Times
                    ? "--"
                    : initAccount.gametype1Times
                }}/{{
                  !initAccount.gametype1Max ? "--" : initAccount.gametype1Max
                }}
              </div>
            </div>
            <div class="center_line"></div>
            <div class="toDay">
              <div>{{ $t("home.word_T9") }}</div>
              <div>
                {{
                  !initAccount.gametype2Times
                    ? "--"
                    : initAccount.gametype2Times
                }}/{{
                  !initAccount.gametype2Max ? "--" : initAccount.gametype2Max
                }}
              </div>
            </div>
          </div>
          <div class="center_my" @click="goTo('/tasks')">
            <div>{{ $t("home.word_T10") }}</div>
            <img src="../../assets/image/home/iconD.png" alt="" />
          </div>
        </div>
        <div class="press_footer">
          <div @click="goTo('/home-aiInsight')">{{ $t("home.word_T11") }}</div>
          <div @click="goTo('/home-community')">{{ $t("home.word_T12") }}</div>
        </div>
      </div>
    </div>

    <modifyName
      v-if="modifyNameShow"
      :initAccount="initAccount"
      :modifyNameShow="modifyNameShow"
      @overlayParameter="overlayParameter"
      @overlayClose="overlayClose"
    ></modifyName>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { showToast } from "vant";
import { useRouter } from "vue-router";
import { BigNumber } from "bignumber.js";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { pageclick } from "../../api/post";
import { formatDecimal } from "../../utils/index";
import { inviteRecord, userInfos } from "../../api/get";
import modifyName from "../../components/overLay/modifyName.vue";

const store = useStore();
const router = useRouter();

const initXp = ref(0);
const userInfo_yumo = ref({});
const userInfo_xp = ref({});
const initAccount = ref({});
const progress = ref(0);
const emoji = ref(0);
const background = ref(0);
const accessories = ref(0);
const modifyNameShow = ref(false);

const isPolling = ref(true); 
let pollTimer = null;

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

const startPolling = () => {
  if (pollTimer) return; 
  pollTimer = setInterval(() => {
    getInviteRecord();
  }, 60 * 1000); 
  isPolling.value = true;
};

const pausePolling = () => {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
  isPolling.value = false;
};

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

const overlayClose = (value) => {
  modifyNameShow.value = value;
};

const overlayParameter = (value) => {
  modifyNameShow.value = value;
  getUserInfos();
};

const getUserInfos = () => {
  userInfos(store.getters.account).then((res) => {
    if (res.data.code === 200) {
      const list = res.data.result.assetLst;
      for (var i = 0; i < list.length; i++) {
        if (list[i].asset == "YUMO") {
          userInfo_yumo.value = list[i];
        }
        if (list[i].asset == "XP") {
          userInfo_xp.value = list[i];
        }
      }
      getInviteRecord();
    }
  });
};

const getInviteRecord = () => {
  inviteRecord().then((res) => {
    if (res.data.code === 200) {
      initAccount.value = res.data.result;
      emoji.value = res.data.result.emojis;
      background.value = res.data.result.background;
      if (res.data.result.accessories != 0) {
        accessories.value = res.data.result.accessories;
      }
      if (userInfo_xp.value.amount) {
        const xp_m = BigNumber(userInfo_xp.value.amount);
        const xp_x = BigNumber(res.data.result.nextActiveNeedXp);
        const xp_max = BigNumber(100);
        const xp_div = xp_m.div(xp_x);
        const xp_minus = xp_x.minus(xp_m).toNumber();
        const xp_times = xp_div.times(xp_max).toNumber();
        progress.value = formatDecimal(xp_times, 0);
        initXp.value = formatDecimal(xp_minus, 0);
      }
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
    setPageclick();
    getUserInfos();
    startPolling();
  } else {
    emoji.value = 1;
    background.value = 1;
  }
};

const setPageclick = () => {
  let data = {
    pageName: "home",
  };
  pageclick(data).then((res) => {
    if (res.data.code === 200) {
    }
  });
};

const goTo = (value) => {
  pausePolling();
  router.push(value);
};

onUnmounted(() => {
  pausePolling();
});
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .home {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 80px 0 80px;
    margin: auto;
    .home_container {
      height: 100%;
      padding: 0 20px 20px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .container_user {
        width: 100%;
        height: 270px;
        background: #fff7dd;
        border-radius: 25px;
        border: 2px solid #000000;
        padding: 10px;
        position: relative;
        .user_frame {
          max-width: 312px;
          height: 100%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          border: 2px dashed #000000;
          .background {
            width: 100%;
            height: 100%;
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
        .frame_name {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          margin: auto;
          width: 210px;
          height: 35px;
          background: #fff7dd;
          border-radius: 10px;
          border: 2px solid #000000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 16px;
          color: #000;
          font-family: "jtFont";
          cursor: pointer;
          .modify {
            position: absolute;
            width: 16px;
            height: 16px;
            right: 15px;
          }
        }
      }
      .container_level {
        margin-top: 20px;
        .level_title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 30px;
          > div {
            font-weight: bold;
            font-size: 10px;
            color: #000000;
            font-family: "jtFont";
          }
        }
        .level_content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 5px;
          .level_l {
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            font-family: "jtFont";
          }
          .level_line {
            position: relative;
            margin-left: 15px;
            margin-right: 10px;
            flex: 1;
            height: 16px;
            border-radius: 20px;
            border: 2px solid #000000;
            overflow: hidden;
            .line_active {
              height: 100%;
              background: #ffd026;
              transition: width 0.4s;
              border-radius: 4px;
              padding: 1px 0;
              padding-left: 5px;
              overflow: hidden;
              .line_l {
                height: 100%;
                background-image: linear-gradient(
                  to right,
                  #cca31e 2px,
                  transparent 1px
                );
                background-size: 15px; 
                background-repeat: repeat; 
                background-position: 0 0;
              }
            }
          }
          .level_p {
            font-weight: bold;
            font-size: 10px;
            color: #000000;
            font-family: "jtFont";
          }
        }
      }
      .container_press {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        .press_top {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          .top_balance {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #ffffff;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 15px;
            border: 3px solid #000000;
            padding-left: 10px;
            padding-right: 20px;
            overflow: hidden;
            .top_left {
              display: flex;
              align-items: center;
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
              > img {
                width: 27px;
                height: 27px;
                margin-right: 5px;
              }
            }
            .top_right {
              font-weight: bold;
              font-size: 16px;
              color: #000000;
              font-family: "jtFont";
            }
          }
          .modifyBalance {
            padding-left: 5px;
            padding-right: 8px;
            .top_left {
              font-size: 12px;
            }
            .top_right {
              font-size: 12px;
            }
          }
          .el-button {
            border: 0;
            padding: 0 20px;
            height: 50px;
            background: #27ff85;
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
          .modifyButton {
            padding: 0 10px;
            span {
              font-size: 12px;
            }
          }
        }
        .press_center {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          .center_days {
            width: 100%;
            height: 86px;
            background: #ff5f56;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 15px;
            border: 3px solid #000000;
            .toDay {
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 10px;
              > div {
                font-weight: bold;
                font-size: 16px;
                color: #000000;
                font-family: "jtFont";
              }
              > div:nth-child(1) {
                font-size: 14px;
              }
            }
            .center_line {
              width: 100%;
              border: 2px solid #000000;
            }
          }
          .center_my {
            cursor: pointer;
            min-width: 145px;
            height: 86px;
            background: #4d9fff;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 15px;
            border: 3px solid #000000;
            padding: 15px;
            position: relative;
            > div {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
            > img {
              position: absolute;
              right: 10px;
              bottom: 2px;
              width: 51px;
              height: 57px;
            }
          }
        }
        .press_footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          > div {
            cursor: pointer;
            width: 100%;
            height: 50px;
            background: #9d7cff;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 15px;
            border: 3px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
            color: #000000;
            font-family: "jtFont";
          }
          > div:nth-child(2) {
            background: #ffd026;
          }
        }
      }
    }
  }
}
</style>