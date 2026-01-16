<template>
  <div class="footer">
    <div class="footer_container">
      <div class="container_icon">
        <div class="icon" @click="goToLink(1)">
          <img src="../assets/image/un/icon1A.png" alt="" />
        </div>
        <div class="icon" @click="goToLink(2)">
          <img src="../assets/image/un/icon2A.png" alt="" />
        </div>
        <div class="icon" @click="goToLink(3)">
          <img src="../assets/image/un/icon3A.png" alt="" />
        </div>
      </div>
      <div class="container_title">
        <div class="p" @click="smooth('about')">
          {{ $t("pcHeader.word_T1") }}
        </div>
        <div class="p" @click="smooth('core')">
          {{ $t("pcHeader.word_T2") }}
        </div>
        <div class="p" @click="smooth('momo')">
          {{ $t("pcHeader.word_T3") }}
        </div>
        <div class="p" @click="smooth('ecosystem')">
          {{ $t("pcHeader.word_T4") }}
        </div>
        <div class="p" @click="smooth('tokenomics')">
          {{ $t("pcHeader.word_T5") }}
        </div>
        <div class="p" @click="smooth('roadmap')">
          {{ $t("pcHeader.word_T6") }}
        </div>
      </div>
      <div class="container_c">{{ $t("pcHeader.word_T7") }}</div>
    </div>
  </div>
</template>

<script setup>
import { eventBus } from "@/utils/eventBus";

const smooth = (sectionId) => {
  eventBus.emit("scroll-to-section", sectionId);
};

const goToLink = (value) => {
  if (value == 1) {
    window.open("https://x.com/yumo_ai", "_blank");
  }
  if (value == 2) {
    window.open("https://t.me/YUMOOfficialGroup", "_blank");
  }
  if (value == 3) {
    window.open("https://yumo-1.gitbook.io/yumo-gitbook/", "_blank");
  }
};
</script>

<style lang="scss">
.footer {
  background: #000000;
  .footer_container {
    padding: 35px 15px 30px;
    max-width: 640px;
    margin: 0 auto;
    .container_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;
      .icon {
        width: 50px;
        height: 50px;
        background: #000000;
        box-shadow: 3px 3px 0px 0px #ffd026;
        border-radius: 15px;
        border: 2px solid #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > img {
          width: 26px;
          height: auto;
        }
      }
      .icon:nth-child(2) {
        margin: 0 15px;
        box-shadow: 3px 3px 0px 0px #4e9fff;
        > img {
          width: 22px;
          height: auto;
        }
      }
      .icon:nth-child(3) {
        box-shadow: 3px 3px 0px 0px #ff4d4d;
        > img {
          width: 32px;
          height: auto;
        }
      }
    }
    .container_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      .p {
        font-size: 16px;
        color: #ffffff;
        font-weight: 700;
        font-family: "jtFont";
        cursor: pointer;
      }
    }
    .container_c {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      color: #545454;
      font-family: "jtFont";
    }
  }
}

@media (max-width: 750px) {
  .footer {
    .footer_container {
      padding: 45px 20px 25px;
      max-width: 750px;
      .container_icon {
        margin-bottom: 60px;
        .icon {
          width: 50px;
          height: 50px;
          box-shadow: 3px 3px 0px 0px #ffd026;
          border-radius: 15px;
          border: 2px solid #ffffff;
          > img {
            width: 28px;
            height: auto;
          }
        }
        .icon:nth-child(2) {
          margin: 0 15px;
          box-shadow: 3px 3px 0px 0px #4e9fff;
          > img {
            width: 24px;
            height: auto;
          }
        }
        .icon:nth-child(3) {
          box-shadow: 3px 3px 0px 0px #ff4d4d;
          > img {
            width: 32px;
            height: auto;
          }
        }
      }
      .container_title {
        display: block;
        text-align: center;
        margin-bottom: 60px;
        .p {
          font-size: 16px;
          margin-top: 25px;
        }
        .p:first-child {
          margin-top: 0;
        }
      }
      .container_c {
        font-size: 18px;
      }
    }
  }
}
</style>