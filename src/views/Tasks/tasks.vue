<template>
  <div class="tasks">
    <div class="tasks_container">
      <div class="container_title">
        <el-button class="title_bind" @click="tasksBindShow = true">{{
          t("tasks.word_T1")
        }}</el-button>
        <div class="title_right">
          <div class="title_time end" @click="goTo('/tasks-issueATask')">
            <img src="../../assets/image/tasks/iconC.png" alt="" />
            {{ t("tasks.word_T2") }}
          </div>
        </div>
      </div>
      <div class="container_table">
        <div :class="tableActive == 2 ? 'active' : ''" @click="changeTable(2)">
          {{ t("tasks.word_T3") }}
        </div>
        <div :class="tableActive == 3 ? 'active' : ''" @click="changeTable(3)">
          {{ t("tasks.word_T5") }}
        </div>
        <div :class="tableActive == 4 ? 'active' : ''" @click="changeTable(4)">
          {{ t("tasks.word_T6") }}
        </div>
        <div :class="tableActive == 1 ? 'active' : ''" @click="changeTable(1)">
          {{ t("tasks.word_T4") }}
        </div>
      </div>
      <div class="container_scrollY">
        <template v-if="!lock">
          <template v-if="tasksList.length != 0">
            <div
              class="scrollY_li"
              v-for="(item, index) in tasksList"
              :key="index"
              @click="goToParams(item)"
            >
              <div class="li_left">
                <img src="../../assets/image/tasks/iconB.png" alt="" />
                <div class="left_name">
                  {{ !item.projectName ? "" : item.projectName }}
                </div>
              </div>
              <div class="li_right">
                <div class="right_h1">{{ item.jobName }}</div>
                <div class="right_h2">
                  {{ t("tasks.word_T7") }}{{ item.usdtNum }} USDT
                </div>
                <div class="right_h2">
                  {{ t("tasks.word_T8")
                  }}{{ item.startTime + "-" + item.endTime }}
                </div>
              </div>
              <div
                class="li_corner"
                :class="calculateTaskStatus(item, index).class"
              >
                {{ calculateTaskStatus(item, index).text }}
              </div>
            </div>
          </template>
          <template v-else>
            <div class="noData">{{ t("tasks.word_T9") }}</div>
          </template>
        </template>
        <template v-else>
          <div class="loading">{{ t("dataLoad") }}</div>
        </template>
      </div>
    </div>

    <tasksBind
      v-if="tasksBindShow"
      :initAccount="initAccount"
      :tasksBindShow="tasksBindShow"
      @overlayClose="overlayClose"
    ></tasksBind>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { pageclick } from "../../api/post";
import { onMounted, ref, watch, reactive, onUnmounted } from "vue";
import { getPublicProjectjobs, inviteRecord } from "../../api/get";
import { getBeijingTimestampWithDayjs } from "../../utils/day";
import tasksBind from "../../components/overLay/tasksBind.vue";

const { t } = useI18n();
const store = useStore();
const router = useRouter();

const lock = ref(false);
const tasksList = ref([]);
const tableActive = ref(2);
const initAccount = ref({});
const time_beiJin = ref(null);
const taskStatusCache = reactive({});
const tasksBindShow = ref(false);

watch(
  () => store.getters.i18nLocal,
  (newValue, oldValue) => {
    if (newValue) {
      tasksList.value = [];
      getPublicProjectJobs(tableActive.value);
    }
  }
);

watch(tasksList, () => {
  Object.keys(taskStatusCache).forEach((key) => {
    delete taskStatusCache[key];
  });
});

const initTime = () => {
  time_beiJin.value = getBeijingTimestampWithDayjs();
};

const calculateTaskStatus = (value, index) => {
  if (!time_beiJin.value) initTime();
  if (taskStatusCache[index]) return taskStatusCache[index];
  const timeA = value.startTime.replace(" ", "T");
  const timeB = value.endTime.replace(" ", "T");
  const timeC = new Date(time_beiJin.value.formatted)
    .toISOString()
    .slice(0, 19);
  const timestamp1 = new Date(timeA).getTime();
  const timestamp2 = new Date(timeB).getTime();
  const timestamp3 = new Date(timeC).getTime();
  let result;
  if (timestamp1 > timestamp3) {
    result = { class: "corner_a2", text: t("tasks.word_T5") };
  } else if (timestamp1 < timestamp3 && timestamp2 > timestamp3) {
    result = { class: "corner_a1", text: t("tasks.word_T3") };
  } else if (timestamp2 < timestamp3) {
    result = { class: "corner_a3", text: t("tasks.word_T6") };
  } else {
    result = { class: "", text: "" };
  }
  taskStatusCache[index] = result;
  return result;
};

