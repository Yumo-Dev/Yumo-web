<template>
  <div class="tasksIssueATask">
    <div class="container_tasks">
      <img
        class="return"
        @click="goTo('/tasks')"
        src="../../assets/image/un/return.png"
        alt=""
      />
      <div class="content_tasks">
        <div class="p">{{ t("tasksDetail.word_T1") }}</div>
        <div class="tasks_input">
          <el-input v-model="valueS"></el-input>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T1") }}</div>
        <div class="tasks_input">
          <el-input v-model="valueA"></el-input>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T2") }}</div>
        <div class="tasks_input">
          <el-input v-model="valueB"></el-input>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T3") }}</div>
        <div class="tasks_input">
          <el-input
            type="number"
            v-model="valueC"
            :disabled="valueDisabled"
            @input="changeConvert"
          >
            <template #suffix>
              <el-button
                :disabled="valueDisabled"
                :loading="loadingA1 || loadingA2"
                @click="payNow"
                >{{
                  loadingA1
                    ? "--"
                    : !valueC
                    ? t("tasksIssueATask.word_T4")
                    : Number(valueC) > Number(approveValue) ||
                      Number(approveValue) == 0
                    ? t("tasksIssueATask.word_T5")
                    : t("tasksIssueATask.word_T4")
                }}</el-button
              >
            </template>
          </el-input>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T7") }}</div>
        <div class="tasks_text">
          {{ valueD }}
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T8") }}</div>
        <div class="tasks_input">
          <el-input v-model="valueE"></el-input>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T9") }}</div>
        <div class="tasks_input">
          <el-input type="number" v-model="valueF"></el-input>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T10") + "(UTC+0)" }}</div>
        <div class="tasks_input" @click="showStartTime = true">
          <div class="time">{{ valueG }}</div>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T11") + "(UTC+0)" }}</div>
        <div class="tasks_input" @click="ifShowEnd">
          <div class="time">{{ valueH }}</div>
        </div>
        <div class="p">{{ t("tasksIssueATask.word_T12") }}</div>
        <div class="tasks_input">
          <el-input type="textarea" v-model="valueI"></el-input>
        </div>
        <div class="tasks_button">
          <el-button
            :loading="loadingA3"
            @click="setProjectjobAdd"
            >{{ t("tasksIssueATask.word_T13") }}</el-button
          >
        </div>
      </div>
    </div>

    <startTime
      v-if="showStartTime"
      :showStartTime="showStartTime"
      @getParameterA="getParameterA"
      @popupClose="popupClose"
    ></startTime>

    <endTime
      v-if="showEndTime"
      :startA="startA"
      :startB="startB"
      :showEndTime="showEndTime"
      @getParameterB="getParameterB"
      @popupClose="popupClose"
    ></endTime>
  </div>
</template>

<script setup>
import { ethers } from "ethers";
import { useStore } from "vuex";
import { showToast } from "vant";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { BigNumber } from "bignumber.js";
import { getCurrentInstance } from "vue";
import { errorInfo } from "../../utils/error";
import { showAddress8 } from "../../utils/index";
import { multiplyByPowerOfTen } from "../../utils/index";
import { projectjobid, projectjobAdd } from "../../api/post";
import token_abi from "../../abi/token_abi.json";
import YumoERC721_abi from "../../abi/YumoERC721_abi.json";
import YUMOController_abi from "../../abi/YUMOController_abi.json";
import startTime from "../../components/popup/startTime.vue";
import endTime from "../../components/popup/endTime.vue";

const { t } = useI18n();
const store = useStore();
const router = useRouter();
const instance = getCurrentInstance();

const valueS = ref("");
const valueA = ref("");
const valueB = ref("");
const valueC = ref("");
const valueD = ref(0);
const valueE = ref("");
const valueF = ref("");
const valueG = ref("");
const valueH = ref("");
const valueI = ref("");
const hash = ref("");
const jobId = ref(null);
const convert = ref(0);
const startA = ref("");
const startB = ref("");
const proUsdtMap = ref(0);
const balanceU = ref(0);
const approveValue = ref(0);
const loadingA1 = ref(false);
const loadingA2 = ref(false);
const loadingA3 = ref(false);
const valueDisabled = ref(false);
const showStartTime = ref(false);
const showEndTime = ref(false);

const goTo = (value) => {
  router.push(value);
};

const goToBSC = () => {
  if (hash.value) {
    window.open(
      `${import.meta.env.VITE_CONTRACT_EXPLORE}tx/${hash.value}`,
      "_blank"
    );
  }
};

const popupClose = (value) => {
  showStartTime.value = value;
  showEndTime.value = value;
};

