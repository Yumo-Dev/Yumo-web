<template>
  <div class="homeCommunityList">
    <div class="container_home">
      <div class="title">
        <img
          class="return"
          @click="goTo('/home-community')"
          src="../../assets/image/un/return.png"
          alt=""
        />
        <div class="explain" @click="homeExplainShow = true">!</div>
      </div>
      <div class="challenge">
        <div class="challenge_title">
          <img
            class="iconA7"
            src="../../assets/image/home/iconA4_7.png"
            alt=""
          />
          {{ $t("homeCommunityList.word_T1") }}
        </div>
        <div class="ul">
          <div
            class="li w1"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T2") }}
          </div>
          <div
            class="li w2"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T3") }}
          </div>
          <div
            class="li w3"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T4") }}
          </div>
          <div
            class="li w4"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T5") }}
          </div>
          <div
            class="li w4"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T6") }}
          </div>
        </div>
        <div class="scroll">
          <template v-if="!lock">
            <template v-if="challengeRanking.length != 0">
              <div
                class="li"
                v-for="(item, index) in challengeRanking"
                :key="index"
              >
                <div>{{ index + 1 }}</div>
                <div>{{ showAddress53(item.address) }}</div>
                <div>{{ item.successTimes }}</div>
                <div>{{ item.maxScore }}</div>
                <div>{{ item.awardWeight }}</div>
              </div>
            </template>
            <template v-else>
              <div class="noData">{{ $t("noData") }}</div>
            </template>
          </template>
          <template v-else>
            <div class="noData">{{ $t("dataLoad") }}</div>
          </template>
        </div>
      </div>
      <div class="activity">
        <div class="activity_title">
          <img
            class="iconA8"
            src="../../assets/image/home/iconA4_8.png"
            alt=""
          />
          {{ $t("homeCommunityList.word_T7") }}
        </div>
        <div class="ul">
          <div
            class="li w1"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T2") }}
          </div>
          <div
            class="li w2"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T3") }}
          </div>
          <div
            class="li w3"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T8") }}
          </div>
          <div
            class="li w4"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T9") }}
          </div>
          <div
            class="li w4"
            :class="store.getters.i18nLocal == 'US' ? 'modifyLi' : ''"
          >
            {{ $t("homeCommunityList.word_T10") }}
          </div>
        </div>
        <div class="scroll">
          <template v-if="!lock">
            <template v-if="activeRanking.length != 0">
              <div
                class="li"
                v-for="(item, index) in activeRanking"
                :key="index"
              >
                <div>{{ index + 1 }}</div>
                <div>{{ showAddress53(item.address) }}</div>
                <div>{{ item.xp }} XP</div>
                <div>{{ item.activeTimes }}</div>
                <div>{{ item.activeWeight }}</div>
              </div>
            </template>
            <template v-else>
              <div class="noData">{{ $t("noData") }}</div>
            </template>
          </template>
          <template v-else>
            <div class="noData">{{ $t("dataLoad") }}</div>
          </template>
        </div>
      </div>
      <div class="performance">
        <div class="performance_title">
          <img
            class="iconA9"
            src="../../assets/image/home/iconA4_9.png"
            alt=""
          />
          {{ $t("homeCommunityList.word_T1") }}
        </div>
        <div class="ul">
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T11") }}</div>
            <div>
              {{ !peopleRanking.weightOrder ? "0" : peopleRanking.weightOrder }}
            </div>
          </div>
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T12") }}</div>
            <div>
              {{ !peopleRanking.maxScore ? "0" : peopleRanking.maxScore }}
            </div>
          </div>
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T13") }}</div>
            <div>
              {{
                !peopleRanking.successTimes ? "0" : peopleRanking.successTimes
              }}
            </div>
          </div>
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T14") }}</div>
            <div>{{ !peopleRanking.weight ? "0" : peopleRanking.weight }}</div>
          </div>
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T15") }}</div>
            <div>
              {{ !peopleRanking.activeOrder ? "0" : peopleRanking.activeOrder }}
            </div>
          </div>
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T16") }}</div>
            <div>
              {{
                !peopleRanking.activeWeight ? "0" : peopleRanking.activeWeight
              }}
            </div>
          </div>
          <div class="li">
            <div>{{ $t("homeCommunityList.word_T17") }}</div>
            <div>
              {{ !peopleRanking.activeTimes ? "0" : peopleRanking.activeTimes }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <moreExplain
      v-if="homeExplainShow"
      :homeExplainShow="homeExplainShow"
      @overlayClose="overlayClose"
    ></moreExplain>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { pageclick } from "../../api/post";
import { getMyRanking, getPublicRanking } from "../../api/get";
import { showAddress53 } from "../../utils/index";
import moreExplain from "../../components/overLay/homeExplain.vue";

const store = useStore();
const router = useRouter();

const peopleRanking = ref({});
const activeRanking = ref([]);
const challengeRanking = ref([]);
const homeExplainShow = ref(false);
const lock = ref(false);

const overlayClose = (value) => {
  homeExplainShow.value = value;
};

const setPageclick = () => {
  let data = {
    pageName: "ranking",
  };
  pageclick(data).then((res) => {
    if (res.data.code === 200) {
    }
  });
};

const getMyRankings = () => {
  getMyRanking().then((res) => {
    if (res.data.code === 200) {
      peopleRanking.value = res.data.result.PeopleRanking;
    }
    getPublicRankings();
  });
};

const getPublicRankings = () => {
  getPublicRanking().then((res) => {
    if (res.data.code === 200) {
      activeRanking.value = res.data.result.ActiveRanking;
      challengeRanking.value = res.data.result.ChallengeRanking;
    }
    lock.value = false;
  });
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    lock.value = true;
    setPageclick();
    getMyRankings();
  }
};

