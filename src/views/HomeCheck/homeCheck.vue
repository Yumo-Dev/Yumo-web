<template>
  <div class="homeCheck">
    <div class="container_check">
      <img
        class="return"
        @click="goTo('/home')"
        src="../../assets/image/un/return.png"
        alt=""
      />
      <div class="balance">
        <div>{{ t("home.word_T6") }}</div>
        <div>{{ !userList.amount ? "0" : userList.amount }}</div>
      </div>
      <div class="frame">
        <img
          class="checkImg"
          src="../../assets/image/home/check_iconA.png"
          alt=""
        />
        <div class="p">{{ t("homeCheck.word_T1") }}</div>
        <div class="ul">
          <div class="li" v-for="(item, index) in dayInfo" :key="index">
            <div
              class="top"
              :class="
                item.logType == 2 ? '' : item.logType == 1 ? 'toDay' : 'noDay'
              "
            >
              <img src="../../assets/image/home/check_iconB.png" alt="" />
              <div>0.1</div>
              <div>{{ item.logType == 2 ? item.amount : item.frozen }}xp</div>
            </div>
            <div class="name">
              {{
                item.logType == 2
                  ? t("homeCheck.word_T2")
                  : item.logType == 1
                  ? t("homeCheck.word_T3")
                  : t("homeCheck.word_T4") +
                    Number(index + 1) +
                    t("homeCheck.word_T5")
              }}
            </div>
          </div>
        </div>
        <div class="check_button">
          <el-button :loading="loading" @click="getSignDaysInfoS">{{
            pid == 0
              ? "--"
              : pid == 1
              ? t("homeCheck.word_T6")
              : t("homeCheck.word_T7")
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showToast } from "vant";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { getCurrentInstance } from "vue";
import { onMounted, ref, watch } from "vue";
import { errorInfo } from "../../utils/error";
import { getSignDaysInfo, userInfos } from "../../api/get";
import YUMOController_abi from "../../abi/YUMOController_abi.json";

const { t } = useI18n();
const store = useStore();
const router = useRouter();
const instance = getCurrentInstance();

const pid = ref(0);
const userList = ref({});
const dayInfo = ref([]);
const loading = ref(false);

const getUserInfos = () => {
  userInfos(store.getters.account).then((res) => {
    if (res.data.code === 200) {
      const list = res.data.result.assetLst;
      for (var i = 0; i < list.length; i++) {
        if (list[i].asset == "YUMO") {
          userList.value = list[i];
        }
      }
    }
  });
};

const getSignDaysInfoS = () => {
  getSignDaysInfo().then((res) => {
    if (res.data.code === 200) {
      dayInfo.value = res.data.result.slice(-7).reverse();

      const day = new Date().toISOString().split("T")[0];
      for (var i = 0; i < dayInfo.value.length; i++) {
        let time = Date.parse(dayInfo.value[i].createTime);
        let times = Date.parse(day);
        if (time == times) {
          pid.value = dayInfo.value[i].logType;
        }
      }
    }
  });
};

const goTo = (value) => {
  router.push(value);
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    getUserInfos();
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeCheck {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 20px 20px 100px;
    margin: auto;
    .container_check {
      .return {
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
      .balance {
        margin-top: 35px;
        margin-left: 25px;
        margin-bottom: 10px;
        > div:nth-child(1) {
          font-weight: bold;
          font-size: 14px;
          color: #000000;
          font-family: "jtFont";
        }
        > div:nth-child(2) {
          font-weight: bold;
          font-size: 24px;
          color: #000000;
          font-family: "jtFont";
        }
      }
      .frame {
        width: 100%;
        height: auto;
        background: #fff7dd;
        border-radius: 25px;
        border: 2px solid #000000;
        padding: 20px 12px;
        position: relative;
        .checkImg {
          position: absolute;
          top: -100px;
          right: 15px;
          width: 176px;
          height: 132px;
        }
        .p {
          padding: 0 8px;
          font-weight: bold;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 15px;
          position: relative;
        }
        .ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          gap: 4px;
          .li {
            text-align: center;
            .top {
              width: 100%;
              height: auto;
              background: #cdffdd;
              border-radius: 15px;
              border: 2px solid #27ff85;
              padding: 4px 0 6px;
              > img {
                width: 20px;
                height: 20px;
              }
              > div {
                font-weight: bold;
                font-size: 10px;
                color: #000000;
                font-family: "jtFont";
              }
            }
            .toDay {
              background: #ffd026;
              border: 2px solid #000000;
            }
            .noDay {
              background: #ede2bd;
              border: 2px solid #c9bd97;
              > div {
                color: #c9bd97;
              }
            }
            .name {
              margin-top: 5px;
              font-weight: bold;
              font-size: 10px;
              color: #000000;
              font-family: "jtFont";
            }
          }
        }
        .check_button {
          margin-top: 20px;
          padding: 0 8px;
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