const getParameterA = (valueA, valueB) => {
  showStartTime.value = false;
  startA.value = valueA;
  startB.value = valueB;
  valueG.value = valueA + " " + valueB;
  valueH.value = "";
};

const ifShowEnd = () => {
  if (!valueG.value) {
    showToast(t("tasksIssueATask.word_T14"));
    return;
  }
  showEndTime.value = true;
};

const getParameterB = (value) => {
  showEndTime.value = false;
  valueH.value = value;
};

const changeConvert = (value) => {
  if (value) {
    if (convert.value) {
      let a = BigNumber(value);
      let b = BigNumber(convert.value);
      let times = a.times(b).toNumber();
      valueD.value = times;
    }
  } else {
    valueD.value = 0;
  }
};

const setProjectjobid = () => {
  projectjobid().then((res) => {
    if (res.data.code === 200) {
      jobId.value = res.data.result.id;
      convert.value = res.data.result.oneU2Yumo;
      getProjectUsdtMap(res.data.result.id);
    }
  });
};

const getProjectUsdtMap = (id) => {
  instance.appContext.config.globalProperties
    .$getContract(
      import.meta.env.VITE_CONTRACT_TEST,
      YUMOController_abi,
      "projectUsdtMap",
      id
    )
    .then((res) => {
      console.log("USDT", ethers.utils.formatUnits(res, 18));
      const usdtMap = Number(ethers.utils.formatUnits(res, 18));
      proUsdtMap.value = usdtMap;
      if (usdtMap != 0) {
        hash.value = "0x0";
        valueC.value = usdtMap;
        valueDisabled.value = true;
        let a = BigNumber(ethers.utils.formatUnits(res, 18));
        let b = BigNumber(convert.value);
        let times = a.times(b).toNumber();
        valueD.value = times;
      }
    });
};

const getBalance = () => {
  instance.appContext.config.globalProperties
    .$getContract(
      import.meta.env.VITE_CURRENCY_USDT,
      YumoERC721_abi,
      "balanceOf",
      store.getters.account
    )
    .then((res) => {
      console.log("balance", ethers.utils.formatUnits(res, 18));
      balanceU.value = ethers.utils.formatUnits(res, 18);
      tokenAllowance();
    });
};

const tokenAllowance = () => {
  instance.appContext.config.globalProperties
    .$getContract(
      import.meta.env.VITE_CURRENCY_USDT,
      token_abi,
      "allowance",
      store.getters.account,
      import.meta.env.VITE_CONTRACT_TEST
    )
    .then((allowance) => {
      approveValue.value = ethers.utils.formatUnits(allowance.toString(), 18);
      loadingA1.value = false;
    })
    .catch((err) => {
      loadingA1.value = false;
    });
};

const payNow = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    if (!valueC.value || valueC.value == 0) return;
    if (Number(valueC.value) <= Number(approveValue.value)) {
      if (Number(valueC.value) > Number(balanceU.value)) {
        showToast(t("plazaNft.word_T18"));
        return;
      } else {
        loadingA2.value = true;
        setProjectUsdt();
      }
    } else {
      setApprove();
    }
  }
};

const setApprove = () => {
  loadingA2.value = true;
  const BigNumbers = ethers.utils.parseUnits(valueC.value.toString(), 18);
  const customGasSettings = {
    maxPriorityFeePerGas: ethers.utils.parseUnits("1.5", "gwei"), 
    maxFeePerGas: ethers.utils.parseUnits("30", "gwei"), 
  };
  instance.appContext.config.globalProperties
    .$estimateGas(
      import.meta.env.VITE_CURRENCY_USDT,
      token_abi,
      "approve",
      import.meta.env.VITE_CONTRACT_TEST,
      BigNumbers,
      customGasSettings
    )
    .then((estimateGas) => {
      let overrides = {
        gasLimit: estimateGas.mul(120).div(100),
        ...customGasSettings,
      };
      instance.appContext.config.globalProperties
        .$getWriteContractLoad(
          import.meta.env.VITE_CURRENCY_USDT,
          token_abi,
          "approve",
          import.meta.env.VITE_CONTRACT_TEST,
          BigNumbers,
          overrides
        )
        .then((res) => {
          if (res.logs.length) {
            showToast(t("plazaNft.word_T19"));
            loadingA2.value = true;
            tokenAllowance();
          } else {
            showToast(t("plazaNft.word_T20"));
          }
          loadingA2.value = false;
        })
        .catch((err) => {
          loadingA2.value = false;
          showToast(t("plazaNft.word_T21"));
        });
    })
    .catch((err) => {
      loadingA2.value = false;
      showToast(t(`errorInfo.${errorInfo(err)}`));
    });
};

