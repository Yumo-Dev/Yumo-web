<template>
  <div class="tasksBind">
    <van-overlay :show="tasksBindShow">
      <div class="container_name">
        <div class="content_name">
          <div class="title">{{ t("tasksBind.word_T1") }}</div>
          <img
            class="close"
            @click="$emit('overlayClose')"
            src="../../assets/image/un/close.png"
            alt=""
          />
          <div class="modify_input">
            <el-input
              v-model="valueA"
              maxlength="50"
              :placeholder="t('tasksBind.word_T2')"
              :disabled="Boolean(initAccount.twitter)"
            ></el-input>
            <div class="p"></div>
            <el-input
              v-model="valueB"
              maxlength="50"
              :placeholder="t('tasksBind.word_T3')"
              :disabled="Boolean(initAccount.telegram)"
            ></el-input>
          </div>
          <div class="modify_button">
            <el-button
              :disabled="
                !valueA ||
                !valueB ||
                Boolean(initAccount.twitter) ||
                Boolean(initAccount.telegram)
              "
              :loading="loading"
              @click="getChangeName"
              >{{ t("tasksBind.word_T4") }}</el-button
            >
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { showToast, Toast } from "vant";
import { defineEmits, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { defineProps, ref } from "vue";
import { setTelegram, setTwitter } from "../../api/post";

const { t } = useI18n();

const props = defineProps({
  tasksBindShow: {
    type: Boolean,
    default: false,
  },
  initAccount: {
    type: Object,
    default: false,
  },
});

const emit = defineEmits(["overlayClose", "initAccount"]);

const valueA = ref("");
const valueB = ref("");
const loading = ref(false);

const getChangeName = () => {
  if (
    !localStorage.getItem("Token-YUMO") &&
    !localStorage.getItem("Account-YUMO")
  )
    return;
  const valueAs = valueA.value.slice(0, 1);
  const valueBs = valueB.value.slice(0, 1);
  if (valueAs != "@" || valueBs != "@") {
    showToast(t("tasksBind.word_T5"));
    return;
  }
  loading.value = true;
  setTwitters();
};

const setTwitters = () => {
  let data = {
    twitter: valueA.value,
  };
  setTwitter(data).then((res) => {
    if (res.data.code === 200) {
      setTelegrams();
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
      loading.value = false;
    }
  });
};

const setTelegrams = () => {
  let data = {
    telegram: valueB.value,
  };
  setTelegram(data).then((res) => {
    if (res.data.code === 200) {
      showToast(t("tasksBind.word_T6"));
      emit("overlayClose", 1);
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
    }
    loading.value = false;
  });
};

onMounted(() => {
  valueA.value = props.initAccount.telegram;
  valueB.value = props.initAccount.twitter;
});
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .tasksBind {
    .van-overlay {
      z-index: 999;
      background: rgba($color: #000000, $alpha: 0.5);
      .container_name {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        max-width: 750px;
        margin: 0 auto;
        padding: 0 20px;
        .content_name {
          min-height: 270px;
          background: #fffbf0;
          border-radius: 30px;
          padding: 25px 24px 30px;
          position: relative;
          .close {
            position: absolute;
            top: 23px;
            right: 24px;
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
          .title {
            font-weight: bold;
            font-size: 16px;
            color: #000000;
            font-family: "jtFont";
            text-align: center;
          }
          .modify_input {
            margin-top: 20px;
            .el-input {
              .el-input__wrapper {
                width: 100%;
                height: 58px;
                background: #fff7dd;
                border-radius: 10px;
                border: 2px solid #000000;
                padding: 0 10px;
                .el-input__inner {
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  font-weight: bold;
                  font-size: 12px;
                  color: #000;
                  font-family: "jtFont";
                }
                .el-input__inner::placeholder {
                  color: #c9bd97;
                }
              }
              .el-input__wrapper.is-focus {
                box-shadow: none;
              }
            }
            .p {
              margin-top: 15px;
              font-weight: bold;
              font-size: 12px;
              color: #000;
              font-family: "jtFont";
              text-align: center;
            }
          }
          .modify_button {
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
                color: #000;
                font-family: "jtFont";
              }
            }
          }
        }
      }
    }
  }
}
</style>