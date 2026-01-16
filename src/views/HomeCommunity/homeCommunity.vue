<template>
  <div class="homeCommunity">
    <div class="home_reward">
      <div class="mark" @click="homeExplainShow = true">!</div>
      <div class="pool">
        <img class="iconA1" src="../../assets/image/home/iconA4_1.png" alt="" />
        <div class="pool_text">
          <div class="h1">{{ $t("homeCommunity.word_T1") }}</div>
          <div class="yumo">
            <img
              class="iconA2"
              src="../../assets/image/home/iconA4_2.png"
              alt=""
            />
            {{ !awardPool ? "0" : awardPool }} YUMO
          </div>
          <div class="day">
            <img
              class="iconA3"
              src="../../assets/image/home/iconA4_3.png"
              alt=""
            />
            {{ $t("homeCommunity.word_T2") }}
            {{ !awardPeople ? "0" : awardPeople
            }}{{ $t("homeCommunity.word_T3") }}
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="p">{{ $t("homeCommunity.word_T4") }}</div>
    </div>
    <div class="home_rankings">
      <div class="title">
        <img class="iconA4" src="../../assets/image/home/iconA4_4.png" alt="" />
        {{ $t("homeCommunity.word_T5") }}
      </div>
      <div class="scrollY">
        <template v-if="!lockA">
          <template v-if="balanceRanking.length != 0">
            <div
              class="li"
              v-for="(item, index) in balanceRanking"
              :key="index"
            >
              <div>{{ index + 1 }}</div>
              <div class="lb">{{ showAddress53(item.user) }}</div>
              <div class="llb">+ {{ item.amount }} YUMO</div>
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
    <div class="home_qualifications">
      <div class="title">
        <img class="iconA5" src="../../assets/image/home/iconA4_5.png" alt="" />
        {{ $t("homeCommunity.word_T6") }}
      </div>
      <div class="p">
        <div>{{ $t("homeCommunity.word_T7") }}</div>
        <div>
          {{
            !peopleRanking.successTimes
              ? $t("homeCommunity.word_T8")
              : peopleRanking.successTimes > 0
              ? $t("homeCommunity.word_T9")
              : $t("homeCommunity.word_T8")
          }}
        </div>
      </div>
      <div class="p">
        <div>{{ $t("homeCommunity.word_T10") }}</div>
        <div>
          {{ !peopleRanking.totalScore ? "0" : peopleRanking.totalScore }}
        </div>
      </div>
      <div class="p">
        <div>{{ $t("homeCommunity.word_T11") }}</div>
        <div>{{ !peopleRanking.weight ? "0" : peopleRanking.weight }}</div>
      </div>
      <div class="more_button">
        <el-button class="cha" @click="goTo('/home-communityList')">{{
          $t("homeCommunity.word_T12")
        }}</el-button>
      </div>
    </div>
    <div class="home_record">
      <div class="title">
        <img class="iconA6" src="../../assets/image/home/iconA4_6.png" alt="" />
        {{ $t("homeCommunity.word_T13") }}
      </div>
      <div class="scrollY">
        <template v-if="!lockB">
          <template v-if="awardList.length != 0">
            <div class="li" v-for="(item, index) in awardList" :key="index">
              <div>{{ item.createTime }}</div>
              <div>+ {{ item.amount }} YUMO</div>
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

    <moreReward
      v-if="homeRewardShow"
      :homeRewardShow="homeRewardShow"
      @overlayClose="overlayClose"
    ></moreReward>

    <moreExplain
      v-if="homeExplainShow"
      :homeExplainShow="homeExplainShow"
      @overlayClose="overlayClose"
    ></moreExplain>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { showAddress53 } from "../../utils/index";
import { getMyRanking, getPublicRanking } from "../../api/get";
import moreReward from "../../components/overLay/homeReward.vue";
import moreExplain from "../../components/overLay/homeExplain.vue";

const router = useRouter();

const awardPool = ref("");
const awardPeople = ref("");
const awardList = ref([]);
const peopleRanking = ref({});
const balanceRanking = ref([]);
const homeRewardShow = ref(false);
const homeExplainShow = ref(false);
const lockA = ref(false);
const lockB = ref(false);

