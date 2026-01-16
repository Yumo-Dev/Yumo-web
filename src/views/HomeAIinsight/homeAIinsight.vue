<template>
  <div class="homeAIinsight">
    <div class="container_home">
      <img
        class="return"
        @click="goTo('-1')"
        src="../../assets/image/un/return.png"
        alt=""
      />
      <div class="title">
        <div class="p">{{ $t("homeAIinsight.word_T1") }}</div>
        <img
          class="iconA"
          @click="goTo('/home-introduction')"
          src="../../assets/image/home/aiA1.png"
          alt=""
        />
      </div>
      <div class="home_frameA">
        <div class="h1">{{ $t("homeAIinsight.word_T2") }}</div>
        <div class="li">
          <div class="text">
            <div>{{ personalityLabel }}</div>
            <div>{{ styleSummary }}</div>
          </div>
          <img class="iconB" src="../../assets/image/home/aiAs.png" alt="" />
        </div>
        <div class="h2">{{ $t("homeAIinsight.word_T3") }}</div>
      </div>
      <div class="home_frameB">
        <div class="h1">{{ $t("homeAIinsight.word_T4") }}</div>
        <div class="h2">{{ $t("homeAIinsight.word_T5") }}</div>
        <div class="h2">{{ $t("homeAIinsight.word_T6") }}</div>
        <div class="li">
          <img src="../../assets/image/home/aiA2.png" alt="" />
          <div
            class="name"
            :class="store.getters.i18nLocal == 'US' ? 'font10' : ''"
          >
            {{ $t("homeAIinsight.word_T7") }}
          </div>
        </div>
        <div class="li">
          <img src="../../assets/image/home/aiA3.png" alt="" />
          <div class="name" :class="store.getters.i18nLocal == 'US' ? 'font10' : ''">{{ $t("homeAIinsight.word_T8") }}</div>
        </div>
        <div class="li">
          <img src="../../assets/image/home/aiA4.png" alt="" />
          <div class="name" :class="store.getters.i18nLocal == 'US' ? 'font10' : ''">{{ $t("homeAIinsight.word_T9") }}</div>
        </div>
        <div class="li">
          <img src="../../assets/image/home/aiA5.png" alt="" />
          <div class="name" :class="store.getters.i18nLocal == 'US' ? 'font10' : ''">{{ $t("homeAIinsight.word_T10") }}</div>
        </div>
      </div>
      <div class="home_frameC">
        <div class="h1">{{ $t("homeAIinsight.word_T11") }}</div>
        <Kline :dayLst7="dayLst7"></Kline>
      </div>
      <div class="home_frameD">
        <div class="h1">{{ $t("homeAIinsight.word_T12") }}</div>
        <div class="li">
          <div>{{ $t("homeAIinsight.word_T13") }}</div>
          <div>
            {{
              !dayLst7First.challengeCount ? "0" : dayLst7First.challengeCount
            }}
          </div>
        </div>
        <div class="lines"></div>
        <div class="li">
          <div>{{ $t("homeAIinsight.word_T14") }}</div>
          <div>
            {{ !dayLst7First.challengeCount ? "0" : dayLst7First.totalScore }}
            XP
          </div>
        </div>
        <div class="lines"></div>
        <div class="li">
          <div>{{ $t("homeAIinsight.word_T15") }}</div>
          <div>
            {{ !dayLst7First.challengeCount ? "0" : dayLst7First.plaza }}
          </div>
        </div>
        <div class="lines"></div>
        <div class="li">
          <div>{{ $t("homeAIinsight.word_T16") }}</div>
          <div>
            {{
              !dayLst7First.challengeCount ? "0" : dayLst7First.changeMomoCount
            }}
          </div>
        </div>
      </div>
      <div class="home_frameE">
        <div class="content_frame">
          <div class="h1">{{ $t("homeAIinsight.word_T17") }}</div>
          <div class="h2 mb">{{ $t("homeAIinsight.word_T18") }}</div>
          <div class="h2">{{ $t("homeAIinsight.word_T19") }}</div>
          <div class="icon">
            <img src="../../assets/image/home/aiA6.png" alt="" />
          </div>
          <div class="li">
            <div
              class="le"
              :class="store.getters.i18nLocal == 'US' ? 'lp' : ''"
            >
              <img
                class="iconA7"
                src="../../assets/image/home/aiA7.png"
                alt=""
              />
              {{ $t("homeAIinsight.word_T20") }}
            </div>
            <div class="rl">
              <div
                class="interpret"
                v-for="(item, index) in exploration"
                :key="index"
              >
                <img
                  class="aiA10"
                  src="../../assets/image/home/aiA11.png"
                  alt=""
                />
              </div>
              <div
                class="interpret"
                v-for="(item, index) in starA1"
                :key="index"
              >
                <img
                  class="aiA10"
                  src="../../assets/image/home/aiA10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="li">
            <div
              class="le"
              :class="store.getters.i18nLocal == 'US' ? 'lp' : ''"
            >
              <img
                class="iconA8"
                src="../../assets/image/home/aiA8.png"
                alt=""
              />
              {{ $t("homeAIinsight.word_T21") }}
            </div>
            <div class="rl">
              <div
                class="interpret"
                v-for="(item, index) in executionCapability"
                :key="index"
              >
                <img
                  class="aiA10"
                  src="../../assets/image/home/aiA11.png"
                  alt=""
                />
              </div>
              <div
                class="interpret"
                v-for="(item, index) in starB1"
                :key="index"
              >
                <img
                  class="aiA10"
                  src="../../assets/image/home/aiA10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="li mb_none">
            <div
              class="le"
              :class="store.getters.i18nLocal == 'US' ? 'lp' : ''"
            >
              <img
                class="iconA9"
                src="../../assets/image/home/aiA9.png"
                alt=""
              />
              {{ $t("homeAIinsight.word_T22") }}
            </div>
            <div class="rl">
              <div
                class="interpret"
                v-for="(item, index) in investment"
                :key="index"
              >
                <img
                  class="aiA10"
                  src="../../assets/image/home/aiA11.png"
                  alt=""
                />
              </div>
              <div
                class="interpret"
                v-for="(item, index) in starC1"
                :key="index"
              >
                <img
                  class="aiA10"
                  src="../../assets/image/home/aiA10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Kline from "./Kline.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { BigNumber } from "bignumber.js";
