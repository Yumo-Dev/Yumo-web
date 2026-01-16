<template>
  <div class="gamesStart">
    <van-overlay :show="gamesStartShow">
      <div class="container_games">
        <div class="content_games">
          <div class="title">{{ $t("gamesStart.word_T1") }}</div>
          <img
            class="close"
            @click="$emit('overlayClose', false)"
            src="../../assets/image/un/close.png"
            alt=""
          />
          <div class="h1">{{ $t("gamesStart.word_T2") }}</div>
          <div class="h2">1 {{ $t("gamesStart.word_T3") }}</div>
          <div class="h3">
            {{ $t("gamesStart.word_T4") }}
          </div>
          <el-button
            :loading="loadingStare"
            @click="$emit('goTo', '/games-mode')"
            >{{ $t("gamesStart.word_T5") }}</el-button
          >
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  loadingStare: {
    type: Boolean,
    default: false,
  },
  gamesStartShow: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["overlayClose", "goTo"]);
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .gamesStart {
    .van-overlay {
      z-index: 999;
      background: rgba($color: #000000, $alpha: 0.5);
      .container_games {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        max-width: 750px;
        margin: 0 auto;
        padding: 0 20px;
        .content_games {
          min-height: 260px;
          background: #fffbf0;
          border-radius: 30px;
          padding: 25px 24px 25px;
          position: relative;
          text-align: center;
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
          .h1 {
            margin-top: 30px;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .h2 {
            font-weight: bold;
            font-size: 16px;
            color: #ff5f56;
            font-family: "jtFont";
          }
          .h3 {
            margin-top: 25px;
            margin-bottom: 25px;
            padding: 0 35px;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
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