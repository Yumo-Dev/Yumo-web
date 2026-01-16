<template>
  <div class="homeModify">
    <van-overlay :show="homeModifyShow">
      <div class="container_name">
        <div class="content_name">
          <div class="title">{{ t("homeModify.word_T1") }}</div>
          <img
            class="close"
            @click="$emit('overlayClose')"
            src="../../assets/image/un/close.png"
            alt=""
          />
          <div class="p">{{ showText() }}</div>
          <div class="modify_button">
            <el-button @click="setConfirm">{{
              t("gamesStart.word_T5")
            }}</el-button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import { defineProps, ref } from "vue";
import { BigNumber } from "bignumber.js";

const { t } = useI18n();

const props = defineProps({
  homeModifyShow: {
    type: Boolean,
    default: false,
  },
  initAccount: {
    type: Object,
    default: false,
  },
});

const emit = defineEmits(["overlayClose", "initAccount"]);

const showText = () => {
  let parameterA = BigNumber(props.initAccount.active);
  let parameterB = BigNumber(1);
  let parameterC = BigNumber(props.initAccount.arrIndex);
  let minus = parameterA.minus(parameterB).minus(parameterC).toNumber();
  if (minus > 0) {
    return t("homeModify.word_T2") + minus + t("homeModify.word_T3");
  } else {
    return t("homeModify.word_T4");
  }
};

const setConfirm = () => {
  emit("overlayClose", 1);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeModify {
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
          min-height: 180px;
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
          .p {
            margin-top: 40px;
            font-weight: bold;
            font-size: 12px;
            color: #000;
            font-family: "jtFont";
            text-align: center;
          }
          .modify_button {
            margin-top: 40px;
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