const overlayClose = (value) => {
  homeRewardShow.value = value;
  homeExplainShow.value = value;
};

const getMyRankings = () => {
  getMyRanking().then((res) => {
    if (res.data.code === 200) {
      awardList.value = res.data.result.AwardList;
      peopleRanking.value = res.data.result.PeopleRanking;
    }
    lockA.value = false;
  });
};

const getPublicRankings = () => {
  getPublicRanking().then((res) => {
    if (res.data.code === 200) {
      awardPool.value = res.data.result.AwardPool;
      awardPeople.value = res.data.result.AwardPool;
      balanceRanking.value = res.data.result.BalanceRanking;
    }
    lockB.value = false;
  });
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    lockA.value = true;
    lockB.value = false;
    getMyRankings();
    getPublicRankings();
  }
};

const goTo = (value) => {
  router.push(value);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeCommunity {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 80px 20px 100px;
    margin: auto;
    .home_reward {
      min-height: 150px;
      background: linear-gradient(180deg, #fff5d0 0%, #ffd026 100%);
      border-radius: 15px;
      border: 2px solid #000000;
      padding: 15px 5px 10px;
      position: relative;
      .mark {
        position: absolute;
        top: 15px;
        right: 20px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid #111;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: #111;
        font-weight: bold;
        font-family: "jtFont";
        cursor: pointer;
      }
      .pool {
        display: flex;
        padding: 0 15px;
        .iconA1 {
          width: 106px;
          height: 77px;
          margin-right: 20px;
        }
        .pool_text {
          .h1 {
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 8px;
          }
          .yumo {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 13px;
            .iconA2 {
              width: 27px;
              height: 27px;
              margin-right: 5px;
            }
          }
          .day {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
            .iconA3 {
              width: 16px;
              height: 16px;
              margin-right: 5px;
            }
          }
        }
      }
      .line {
        margin: 17px 0 11px;
        width: 100%;
        height: 1px;
        background: #000000;
      }
      .p {
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: #000000;
        font-family: "jtFont";
      }
    }
    .home_rankings {
      margin-top: 15px;
      min-height: 245px;
      background: #fff7dd;
      border-radius: 15px;
      border: 2px solid #000000;
      padding: 15px 0 20px;
      .title {
        padding: 0 20px;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        color: #000000;
        font-family: "jtFont";
        margin-bottom: 15px;
        .iconA4 {
          width: 24px;
          height: 25px;
          margin-right: 5px;
        }
      }
      .scrollY {
        height: 200px;
        overflow-y: scroll;
        position: relative;
        -webkit-overflow-scrolling: touch;
        .li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          > div {
            width: 60px;
            text-align: center;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .lb {
            flex: 1;
            text-align: left;
          }
          .llb {
            flex: 1;
          }
        }
        .noData {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
      }
    }
    .home_qualifications {
      margin-top: 15px;
      min-height: 215px;
      background: #fff7dd;
      border-radius: 15px;
      border: 2px solid #000000;
      padding: 15px 15px 20px;
      .title {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        color: #000000;
        font-family: "jtFont";
        margin-bottom: 15px;
        .iconA5 {
          width: 24px;
          height: 25px;
          margin-right: 5px;
        }
      }
      .p {
        padding: 0 5px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
      }
      .more_button {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // gap: 15px;
        .el-button {
          border: 0;
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
        .el-button + .el-button {
          margin-left: 0;
        }
        .lin {
          background: #ffd026;
        }
        .cha {
          background: #4d9fff;
        }
      }
    }
    .home_record {
      margin-top: 15px;
      min-height: 240px;
      background: #fff7dd;
      border-radius: 15px;
      border: 2px solid #000000;
      padding: 12px 20px;
      .title {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        color: #000000;
        font-family: "jtFont";
        margin-bottom: 15px;
        .iconA6 {
          width: 19px;
          height: 28px;
          margin-right: 5px;
        }
      }
      .scrollY {
        height: 180px;
        overflow-y: scroll;
        position: relative;
        -webkit-overflow-scrolling: touch;
        .li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          > div {
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
        }
        .noData {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
      }
      .mores {
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        color: #000000;
        font-family: "jtFont";
        cursor: pointer;
      }
    }
  }
}
</style>