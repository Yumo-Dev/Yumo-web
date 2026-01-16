<template>
  <div class="homeExplain">
    <van-overlay :show="homeExplainShow">
      <div class="container_home">
        <div class="content_home">
          <div class="title">{{ $t("homeExplain.word_T1") }}</div>
          <img
            class="close"
            @click="$emit('overlayClose', false)"
            src="../../assets/image/un/close.png"
            alt=""
          />
          <div class="p">{{ $t("homeExplain.word_T2") }}</div>
          <div class="t1">
            <div class="h1">
              {{ $t("homeExplain.word_T3") }}
            </div>
            <div class="h1">{{ $t("homeExplain.word_T4") }}</div>
            <div class="h1">{{ $t("homeExplain.word_T5") }}</div>
          </div>
          <div class="p">{{ $t("homeExplain.word_T6") }}</div>
          <div class="t1">
            <div class="h1">{{ $t("homeExplain.word_T7") }}</div>
            <div class="h1">
              {{ $t("homeExplain.word_T8") }}
            </div>
            <div class="h1">{{ $t("homeExplain.word_T9") }}</div>
            <div class="h1">
              {{ $t("homeExplain.word_T10") }}
            </div>
          </div>
          <div class="p">{{ $t("homeExplain.word_T11") }}</div>
          <div class="t1">
            <div class="h1">
              {{ $t("homeExplain.word_T12") }}
            </div>
            <div class="h1">① {{ $t("homeExplain.word_T13") }}</div>
            <div class="h1">{{ $t("homeExplain.word_T14") }}</div>
            <div class="h1">② {{ $t("homeExplain.word_T15") }}</div>
            <div class="h1">{{ $t("homeExplain.word_T16") }}</div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  homeExplainShow: Boolean,
});

defineEmits(["overlayClose"]);
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeExplain {
    .van-overlay {
      z-index: 999;
      background: rgba($color: #000000, $alpha: 0.5);
      .container_home {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        max-width: 750px;
        margin: 0 auto;
        padding: 0 20px;
        .content_home {
          min-height: 480px;
          background: #fffbf0;
          border-radius: 30px;
          padding: 25px 24px 25px;
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
            margin-bottom: 25px;
          }
          .p {
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
            margin-bottom: 8px;
          }
          .t1 {
            margin-bottom: 20px;
            .h1 {
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