const goTo = (value) => {
  router.push(value);
};

const goToParams = (value) => {
  localStorage.setItem("tasks_jobId", value.jobId);
  router.push("/tasks-detail");
};

const changeTable = (value) => {
  tableActive.value = value;
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    initTime();
    lock.value = true;
    tasksList.value = [];
    getPublicProjectJobs(value);
  }
};

const setPageclick = () => {
  let data = {
    pageName: "task_center",
  };
  pageclick(data).then((res) => {
    if (res.data.code === 200) {
    }
  });
};

const getInviteRecord = () => {
  inviteRecord().then((res) => {
    if (res.data.code === 200) {
      initAccount.value = res.data.result;
    }
  });
};

const getPublicProjectJobs = (value) => {
  getPublicProjectjobs().then((res) => {
    if (res.data.code === 200) {
      const jobList = res.data.result;
      if (value == 1) {
        tasksList.value = jobList;
      } else {
        if (!time_beiJin.value) initTime();
        for (var i = 0; i < jobList.length; i++) {
          const timeStart = jobList[i].startTime;
          const timeEnd = jobList[i].endTime;
          const timeA = timeStart.replace(" ", "T");
          const timeB = timeEnd.replace(" ", "T");
          const timeC = new Date(time_beiJin.value.formatted)
            .toISOString()
            .slice(0, 19);
          const timestamp1 = new Date(timeA).getTime();
          const timestamp2 = new Date(timeB).getTime();
          const timestamp3 = new Date(timeC).getTime();
          if (value == 2) {
            if (timestamp1 < timestamp3 && timestamp2 > timestamp3) {
              tasksList.value.push(jobList[i]);
            }
          }
          if (value == 3) {
            if (timestamp1 > timestamp3) {
              tasksList.value.push(jobList[i]);
            }
          }
          if (value == 4) {
            if (timestamp2 < timestamp3) {
              tasksList.value.push(jobList[i]);
            }
          }
        }
      }
    }
    lock.value = false;
  });
};

const overlayClose = (value) => {
  if (value) {
    getInviteRecord();
  } else {
    tasksBindShow.value = false;
  }
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
    getInviteRecord();
    getPublicProjectJobs(tableActive.value);
  }
};

onUnmounted(() => {
  initTime();
});
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .tasks {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 80px 0 80px;
    margin: auto;
    .tasks_container {
      height: 100%;
      padding: 0 20px 20px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .container_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        .title_bind {
          padding: 0 30px;
          height: 50px;
          background: #fff7dd;
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
        .title_right {
          display: flex;
          align-items: center;
          .title_time {
            cursor: pointer;
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
            > img {
              width: 26px;
              height: 26px;
              margin-right: 5px;
            }
          }
          .end {
            margin-left: 13px;
          }
        }
      }
      .container_table {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        background: #fff7dd;
        border-radius: 15px;
        border: 2px solid #000000;
        margin-bottom: 10px;
        overflow: hidden;
        > div {
          cursor: pointer;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          border: 2px solid transparent;
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
          border-radius: 10px;
          &.active {
            background: #ffd026;
          }
        }
      }
      .container_scrollY {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        max-height: calc(100vh - 285px);
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .scrollY_li {
          cursor: pointer;
          display: flex;
          background: #fff7dd;
          border-radius: 15px;
          border: 2px solid #000000;
          padding: 10px 12px 12px;
          position: relative;
          overflow: hidden;
          .li_left {
            margin-right: 10px;
            > img {
              width: 114px;
              height: auto;
            }
            .left_name {
              margin-top: 10px;
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
          }
          .li_right {
            .right_h1 {
              margin-top: 15px;
              margin-bottom: 10px;
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
            .right_h2 {
              font-weight: bold;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
            }
          }
          .li_corner {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0 15px;
            height: 35px;
            border-radius: 15px 0px 0 0px;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
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
        .noData {
          margin-top: 80px;
          text-align: center;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
        .loading {
          margin-top: 80px;
          text-align: center;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
      }
    }
  }
}
</style>