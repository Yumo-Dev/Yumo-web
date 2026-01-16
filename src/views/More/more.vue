<template>
  <div class="more">
    <div class="more_container">
      <div class="container_ul">
        <div class="container_li">
          <div class="li_left">
            <div class="li_h1">{{ t("more.word_T1") }}</div>
            <div class="li_h2">{{ t("more.word_T2") }}</div>
            <el-button class="li_btn1" @click="goTo('')">{{
              t("more.word_T3")
            }}</el-button>
          </div>
          <img
            class="li_iconA1"
            src="../../assets/image/more/iconA1.png"
            alt=""
          />
        </div>
        <div class="container_li">
          <div class="li_left">
            <div class="li_h1">{{ t("more.word_T4") }}</div>
            <div class="li_h2">{{ t("more.word_T5") }}</div>
            <el-button class="li_btn2" @click="goTo('')">{{
              t("more.word_T6")
            }}</el-button>
          </div>
          <img
            class="li_iconA2"
            src="../../assets/image/more/iconA2.png"
            alt=""
          />
        </div>
        <div class="container_li">
          <div class="li_left">
            <div class="li_h1">{{ t("more.word_T7") }}</div>
            <div class="li_h2">{{ t("more.word_T8") }}</div>
            <el-button class="li_btn3" @click="goTo('')">{{
              t("more.word_T9")
            }}</el-button>
          </div>
          <img
            class="li_iconA3"
            src="../../assets/image/more/iconA3.png"
            alt=""
          />
        </div>
        <div class="container_li">
          <div class="li_left">
            <div class="li_h1">{{ t("more.word_T10") }}</div>
            <div class="li_h2">{{ t("more.word_T11") }}</div>
            <el-button class="li_btn4" @click="goTo('home-check')">{{
              t("more.word_T12")
            }}</el-button>
          </div>
          <img
            class="li_iconA4"
            src="../../assets/image/more/iconA4.png"
            alt=""
          />
        </div>
        <div class="container_li">
          <div class="li_left">
            <div class="li_h1">{{ t("more.word_T13") }}</div>
            <div class="li_h2">{{ t("more.word_T14") }}</div>
            <el-button class="li_btn5" @click="goTo('')">{{
              t("more.word_T15")
            }}</el-button>
          </div>
          <img
            class="li_iconA5"
            src="../../assets/image/more/iconA5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showToast } from "vant";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const goTo = (value) => {
  showToast(t("under"));
  return;
  router.push(value);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .more {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 80px 0 80px;
    margin: auto;
    .more_container {
      height: 100%;
      padding: 0 20px 20px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .container_ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        .container_li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 110px;
          background: #fff7dd;
          border-radius: 15px;
          border: 2px solid #000000;
          padding: 15px 20px 20px 15px;
          .li_left {
            margin-right: 13px;
            .li_h1 {
              font-weight: bold;
              font-size: 14px;
              color: #000000;
              font-family: "jtFont";
            }
            .li_h2 {
              margin-top: 10px;
              margin-bottom: 10px;
              font-weight: bold;
              font-size: 12px;
              color: #000000;
              font-family: "jtFont";
            }
            .el-button {
              padding: 0 10px;
              height: 25px;
              border-radius: 15px;
              border: 2px solid #000000;
              span {
                font-weight: bold;
                font-size: 10px;
                color: #000000;
                font-family: "jtFont";
              }
              &.li_btn1 {
                background: #ffbd2f;
              }
              &.li_btn2 {
                background: #27ff85;
              }
              &.li_btn3 {
                background: #4d9fff;
              }
              &.li_btn4 {
                background: #9d7cff;
              }
              &.li_btn5 {
                background: #ff4d4d;
              }
            }
          }
          .li_iconA1 {
            width: 83px;
            height: auto;
          }
          .li_iconA2 {
            width: 80px;
            height: auto;
          }
          .li_iconA3 {
            width: 74px;
            height: auto;
          }
          .li_iconA4 {
            width: 74px;
            height: auto;
          }
          .li_iconA5 {
            width: 64px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>