import { behavior7day } from "../../api/get";

const store = useStore();
const router = useRouter();

const starA1 = ref(0);
const starB1 = ref(0);
const starC1 = ref(0);
const exploration = ref(0);
const executionCapability = ref(0);
const investment = ref(0);
const styleSummary = ref("");
const personalityLabel = ref("");
const dayLst7First = ref({});
const dayLst7 = ref([]);

const goTo = (value) => {
  if (value == -1) {
    router.go(value);
  } else {
    router.push(value);
  }
};

const getBehavior7day = () => {
  behavior7day(store.getters.i18nLocal == "US" ? "en" : "zh").then((res) => {
    if (res.data.code === 200) {
      styleSummary.value = res.data.result.styleSummary;
      personalityLabel.value = res.data.result.personalityLabel;
      dayLst7First.value = res.data.result.dayLst7[0];
      dayLst7.value = res.data.result.dayLst7;
      if (res.data.result.dayLst7[0]) {
        exploration.value = res.data.result.dayLst7[0].exploration;
        executionCapability.value =
          res.data.result.dayLst7[0].executionCapability;
        investment.value = res.data.result.dayLst7[0].investment;
        const total = BigNumber(5);
        let starA2 = BigNumber(res.data.result.dayLst7[0].exploration);
        let starB2 = BigNumber(res.data.result.dayLst7[0].executionCapability);
        let starC2 = BigNumber(res.data.result.dayLst7[0].investment);
        starA1.value = total.minus(starA2).toNumber();
        starB1.value = total.minus(starB2).toNumber();
        starC1.value = total.minus(starC2).toNumber();
      } else {
        exploration.value = 1;
        executionCapability.value = 1;
        investment.value = 1;
        starA1.value = 4;
        starB1.value = 4;
        starC1.value = 4;
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
    getBehavior7day();
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeAIinsight {
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
        .p {
          width: 80%;
          font-weight: normal;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
        .iconA {
          width: 26px;
          height: 26px;
          cursor: pointer;
        }
      }
      .home_frameA {
        width: 100%;
        min-height: 150px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 10px 20px;
        .h1 {
          text-align: center;
          font-weight: normal;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
        .li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .text {
            > div {
              font-weight: normal;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
            }
          }
          .iconB {
            width: 62px;
            height: 62px;
          }
        }
        .h2 {
          margin-top: 35px;
          text-align: center;
          font-weight: normal;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
      }
      .home_frameB {
        margin-top: 15px;
        width: 100%;
        min-height: 255px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 10px 15px;
        .h1 {
          text-align: center;
          font-weight: normal;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
        .h2 {
          font-weight: normal;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
        .li {
          margin-top: 7px;
          width: 100%;
          height: 38px;
          background: #fff7dd;
          border-radius: 55px;
          border: 2px solid #000000;
          display: flex;
          align-items: center;
          padding: 0 5px;
          > img {
            width: 25px;
            height: 25px;
          }
          .name {
            width: 85%;
            margin-left: 10px;
            font-weight: normal;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .font10 {
            font-size: 10px;
          }
        }
      }
      .home_frameC {
        margin-top: 15px;
        width: 100%;
        min-height: 210px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 10px 15px;
        .h1 {
          text-align: center;
          font-weight: normal;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
      }
      .home_frameD {
        margin-top: 15px;
        width: 100%;
        min-height: 210px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 20px 15px;
        .h1 {
          text-align: center;
          font-weight: normal;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 25px;
        }
        .li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          > div {
            font-weight: normal;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
        }
        .lines {
          margin: 10px 0;
          width: 100%;
          height: 1px;
          background: #000000;
        }
      }
      .home_frameE {
        margin-top: 15px;
        width: 100%;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        padding: 10px;
        .content_frame {
          width: 100%;
          min-height: 300px;
          border-radius: 15px;
          border: 2px dashed #000000;
          padding: 20px 40px 30px;
          .h1 {
            text-align: center;
            font-weight: normal;
            font-size: 16px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 15px;
          }
          .h2 {
            text-align: center;
            font-weight: normal;
            font-size: 14px;
            color: #000000;
            font-family: "jtFont";
          }
          .mb {
            margin-bottom: 5px;
          }
          .icon {
            width: 100%;
            height: 76px;
            text-align: center;
            margin-bottom: 20px;
            > img {
              width: 63px;
              height: 76px;
            }
          }
          .li {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
            .le {
              min-width: 90px;
              display: flex;
              align-items: center;
              font-weight: normal;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
              margin-right: 10px;
              .iconA7 {
                width: 17px;
                height: 19px;
                margin-right: 3px;
              }
              .iconA8 {
                width: 17px;
                height: 18px;
                margin-right: 3px;
              }
              .iconA9 {
                width: 17px;
                height: 17px;
                margin-right: 3px;
              }
            }
            .lp {
              min-width: 130px;
            }
            .rl {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              .interpret {
                margin-left: 5px;
                width: 24px;
                height: 24px;
                .aiA10 {
                  width: 24px;
                  height: 24px;
                }
              }
              .interpret:first-child {
                margin-left: 0;
              }
            }
          }
          .mb_none {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>