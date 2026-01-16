<template>
  <div class="tasksDetail">
    <div class="container_tasks">
      <div class="title_tasks">
        <img
          class="return"
          @click="goTo('/tasks')"
          src="../../assets/image/un/return.png"
          alt=""
        />
        <div class="mobile" :class="taskStatusCache.class">
          {{ taskStatusCache.text }}
        </div>
      </div>
      <div class="content_tasks">
        <div class="synopsis">
          <img class="left" src="../../assets/image/tasks/iconD.png" alt="" />
          <div class="right">
            <div>{{ !projectJobs[0] ? "--" : projectJobs[0].projectName }}</div>
            <div>{{ !projectJobs[0] ? "--" : projectJobs[0].jobName }}</div>
            <div>{{ t("tasksDetail.word_T2") }}</div>
            <div>{{ !projectJobs[0] ? "--" : projectJobs[0].remark }}</div>
          </div>
        </div>
        <template v-if="!lock">
          <template v-if="start_end < 3 && start_end >= 1">
            <div class="h1">
              <div>{{ t("tasksDetail.word_T3") }}</div>
              <el-popover
                placement="right"
                :title="t('tasksDetail.word_T44')"
                :width="200"
                trigger="click"
              >
                <template #reference>
                  <el-button class="m-2">?</el-button>
                </template>
              </el-popover>
            </div>
            <div class="step">
              <div class="li">
                <div>{{ t("tasksDetail.word_T4") }}</div>
                <div
                  v-if="
                    !jobDetail ||
                    (jobDetail.istwitter != 1 && taskStatusCache.id == 2)
                  "
                  class="goIn"
                  @click="followTwitter"
                >
                  {{ t("tasksDetail.word_T5") }}
                </div>
                <div v-if="taskStatusCache.id != 2"></div>
                <img
                  v-if="jobDetail.istwitter == 1 && taskStatusCache.id == 2"
                  class="success"
                  src="../../assets/image/tasks/success.png"
                  alt=""
                />
              </div>
              <div class="li old">
                <div>{{ t("tasksDetail.word_T6") }}</div>
                <div
                  v-if="
                    !jobDetail ||
                    (jobDetail.istelegram != 1 && taskStatusCache.id == 2)
                  "
                  class="goIn"
                  @click="followTelegram"
                >
                  {{ t("tasksDetail.word_T5") }}
                </div>
                <div v-if="taskStatusCache.id != 2"></div>
                <img
                  v-if="jobDetail.istelegram == 1 && taskStatusCache.id == 2"
                  class="success"
                  src="../../assets/image/tasks/success.png"
                  alt=""
                />
              </div>
              <div class="li end">
                <div>
                  {{ t("tasksDetail.word_T7") }} 2
                  {{ t("tasksDetail.word_T8") }}
                </div>
                <div
                  v-if="
                    !jobDetail ||
                    (jobDetail.isGame != 1 && taskStatusCache.id == 2)
                  "
                  class="goIn"
                  @click="goTo('/games')"
                >
                  {{ t("tasksDetail.word_T9") }}
                </div>
                <div v-if="taskStatusCache.id != 2"></div>
                <img
                  v-if="jobDetail.isGame == 1 && taskStatusCache.id == 2"
                  class="success"
                  src="../../assets/image/tasks/success.png"
                  alt=""
                />
              </div>
            </div>
            <div class="frame">
              <img
                class="iconE"
                src="../../assets/image/tasks/iconE.png"
                alt=""
              />
              <div class="p">{{ t("tasksDetail.word_T10") }}</div>
              <div class="reward">
                <div class="war">
                  <div
                    :class="store.getters.i18nLocal == 'US' ? 'modifyDiv' : ''"
                  >
                    {{ t("tasksDetail.word_T11") }}
                  </div>
                  <div>
                    {{ !projectJobs[0] ? "0" : projectJobs[0].yumoNum }} YUMO
                  </div>
                </div>
                <div class="war">
                  <div
                    :class="store.getters.i18nLocal == 'US' ? 'modifyDiv' : ''"
                  >
                    {{ t("tasksDetail.word_T12") }}
                  </div>
                  <div>
                    {{ !projectJobs[0] ? "0" : projectJobs[0].memberNum }}
                    {{ t("tasksDetail.word_T13") }}
                  </div>
                </div>
                <div class="war">
                  <div
                    :class="store.getters.i18nLocal == 'US' ? 'modifyDiv' : ''"
                  >
                    {{ t("tasksDetail.word_T14") }}
                  </div>
                  <div>{{ single }} YUMO</div>
                </div>
              </div>
              <div class="h3">
                {{ t("tasksDetail.word_T15") }}
              </div>
              <div class="line"></div>
              <div class="time">
                <div>{{ t("tasksDetail.word_T16") }}</div>
                <div>
                  {{ !projectJobs[0] ? "--" : projectJobs[0].startTime }}
                </div>
              </div>
              <div class="time">
                <div>{{ t("tasksDetail.word_T17") }}</div>
                <div>{{ !projectJobs[0] ? "--" : projectJobs[0].endTime }}</div>
              </div>
              <div class="end">
                {{
                  start_end == 1
                    ? t("tasksDetail.word_T18")
                    : start_end == 2
                    ? t("tasksDetail.word_T19")
                    : t("tasksDetail.word_T20")
                }}
              </div>
              <van-count-down :time="terminate">
                <template #default="timeData">
                  <span class="block">{{ timeData.days }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.hours }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
            <div
              class="stake_button"
              v-if="
                jobDetail.istwitter == 1 &&
                jobDetail.istelegram == 1 &&
                jobDetail.isGame == 1 &&
                taskStatusCache.id == 2
              "
            >
              <el-button class="b1">{{ t("tasksDetail.word_T21") }}</el-button>
            </div>
            <div class="stake_button">
              <el-button class="b3" @click="goTo('/tasks')">{{
                t("tasksDetail.word_T22")
              }}</el-button>
            </div>
          </template>
          <template v-else>
            <div class="lines"></div>
            <div class="mobile">
              <div>{{ t("tasksDetail.word_T23") }}</div>
              <div>
                {{ !projectJobs[0] ? "0" : projectJobs[0].yumoNum }} YUMO
              </div>
            </div>
            <div class="mobile">
              <div>{{ t("tasksDetail.word_T24") }}</div>
              <div>
                {{ !projectJobs[0] ? "0" : projectJobs[0].memberNum }}
                {{ t("gameOver.word_T13") }}
              </div>
            </div>
            <div class="mobile">
              <div>{{ t("tasksDetail.word_T25") }}</div>
              <div>
                {{
                  !projectJobs[0] ? "--" : projectJobs[0].startTime.slice(5, 16)
                }}
                —
                {{
                  !projectJobs[0] ? "--" : projectJobs[0].endTime.slice(5, 16)
                }}
              </div>
            </div>
            <div class="mobile ends">
              <div>{{ t("tasksDetail.word_T26") }}</div>
              <div>{{ t("tasksDetail.word_T27") }}</div>
            </div>
            <div class="frames heightA">
              <div class="h2">{{ t("tasksDetail.word_T28") }}</div>
              <div class="text1">
                {{ t("tasksDetail.word_T29") }}
              </div>
              <div class="text1">{{ t("tasksDetail.word_T30") }}</div>
              <img
                class="iconF"
                src="../../assets/image/tasks/iconF.png"
                alt=""
              />
            </div>
            <div class="frames heightB" v-if="jobDetail.isAward == 1">
              <div class="h2">{{ t("tasksDetail.word_T31") }}</div>
              <template v-if="jobDetail.isAward == 1">
                <div class="text2">{{ t("tasksDetail.word_T32") }}</div>
                <div class="text2">
                  {{ t("tasksDetail.word_T33") }}
                  {{ !projectJobs[0] ? "--" : projectJobs[0].memberNum }}
                  {{ t("tasksDetail.word_T34") }}
                </div>
                <div class="text2 tops">
                  {{ t("tasksDetail.word_T35") }}{{ single }} YUMO
                </div>
                <div class="text2">{{ t("tasksDetail.word_T36") }}</div>
                <div class="stake_button">
                  <el-button @click="goTo('/home')">{{
                    t("tasksDetail.word_T37")
                  }}</el-button>
                </div>
              </template>
              <template v-else>
                <div
                  class="text2"
                  v-if="
                    jobDetail.istwitter == 1 &&
                    jobDetail.istelegram == 1 &&
                    jobDetail.isGame == 1
                  "
                >
                  {{ t("tasksDetail.word_T28") }}
                </div>
                <div class="text2" v-else>{{ t("tasksDetail.word_T39") }}</div>
              </template>
            </div>
          </template>
        </template>
        <template v-else>
          <div class="loadings">{{ t("dataLoad") }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { showToast } from "vant";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { BigNumber } from "bignumber.js";
import { toPrecision } from "../../utils/index";
import { getBeijingTimestampWithDayjs } from "../../utils/day";
import { clickTwitter, clickTelegram } from "../../api/post";
import { getPublicProjectjobs, getProjectjobDetail } from "../../api/get";

const { t } = useI18n();
const store = useStore();
const router = useRouter();
const projectJobs = ref({});
const time_beiJin = ref(null);
const taskStatusCache = ref({});
const single = ref(0);
const start_end = ref(0);
const terminate = ref(null);
const jobDetail = ref({});
const lock = ref(false);

const initTime = () => {
  time_beiJin.value = getBeijingTimestampWithDayjs();
};

const getPublicProjectJobs = (value) => {
  getPublicProjectjobs().then((res) => {
    if (res.data.code === 200) {
      const jobList = res.data.result;
      getProjectJobDetail();
      projectJobs.value = jobList.filter((item) => item.jobId === value);
      if (!time_beiJin.value) initTime();
      const timeA = projectJobs.value[0].startTime.replace(" ", "T");
      const timeB = projectJobs.value[0].endTime.replace(" ", "T");
      const timeC = time_beiJin.value.formatted.replace(" ", "T");
      const timestamp1 = new Date(timeA).getTime();
      const timestamp2 = new Date(timeB).getTime();
      const timestamp3 = new Date(timeC).getTime();
      let result;
      if (timestamp1 > timestamp3) {
        result = { class: "corner_a2", text: t("tasksDetail.word_T40"), id: 1 };
      } else if (timestamp1 < timestamp3 && timestamp2 > timestamp3) {
        result = { class: "corner_a1", text: t("tasksDetail.word_T41"), id: 2 };
      } else if (timestamp2 < timestamp3) {
        result = { class: "corner_a3", text: t("tasksDetail.word_T42"), id: 3 };
      } else {
        result = { class: "", text: "" };
      }
      taskStatusCache.value = result;

      if (projectJobs.value[0].yumoNum || projectJobs.value[0].memberNum) {
        const yumoNum = BigNumber(projectJobs.value[0].yumoNum);
        const memberNum = BigNumber(projectJobs.value[0].memberNum);
        const sumDiv = yumoNum.div(memberNum).toNumber();
        single.value = toPrecision(sumDiv, 2);
      }

      const start = BigNumber(timestamp1);
      const end = BigNumber(timestamp2);
      const current = BigNumber(timestamp3);
      const minusTimeA = start.minus(current).toNumber();
      const minusTimeB = end.minus(current).toNumber();
      if (timestamp1 > timestamp3) {
        start_end.value = 1;
        terminate.value = minusTimeA;
      } else if (timestamp3 < timestamp2) {
        start_end.value = 2;
        terminate.value = minusTimeB;
      } else {
        start_end.value = 3;
      }
    } else {
      lock.value = false;
    }
  });
};

const getProjectJobDetail = () => {
  const jobId = localStorage.getItem("tasks_jobId");
  getProjectjobDetail(jobId).then((res) => {
    if (res.data.code === 200) {
      jobDetail.value = res.data.result;
    }
    lock.value = false;
  });
};

const followTwitter = () => {
  window.open(projectJobs.value[0].twitter, "_blank");
  let data = {
    jobId: projectJobs.value[0].jobId,
  };
  clickTwitter(data).then((res) => {
    if (res.data.code === 200) {
      getProjectJobDetail();
      showToast(t("tasksDetail.word_T43"));
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
    }
  });
};

const followTelegram = () => {
  window.open(projectJobs.value[0].telegram, "_blank");
  let data = {
    jobId: projectJobs.value[0].jobId,
  };
  clickTelegram(data).then((res) => {
    if (res.data.code === 200) {
      getProjectJobDetail();
      showToast(t("tasksDetail.word_T43"));
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
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
    lock.value = true;
    const jobId = localStorage.getItem("tasks_jobId");
    getPublicProjectJobs(jobId);
  }
};

const goTo = (value) => {
  router.push(value);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .tasksDetail {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 13px 0 100px;
    margin: auto;
    .container_tasks {
      .title_tasks {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        .return {
          width: 23px;
          height: 23px;
          cursor: pointer;
        }
        .mobile {
          padding: 0 10px 0 25px;
          height: 38px;
          border-radius: 20px 0 0 20px;
          border-left: 2px solid #000000;
          border-top: 2px solid #000000;
          border-bottom: 2px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
          &.corner_a1 {
            background: #27ff85;
          }
          &.corner_a2 {
            background: #4d9fff;
          }
          &.corner_a3 {
            background: #ff4d4d;
          }
        }
      }
      .content_tasks {
        padding: 15px 20px 0;
        .synopsis {
          display: flex;
          .left {
            width: 114px;
            height: 114px;
          }
          .right {
            margin-left: 15px;
            padding-top: 15px;
            > div {
              font-weight: bold;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
            }
            > div:nth-child(1) {
              font-size: 14px;
              margin-bottom: 10px;
            }
            > div:nth-child(2) {
              font-size: 14px;
              margin-bottom: 5px;
            }
            > div:nth-child(4) {
              word-wrap: break-word;
              overflow-wrap: break-word;
              word-break: break-word;
            }
          }
        }
        .h1 {
          margin-top: 20px;
          display: flex;
          align-items: center;
          > div:nth-child(1) {
            font-weight: bold;
            font-size: 14px;
            color: #000000;
            font-family: "jtFont";
            margin-right: 10px;
          }
          .m-2 {
            border: 0;
            padding: 0;
            width: 16px;
            height: 16px;
            background: #000;
            border-radius: 50%;
            span {
              font-weight: bold;
              font-size: 10px;
              color: #ffffff;
              font-family: "jtFont";
            }
          }
        }
        .step {
          margin-top: 10px;
          .li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            > div {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
            .success {
              width: 20px;
              height: 20px;
            }
            .goIn {
              padding: 0 10px;
              height: 34px;
              background: #ffd026;
              border-radius: 15px;
              border: 2px solid #000000;
              font-weight: bold;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }
          .old {
            margin-bottom: 20px;
          }
          .end {
            margin-bottom: 0;
          }
        }
        .frame {
          margin-top: 45px;
          margin-bottom: 20px;
          min-height: 280px;
          background: #fff7dd;
          border-radius: 15px;
          border: 2px solid #000000;
          padding: 15px 20px;
          position: relative;
          .iconE {
            position: absolute;
            top: -30px;
            right: 20px;
            width: 92px;
            height: 67px;
          }
          .p {
            font-weight: bold;
            font-size: 14px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 25px;
          }
          .reward {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5px;
            margin-bottom: 20px;
            .war {
              text-align: center;
              > div {
                font-weight: bold;
                font-size: 14px;
                color: #000000;
                font-family: "jtFont";
              }
              .modifyDiv {
                font-size: 10px;
              }
            }
          }
          .h3 {
            padding: 0 30px;
            text-align: center;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .line {
            margin: 10px 0 25px;
            width: 100%;
            border: 1px solid #000000;
          }
          .time {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            > div {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
          }
          .end {
            text-align: center;
            font-weight: bold;
            font-size: 14px;
            color: #000000;
            font-family: "jtFont";
          }
          .van-count-down {
            margin-top: 10px;
            line-height: normal;
            font-size: 14px;
            color: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            .block {
              min-width: 53px;
              height: 36px;
              background: #ffd026;
              border-radius: 15px;
              border: 2px solid #000000;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
            .colon {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
              padding: 0 5px;
            }
          }
        }
        .stake_button {
          margin-bottom: 10px;
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
            &.b1 {
              background: #27ff85;
            }
            &.b2 {
              background: #4d9fff;
            }
            &.b3 {
              background: #ffd026;
            }
          }
        }
        .lines {
          margin: 15px 0 10px;
          width: 100%;
          border: 1px solid #000000;
        }
        .mobile {
          margin-bottom: 10px;
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
        .ends {
          margin-bottom: 20px;
        }
        .frames {
          margin-bottom: 10px;
          background: #fff7dd;
          border-radius: 15px;
          border: 2px solid #000000;
          padding: 15px 20px;
          position: relative;
          .h2 {
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 8px;
          }
          .text1 {
            width: 70%;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .iconF {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translate(0, -50%);
            width: 66px;
            height: 71px;
          }
          .text2 {
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .tops {
            margin-top: 15px;
          }
          .stake_button {
            margin-top: 30px;
            .el-button {
              border: 0;
              padding: 0;
              width: 100%;
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
          }
        }
        .heightA {
          min-height: 105px;
        }
        .heightB {
          min-height: 60px;
          margin-bottom: 0;
        }
        .loadings {
          padding-top: 80px;
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          color: #000000;
          font-family: "jtFont";
        }
      }
    }
  }
}
</style>