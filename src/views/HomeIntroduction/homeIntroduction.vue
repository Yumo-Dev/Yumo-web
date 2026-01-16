<template>
  <div class="homeIntroduction">
    <div class="container_home">
      <img
        class="return"
        @click="goTo('-1')"
        src="../../assets/image/un/return.png"
        alt=""
      />
      <div class="h1">{{ $t("homeIntroduction.word_T1") }}</div>
      <div class="li_frame A1">
        <img class="iconA" src="../../assets/image/home/EngineA1.png" alt="" />
        <div class="h2">{{ $t("homeIntroduction.word_T2") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T3") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T4") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T5") }}</div>
      </div>
      <div class="line"></div>
      <div class="li_frame A2">
        <img class="iconB" src="../../assets/image/home/EngineA2.png" alt="" />
        <div class="h2">{{ $t("homeIntroduction.word_T6") }}</div>
        <div class="p">
          {{ $t("homeIntroduction.word_T7") }}
        </div>
        <div class="p">{{ $t("homeIntroduction.word_T8") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T9") }}</div>
      </div>
      <div class="line"></div>
      <div class="li_frame A3">
        <img class="iconC" src="../../assets/image/home/EngineA3.png" alt="" />
        <div class="h2">{{ $t("homeIntroduction.word_T10") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T11") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T12") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T13") }}</div>
      </div>
      <div class="line"></div>
      <div class="li_frame A4">
        <img class="iconD" src="../../assets/image/home/EngineA4.png" alt="" />
        <div class="h2">{{ $t("homeIntroduction.word_T14") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T15") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T16") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T17") }}</div>
      </div>
      <div class="line"></div>
      <div class="li_frame A5">
        <img class="iconE" src="../../assets/image/home/EngineA5.png" alt="" />
        <div class="h2">{{ $t("homeIntroduction.word_T18") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T19") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T20") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T21") }}</div>
        <div class="p">{{ $t("homeIntroduction.word_T22") }}</div>
      </div>
      <div class="line"></div>
      <div class="h5 mt">{{ $t("homeIntroduction.word_T23") }}</div>
      <div class="h5">{{ $t("homeIntroduction.word_T24") }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (value) => {
  if (value == -1) {
    router.go(value);
  } else {
    router.push(value);
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .homeIntroduction {
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
      .h1 {
        margin-top: 25px;
        text-align: center;
        font-weight: normal;
        font-size: 16px;
        color: #000000;
        font-family: "jtFont";
      }
      .li_frame {
        position: relative;
        .iconA {
          position: absolute;
          top: 33px;
          right: 0;
          width: 99px;
          height: 71px;
        }
        .iconB {
          position: absolute;
          top: 33px;
          right: 0;
          width: 120px;
          height: 53px;
        }
        .iconC {
          position: absolute;
          top: 15px;
          right: 0;
          width: 125px;
          height: 51px;
        }
        .iconD {
          position: absolute;
          top: 22px;
          right: 0;
          width: 117px;
          height: 51px;
        }
        .iconE {
          position: absolute;
          top: 15px;
          right: 0;
          width: 92px;
          height: 58px;
        }
        .h2 {
          font-weight: normal;
          font-size: 16px;
          color: #000000;
          font-family: "jtFont";
          margin-bottom: 10px;
          position: relative;
        }
        .p {
          font-weight: normal;
          font-size: 14px;
          color: #000000;
          font-family: "jtFont";
        }
      }
      .A1 {
        padding: 85px 0 25px;
      }
      .A2 {
        padding: 70px 0 40px;
      }
      .A3 {
        padding: 40px 0;
      }
      .A4 {
        padding: 53px 0 40px;
      }
      .A5 {
        padding: 43px 0;
      }
      .line {
        width: 100%;
        height: 1px;
        background: #000000;
      }
      .mt {
        margin-top: 25px;
      }
      .h5 {
        text-align: center;
        font-weight: normal;
        font-size: 16px;
        color: #000000;
        font-family: "jtFont";
      }
    }
  }
}
</style>