const goTo = (value) => {
  router.push(value);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeCommunityList {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 20px 20px 100px;
    margin: auto;
    .container_home {
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .return {
          width: 23px;
          height: 23px;
          cursor: pointer;
        }
        .explain {
          width: 20px;
          height: 20px;
          border: 2px solid #111;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .challenge {
        margin-top: 30px;
        margin-bottom: 15px;
        min-height: 175px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 15px 10px 20px;
        .challenge_title {
          display: flex;
          align-items: center;
          font-weight: bold;
          padding: 0 5px;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 15px;
          .iconA7 {
            width: 25px;
            height: 26px;
            margin-right: 5px;
          }
        }
        .ul {
          display: grid;
          grid-template-columns: 24px 57px 1fr 1fr 50px;
          gap: 5px;
          margin-bottom: 10px;
          .li {
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
            text-align: center;
          }
          .modifyLi {
            font-size: 8px;
          }
        }
        .scroll {
          height: 140px;
          overflow-y: scroll;
          position: relative;
          -webkit-overflow-scrolling: touch;
          .li {
            display: grid;
            grid-template-columns: 24px 57px 1fr 1fr 50px;
            gap: 5px;
            margin-bottom: 15px;
            > div {
              font-weight: bold;
              font-size: 10px;
              color: #000000;
              font-family: "jtFont";
              text-align: center;
            }
          }
          .noData {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
            font-size: 10px;
            color: #000000;
            font-family: "jtFont";
          }
        }
      }
      .activity {
        margin-bottom: 15px;
        min-height: 175px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 15px 10px 20px;
        .activity_title {
          display: flex;
          align-items: center;
          font-weight: bold;
          padding: 0 5px;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 15px;
          .iconA8 {
            width: 26px;
            height: 26px;
            margin-right: 5px;
          }
        }
        .ul {
          display: grid;
          grid-template-columns: 24px 57px 1fr 1fr 50px;
          gap: 5px;
          margin-bottom: 10px;
          .li {
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
            text-align: center;
          }
          .modifyLi {
            font-size: 8px;
          }
        }
        .scroll {
          height: 140px;
          overflow-y: scroll;
          position: relative;
          -webkit-overflow-scrolling: touch;
          .li {
            display: grid;
            grid-template-columns: 24px 57px 1fr 1fr 50px;
            gap: 5px;
            margin-bottom: 15px;
            > div {
              font-weight: bold;
              font-size: 10px;
              color: #000000;
              font-family: "jtFont";
              text-align: center;
            }
          }
          .noData {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
            font-size: 10px;
            color: #000000;
            font-family: "jtFont";
          }
        }
      }
      .performance {
        min-height: 275px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 15px 15px 20px;
        .performance_title {
          display: flex;
          align-items: center;
          font-weight: bold;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 15px;
          .iconA9 {
            width: 25px;
            height: 26px;
            margin-right: 5px;
          }
        }
        .ul {
          .li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            > div {
              font-weight: bold;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
            }
          }
          .li:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>