const setProjectUsdt = () => {
  const _usdtAmt = ethers.utils.parseUnits(valueC.value.toString(), 18);
  const customGasSettings = {
    maxPriorityFeePerGas: ethers.utils.parseUnits("1.5", "gwei"), 
    maxFeePerGas: ethers.utils.parseUnits("30", "gwei"),
  };
  instance.appContext.config.globalProperties
    .$estimateGas(
      import.meta.env.VITE_CONTRACT_TEST,
      YUMOController_abi,
      "projectUsdt",
      jobId.value,
      _usdtAmt,
      customGasSettings
    )
    .then((estimateGas) => {
      let overrides = {
        gasLimit: estimateGas.mul(120).div(100),
        ...customGasSettings,
      };
      instance.appContext.config.globalProperties
        .$getWriteContractLoad(
          import.meta.env.VITE_CONTRACT_TEST,
          YUMOController_abi,
          "projectUsdt",
          jobId.value,
          _usdtAmt,
          overrides
        )
        .then((res) => {
          if (res.logs.length) {
            valueDisabled.value = true;
            hash.value = res.transactionHash;
            showToast(t("tasksIssueATask.word_T15"));
          } else {
            showToast(t("tasksIssueATask.word_T16"));
          }
          loadingA2.value = false;
        })
        .catch((err) => {
          loadingA2.value = false;
          showToast(t(`errorInfo.${errorInfo(err)}`));
        });
    })
    .catch((err) => {
      loadingA2.value = false;
      showToast(t(`errorInfo.${errorInfo(err)}`));
    });
};

const setProjectjobAdd = () => {
  loadingA3.value = true;
  const usdtNum = multiplyByPowerOfTen(valueC.value, 18);
  let data = {
    projectName: valueS.value,
    twitter: valueA.value, 
    telegram: valueB.value, 
    usdtNum: usdtNum, 
    hash: hash.value, 
    jobName: valueE.value, 
    memberNum: valueF.value, 
    startTime: valueG.value,
    endTime: valueH.value,
    remark: valueI.value,
    jobId: jobId.value,
  };
  projectjobAdd(data).then((res) => {
    if (res.data.code === 200) {
      showToast({
        message: t("tasksIssueATask.word_T17"),
        duration: 4000,
      });
      valueS.value = "";
      valueA.value = "";
      valueB.value = "";
      valueC.value = "";
      valueD.value = "";
      valueE.value = "";
      valueF.value = "";
      valueG.value = "";
      valueH.value = "";
      valueI.value = "";
      hash.value = "";
      setProjectjobid();
      valueDisabled.value = false;
      setTimeout(() => {
        goTo("/tasks");
      }, 4000);
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
    }
    loadingA3.value = false;
  });
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    loadingA1.value = true;
    getBalance();
    setProjectjobid();
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .tasksIssueATask {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 20px 20px 100px;
    margin: auto;
    .container_tasks {
      .return {
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
      .content_tasks {
        margin-top: 20px;
        .p {
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
        .tasks_input {
          margin-bottom: 15px;
          .time {
            width: 100%;
            height: 45px;
            background: #fff7dd;
            border-radius: 15px;
            border: 2px solid #000000;
            padding: 0 15px;
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .el-input {
            .el-input__wrapper {
              width: 100%;
              height: 45px;
              background: #fff7dd;
              border-radius: 15px;
              border: 2px solid #000000;
              padding: 0 15px;
              .el-input__inner {
                width: 100%;
                height: 100%;
                font-weight: bold;
                font-size: 12px;
                color: #000000;
                font-family: "jtFont";
              }
              .el-input__suffix {
                .el-input__suffix-inner {
                  .el-button {
                    border: 0;
                    padding: 0 15px;
                    height: 32px;
                    background: #27ff85;
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
            .el-input__wrapper.is-focus {
              box-shadow: none;
            }
          }
          .el-textarea {
            .el-textarea__inner {
              width: 100%;
              height: 100px;
              background: #fff7dd;
              border-radius: 15px;
              border: 2px solid #000000;
              padding: 10px 15px;
              font-weight: bold;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
            }
            .el-textarea__inner:focus {
              box-shadow: none;
            }
          }
        }
        .tasks_text {
          width: 100%;
          height: 45px;
          background: #fff7dd;
          border-radius: 15px;
          border: 2px solid #000000;
          padding: 0 15px;
          display: flex;
          align-items: center;
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 15px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .tasks_button {
          margin-top: 30px;
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
    .van-overlay {
      min-width: 320px;
      max-width: 750px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
</style>