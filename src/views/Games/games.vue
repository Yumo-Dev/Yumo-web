<template>
  <div class="games">
    <div class="game_container">
      <div class="game_frame_a1">
        <div class="frame_img"></div>
        <div class="frame_content">
          <div class="frame_h1">{{ t("games.word_T1") }}</div>
          <div class="frame_h2">{{ t("games.word_T2") }}</div>
          <div class="frame_mode">
            <div class="mode_to">
              <el-button class="frame_a1" @click="changeStart(2)">{{
                t("games.word_T3")
              }}</el-button>
              <div :class="store.getters.i18nLocal == 'US' ? 'modifyDiv' : ''">
                {{ t("games.word_T4") }} 1 {{ t("games.word_T5") }}
              </div>
            </div>
            <div class="mode_to">
              <el-button class="frame_a2" @click="changeStart(1)">{{
                t("games.word_T6")
              }}</el-button>
              <div :class="store.getters.i18nLocal == 'US' ? 'modifyDiv' : ''">
                {{ t("games.word_T7") }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="game_frame_a2">
        <div class="frame_h1">{{ t("games.word_T8") }}</div>
        <div class="frame_h2">{{ t("games.word_T9") }}</div>
      </div>
      <div class="game_loading">
        <div>{{ t("games.word_T10") }}</div>
        ...
      </div>

      <audio ref="audioRef" :src="audioStart" loop></audio>
    </div>

    <gamesStart
      v-if="gamesStartShow"
      :type="type"
      :loadingStare="loadingStare"
      :gamesStartShow="gamesStartShow"
      @goTo="goTo"
      @overlayClose="overlayClose"
    ></gamesStart>
  </div>
</template>

<script setup>
import { showToast } from "vant";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { getCurrentInstance, onUnmounted } from "vue";
import { onMounted, ref, watch } from "vue";
import { userInfos } from "../../api/get";
import { pageclick, gameStart, gameHash } from "../../api/post";
import gamesStart from "../../components/overLay/gamesStart.vue";

import audioStart from "@/assets/audio/GameStart_YX.mp3";

const { t } = useI18n();
const store = useStore();
const router = useRouter();
const instance = getCurrentInstance();

const type = ref(0);
const userInfo_yumo = ref({});
const loadingStare = ref(false);
const gamesStartShow = ref(false);

const audioRef = ref(null);
const unlocked = ref(false);

const unlockAudio = () => {
  if (!unlocked.value) {
    unlocked.value = true;
    playAudio();
  }
};

const playAudio = () => {
  if (audioRef.value) {
    audioRef.value.play().catch((err) => {});
  }
};

const play = () => {
  unlocked.value = true;
};

const pause = () => {
  unlocked.value = false;
};

const changeStart = (value) => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    type.value = value;
    if (value == 1) {
      setGameStart("/games-mode");
    } else {
      gamesStartShow.value = true;
    }
  } else {
    showToast(t("games.word_T11"));
  }
};

const goTo = (value) => {
  setGameStart(value);
};

const overlayClose = (value) => {
  gamesStartShow.value = value;
};

const setPageclick = () => {
  let data = {
    pageName: "games",
  };
  pageclick(data).then((res) => {
    if (res.data.code === 200) {
    }
  });
};

const getUserInfos = () => {
  userInfos(store.getters.account).then((res) => {
    if (res.data.code === 200) {
      const list = res.data.result.assetLst;
      for (var i = 0; i < list.length; i++) {
        if (list[i].asset == "YUMO") {
          userInfo_yumo.value = list[i];
        }
      }
    }
  });
};

const setGameStart = (value) => {
  gameStart().then((res) => {
    if (res.data.code == 200) {
      router.push(value);
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
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .games {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 80px 0 80px;
    margin: auto;
    .game_container {
      height: 100%;
      padding: 0 20px 20px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .game_frame_a1 {
        background: #fff7dd;
        border-radius: 25px;
        border: 2px solid #000000;
        padding: 10px 10px 20px;
        overflow: hidden;
        .frame_img {
          margin: 0 auto;
          max-width: 312px;
          height: 172px;
          background-image: url("../../assets/image/games/iconBG.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .frame_content {
          padding: 0 10px 0 5px;
          .frame_h1 {
            padding-left: 5px;
            margin-top: 15px;
            font-weight: bold;
            font-size: 24px;
            color: #000000;
            font-family: "jtFont";
          }
          .frame_h2 {
            padding-left: 5px;
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 10px;
          }
          .frame_mode {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            .mode_to {
              .el-button {
                padding: 0;
                width: 100%;
                height: 50px;
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
              .frame_a1 {
                background: #ff5f56;
              }
              .frame_a2 {
                background: #4d9fff;
              }
              > div {
                margin-top: 10px;
                padding: 0 12px;
                text-align: center;
                font-weight: bold;
                font-size: 12px;
                color: #000000;
                font-family: "jtFont";
              }
              .modifyDiv {
                font-size: 10px;
              }
            }
          }
        }
      }
      .game_frame_a2 {
        margin-top: 15px;
        margin-bottom: 40px;
        background: #fff7dd;
        border-radius: 25px;
        border: 2px solid #000000;
        padding: 20px 20px 15px;
        .frame_h1 {
          font-weight: bold;
          font-size: 24px;
          color: #000;
          font-family: "jtFont";
        }
        .frame_h2 {
          font-weight: bold;
          font-size: 16px;
          color: #000;
          font-family: "jtFont";
        }
      }
      .game_loading {
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        color: #000;
        font-family: "jtFont";
      }
    }
  }
}
</style>