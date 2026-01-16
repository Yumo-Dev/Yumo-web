<template>
  <div class="slide">
    <div class="slide_sectionA" id="yumo">
      <img class="slide_logo" src="../../assets/image/slide/logos.png" alt="" />
      <div
        class="slide_h1"
        :class="store.getters.i18nLocal == 'US' ? 'modifySlide_h1' : ''"
      >
        <div class="slide_active">{{ $t("slide.word_T1") }}</div>
        {{ $t("slide.word_T2") }}
      </div>
      <div class="slide_h2">
        {{ $t("slide.word_T3") }}
        <span class="slide_p rgbA">{{ $t("slide.word_T4") }}</span
        >、 <span class="slide_p rgbB">{{ $t("slide.word_T5") }}</span
        >、
        <span class="slide_p rgbC">{{ $t("slide.word_T6") }}</span>
        {{ $t("slide.word_T7") }}
      </div>
      <div class="slide_jump" @click="goTo('/home')">
        {{ $t("slide.word_T8") }}
        <img src="../../assets/image/slide/right.png" alt="" />
      </div>

      <div class="slide_position1">
        <img src="../../assets/image/slide/d1.png" alt="" />
      </div>
      <div class="slide_position2">
        <img src="../../assets/image/slide/d2.png" alt="" />
      </div>
      <div class="slide_position3">
        <img src="../../assets/image/slide/d3.png" alt="" />
      </div>
      <div class="slide_position4">
        <img src="../../assets/image/slide/d4.png" alt="" />
      </div>
      <div class="slide_position5">
        <img src="../../assets/image/slide/d5.png" alt="" />
      </div>
      <div class="slide_position6">
        <img src="../../assets/image/slide/d6.png" alt="" />
      </div>
    </div>

    <div class="slide_sectionB" id="about">
      <div class="slide_frameWorkA">
        <div class="slide_title">
          <div class="slide_line">
            <div class="slide_round r"></div>
            <div class="slide_round y"></div>
            <div class="slide_round g"></div>
          </div>
          <div class="slide_p">{{ $t("slide.word_T9") }}</div>
        </div>
        <div class="slide_content">
          <div class="slide_content_h1">{{ $t("slide.word_T10") }}</div>
          <div class="slide_content_text">
            {{ $t("slide.word_T11") }}
          </div>
          <div class="slide_content_icon">
            <img src="../../assets/image/slide/sectionB_photoA1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="slide_frameWorkB">
        <div class="slide_frameWorkB_container">
          <div class="slide_frameWorkB_icon">
            <img src="../../assets/image/slide/sectionB_photoA2.png" alt="" />
          </div>
          <div class="slide_frameWorkB_container_content">
            <div
              class="slide_button"
              :class="store.getters.i18nLocal == 'US' ? 'modifySlide' : ''"
            >
              {{ $t("slide.word_T12") }}
            </div>
            <div class="slide_h3">{{ $t("slide.word_T13") }}</div>
            <div class="slide_p2">❌ {{ $t("slide.word_T14") }}</div>
            <div class="slide_p2">❌ {{ $t("slide.word_T15") }}</div>
            <div class="slide_p2">❌ {{ $t("slide.word_T16") }}</div>
            <div class="slide_p2">❌ {{ $t("slide.word_T17") }}</div>
            <div class="slide_p2">❌ {{ $t("slide.word_T18") }}</div>
          </div>
          <div class="slide_text">{{ $t("slide.word_T19") }}</div>
        </div>
        <div class="slide_frameWorkB_container">
          <div class="slide_frameWorkB_icon">
            <img src="../../assets/image/slide/sectionB_photoA3.png" alt="" />
          </div>
          <div class="slide_frameWorkB_container_content">
            <div class="slide_button b1">{{ $t("slide.word_T20") }}</div>
            <div class="slide_h3">{{ $t("slide.word_T21") }}</div>
            <div class="slide_p2">✅ {{ $t("slide.word_T22") }}</div>
            <div class="slide_p2">✅ {{ $t("slide.word_T23") }}</div>
            <div class="slide_p2">✅ {{ $t("slide.word_T24") }}</div>
            <div class="slide_p2">✅ {{ $t("slide.word_T25") }}</div>
          </div>
          <div class="slide_text b2">{{ $t("slide.word_T26") }}</div>
        </div>
      </div>
    </div>

    <div
      class="slide_sectionC"
      id="core"
      :class="store.getters.i18nLocal == 'US' ? 'modifySlide_sectionC' : ''"
    >
      <div class="sectionC_content">
        <div class="sectionC_title">
          <div class="sectionC_p">{{ $t("slide.word_T27") }}</div>
        </div>
        <div class="sectionC_ul">
          <div
            class="sectionC_li"
            :class="store.getters.i18nLocal == 'US' ? 'modifySectionC_li' : ''"
          >
            <div class="li_icon">
              <img src="../../assets/image/slide/sectionC_photoA1.png" alt="" />
            </div>
            <div class="li_h1">{{ $t("slide.word_T28") }}</div>
            <div class="li_text">
              {{ $t("slide.word_T29") }}
            </div>
          </div>
          <div
            class="sectionC_li li1"
            :class="store.getters.i18nLocal == 'US' ? 'modifySectionC_li' : ''"
          >
            <div class="li_icon">
              <img
                class="iconA2"
                src="../../assets/image/slide/sectionC_photoA2.png"
                alt=""
              />
            </div>
            <div class="li_h1">{{ $t("slide.word_T30") }}</div>
            <div class="li_text">
              {{ $t("slide.word_T31") }}
            </div>
          </div>
          <div
            class="sectionC_li li2"
            :class="store.getters.i18nLocal == 'US' ? 'modifySectionC_li' : ''"
          >
            <div class="li_icon">
              <img
                class="iconA3"
                src="../../assets/image/slide/sectionC_photoA3.png"
                alt=""
              />
            </div>
            <div class="li_h1">{{ $t("slide.word_T32") }}</div>
            <div class="li_text">
              {{ $t("slide.word_T33") }}
            </div>
          </div>
          <div
            class="sectionC_li li3"
            :class="store.getters.i18nLocal == 'US' ? 'modifySectionC_li' : ''"
          >
            <div class="li_icon">
              <img
                class="iconA2"
                src="../../assets/image/slide/sectionC_photoA4.png"
                alt=""
              />
            </div>
            <div class="li_h1">{{ $t("slide.word_T34") }}</div>
            <div class="li_text">
              {{ $t("slide.word_T35") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide_sectionD" id="momo">
      <div class="sectionD_content">
        <div class="sectionD_h1">{{ $t("slide.word_T36") }}</div>
        <div class="sectionD_h2">{{ $t("slide.word_T37") }}</div>
        <div class="sectionD_frame">
          <div class="frame_p">{{ $t("slide.word_T38") }}</div>
          <div class="frame_p">✨ {{ $t("slide.word_T39") }}</div>
          <div class="frame_p">📈 {{ $t("slide.word_T40") }}</div>
          <div class="frame_p">🤖 {{ $t("slide.word_T41") }}</div>
          <div class="frame_p">💎 {{ $t("slide.word_T42") }}</div>
          <div class="frame_p">💰 {{ $t("slide.word_T43") }}</div>
          <div class="frame_iconA">
            <img src="../../assets/image/slide/sectionD_photoA.png" alt="" />
          </div>
          <div class="frame_iconB">
            <img src="../../assets/image/slide/sectionD_photoB.png" alt="" />
          </div>
        </div>
        <div class="sectionD_iconA">
          <img src="../../assets/image/slide/sectionD_photoA.png" alt="" />
        </div>
        <div class="sectionD_iconB">
          <img src="../../assets/image/slide/sectionD_photoB.png" alt="" />
        </div>
        <div
          class="sectionD_button"
          :class="store.getters.i18nLocal == 'US' ? 'modifySectionD' : ''"
          @click="goTo('/home')"
        >
          {{ $t("slide.word_T44") }}
        </div>
      </div>
    </div>

    <div
      class="slide_sectionE"
      id="ecosystem"
      :class="store.getters.i18nLocal == 'US' ? 'modifySlide_sectionE' : ''"
    >
      <div class="sectionE_content">
        <div class="sectionE_title">
          <div class="sectionE_p">{{ $t("slide.word_T45") }}</div>
        </div>
        <div class="sectionE_h1">{{ $t("slide.word_T46") }}</div>
        <div class="sectionE_frame">
          <div class="frame_text">
            <div>{{ $t("slide.word_T47") }}</div>
            <div>
              {{ $t("slide.word_T48") }}
            </div>
          </div>
          <div class="frame_button" @click="goTo('/tasks')">
            {{ $t("slide.word_T49") }}
          </div>
        </div>
        <div class="sectionE_iconA">
          <img src="../../assets/image/slide/sectionE_photoA.png" alt="" />
        </div>
        <div class="sectionE_iconB">
          <img src="../../assets/image/slide/sectionE_photoB.png" alt="" />
        </div>
        <div class="sectionE_h1">{{ $t("slide.word_T50") }}</div>
      </div>
    </div>

    <div class="slide_sectionF" id="tokenomics">
      <div class="sectionF_content">
        <div class="content_text">
          <div class="text_h1">{{ $t("slide.word_T51") }}</div>
          <div
            class="text_button"
            :class="store.getters.i18nLocal == 'US' ? 'modifyText_button' : ''"
          >
            <div class="button">{{ $t("slide.word_T52") }}</div>
            <div class="button">{{ $t("slide.word_T53") }}</div>
          </div>
          <div class="text_ul">
            <div
              class="text_li"
              :class="store.getters.i18nLocal == 'US' ? 'modifyText_li' : ''"
            >
              <div class="li_line"></div>
              <div class="li_T">{{ $t("slide.word_T54") }}</div>
              40%
            </div>
            <div
              class="text_li"
              :class="store.getters.i18nLocal == 'US' ? 'modifyText_li' : ''"
            >
              <div class="li_line s1"></div>
              <div class="li_T">{{ $t("slide.word_T55") }}</div>
              12%
            </div>
            <div
              class="text_li"
              :class="store.getters.i18nLocal == 'US' ? 'modifyText_li' : ''"
            >
              <div class="li_line s2"></div>
              <div class="li_T">{{ $t("slide.word_T56") }}</div>
              20%
            </div>
            <div
              class="text_li"
              :class="store.getters.i18nLocal == 'US' ? 'modifyText_li' : ''"
            >
              <div class="li_line s3"></div>
              <div class="li_T">{{ $t("slide.word_T57") }}</div>
              8%
            </div>
            <div
              class="text_li"
              :class="store.getters.i18nLocal == 'US' ? 'modifyText_li' : ''"
            >
              <div class="li_line s4"></div>
              <div class="li_T">{{ $t("slide.word_T58") }}</div>
              15%
            </div>
            <div
              class="text_li"
              :class="store.getters.i18nLocal == 'US' ? 'modifyText_li' : ''"
            >
              <div class="li_line s5"></div>
              <div class="li_T">{{ $t("slide.word_T59") }}</div>
              5%
            </div>
          </div>
        </div>
        <div class="content_icon">
          <img src="../../assets/image/slide/sectionF_photoA.png" alt="" />
        </div>
      </div>
    </div>

    <div class="slide_sectionG" id="roadmap">
      <div class="sectionG_title">
        <div class="sectionG_p">{{ $t("slide.word_T60") }}</div>
      </div>
      <van-tabs v-model:active="active" :swipe-threshold="2">
        <van-tab>
          <template #title>
            <div
              class="frame a1"
              :class="store.getters.i18nLocal == 'US' ? 'modifyFrame' : ''"
            >
              <div class="frame_h1">2025 Q4</div>
              <div class="frame_p">· {{ $t("slide.word_T61") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T62") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T63") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T64") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T65") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T66") }}</div>
            </div>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <div
              class="frame a2"
              :class="store.getters.i18nLocal == 'US' ? 'modifyFrame' : ''"
            >
              <div class="frame_h1">2026 Q1</div>
              <div class="frame_p">· {{ $t("slide.word_T67") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T68") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T69") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T70") }}</div>
            </div>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <div
              class="frame a1"
              :class="store.getters.i18nLocal == 'US' ? 'modifyFrame' : ''"
            >
              <div class="frame_h1">2026 Q2</div>
              <div class="frame_p">· {{ $t("slide.word_T71") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T72") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T73") }}</div>
            </div>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <div
              class="frame a2"
              :class="store.getters.i18nLocal == 'US' ? 'modifyFrame' : ''"
            >
              <div class="frame_h1">2026 Q3</div>
              <div class="frame_p">· {{ $t("slide.word_T74") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T75") }}</div>
            </div>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <div
              class="frame a1"
              :class="store.getters.i18nLocal == 'US' ? 'modifyFrame' : ''"
            >
              <div class="frame_h1">2026 Q4</div>
              <div class="frame_p">· {{ $t("slide.word_T76") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T77") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T78") }}</div>
            </div>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <div
              class="frame a2"
              :class="store.getters.i18nLocal == 'US' ? 'modifyFrame' : ''"
            >
              <div class="frame_h1">2027 Q1</div>
              <div class="frame_p">· {{ $t("slide.word_T79") }}</div>
              <div class="frame_p">· {{ $t("slide.word_T80") }}</div>
            </div>
          </template>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { eventBus } from "@/utils/eventBus";
import { ref, onMounted, onUnmounted } from "vue";

const store = useStore();
const router = useRouter();

const active = ref(0);

const screenWidth = ref(window.innerWidth);
const screenHeight = ref(window.innerHeight);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  screenHeight.value = window.innerHeight;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }
  if (sectionId === "yumo") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }
  window.scrollTo({
    top: screenWidth.value > 750 ? element.offsetTop - 80 : element.offsetTop,
    behavior: "smooth",
  });
};

const goTo = (value) => {
  router.push(value);
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  eventBus.on("scroll-to-section", scrollToSection);

  const scrollTarget = localStorage.getItem("scrollTarget");
  if (scrollTarget) {
    setTimeout(() => {
      scrollToSection(scrollTarget);
      localStorage.removeItem("scrollTarget");
    }, 300);
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  eventBus.off("scroll-to-section", scrollToSection);
});
</script>

<style lang="scss">
.slide {
  background-image: radial-gradient(circle, #cec9be 1.1px, transparent 1px);
  background-size: 20px 20px; 
  min-height: 100vh;
  padding-top: 100px;
  .slide_sectionA {
    width: auto;
    height: 960px;
    background-image: url("../../assets/image/slide/bgA.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    padding: 80px 0 0;
    position: relative;
    .slide_logo {
      width: 276.36px;
      height: auto;
    }
    .slide_h1 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 50px;
      font-size: 60px;
      color: #000;
      font-weight: 700;
      font-family: "jtFont";
      z-index: 1;
      .slide_active {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 95px;
        background: #000000;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 120px;
        border: 4px solid #ffd026;
        font-size: 60px;
        color: #ffd026;
        font-weight: 700;
        font-family: "jtFont";
        transform: skew(5deg, -5deg);
        margin-right: 20px;
      }
    }
    .slide_h2 {
      color: #000;
      font-size: 32px;
      font-weight: 700;
      font-family: "jtFont";
      border-bottom: 8px solid transparent;
      .slide_p {
        font-weight: 700;
        padding-bottom: 5px;
        &.rgbA {
          border-bottom: 8px solid #4d9fff;
        }
        &.rgbB {
          border-bottom: 8px solid #9d7cff;
        }
        &.rgbC {
          border-bottom: 8px solid #ff4d4d;
        }
      }
    }
    .slide_jump {
      cursor: pointer;
      position: absolute;
      left: 50%;
      bottom: 80px;
      transform: translate(-50%);
      width: 385px;
      height: 105px;
      background: #ffd026;
      box-shadow: 8px 8px 0px 0px #000000;
      border-radius: 30px;
      border: 5px solid #000000;
      font-size: 32px;
      font-weight: 700;
      color: #1d160d;
      font-family: "jtFont";
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        margin-left: 10px;
        width: 32px;
        height: 32px;
        transition: transform 0.6s ease-in-out;
      }
    }
    .slide_jump:hover {
      > img {
        transform: translateX(40px);
      }
    }
    .slide_position1 {
      position: absolute;
      right: 603px;
      bottom: 311px;
      animation: float1 2s ease-in-out infinite;
      > img {
        width: 158px;
        height: 212px;
        cursor: pointer;
      }
    }
    .slide_position2 {
      position: absolute;
      left: 662px;
      bottom: 375px;
      animation: float2 2.2s ease-in-out infinite;
      > img {
        width: 105px;
        height: 142px;
        cursor: pointer;
      }
    }
    .slide_position3 {
      position: absolute;
      left: 311px;
      bottom: 111px;
      animation: float3 1.8s ease-in-out infinite;
      > img {
        width: 79px;
        height: 105px;
        cursor: pointer;
      }
    }
    .slide_position4 {
      position: absolute;
      right: 235px;
      bottom: 195px;
      animation: float1 1.8s ease-in-out infinite;
      > img {
        width: 67px;
        height: 91px;
        cursor: pointer;
      }
    }
    .slide_position5 {
      position: absolute;
      top: 202px;
      right: 287px;
      animation: float3 1.8s ease-in-out infinite;
      > img {
        width: 69px;
        height: 93px;
        cursor: pointer;
      }
    }
    .slide_position6 {
      position: absolute;
      top: 171px;
      left: 295px;
      animation: float2 1.8s ease-in-out infinite;
      > img {
        width: 45px;
        height: 61px;
        cursor: pointer;
      }
    }
  }
  .slide_sectionB {
    max-width: 1100px;
    height: 1280px;
    padding-top: 250px;
    padding-bottom: 310px;
    margin: 0 auto;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 25px;
    .slide_frameWorkA {
      width: 100%;
      height: 250px;
      background: #ffffff;
      box-shadow: 6px 6px 0px 0px #000000;
      border-radius: 20px;
      border: 4px solid #000000;
      overflow: hidden;
      .slide_title {
        width: auto;
        height: 60px;
        background: #000000;
        border: 4px solid #000000;
        display: flex;
        align-items: center;
        padding: 0 35px;
        .slide_line {
          display: flex;
          align-items: center;
          .slide_round {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 20px;
            &.r {
              background: #ff5f56;
            }
            &.y {
              background: #ffbd2f;
            }
            &.g {
              background: #29c940;
            }
          }
          .slide_round:last-child {
            margin-right: 0;
          }
        }
        .slide_p {
          margin-left: 30px;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          font-family: "jtFont";
        }
      }
      .slide_content {
        padding: 35px 60px 50px;
        position: relative;
        .slide_content_h1 {
          font-weight: 700;
          font-size: 32px;
          color: #1d160d;
          font-family: "jtFont";
          margin-bottom: 15px;
        }
        .slide_content_text {
          width: 705px;
          font-weight: 500;
          font-size: 20px;
          color: #1d160d;
          font-family: "jtFont";
        }
        .slide_content_icon {
          position: absolute;
          top: -20px;
          right: 40px;
          transition: transform 0.3s ease;
          > img {
            width: 247.65px;
            height: auto;
            cursor: pointer;
          }
        }
        .slide_content_icon:hover {
          transform: scale(1.2);
        }
      }
    }
    .slide_frameWorkB {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
      .slide_frameWorkB_container {
        height: 445px;
        background: #ffffff;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 20px;
        border: 4px solid #000000;
        padding: 30px 25px 25px;
        position: relative;
        .slide_frameWorkB_icon {
          position: absolute;
          top: 35px;
          right: 45px;
          transition: transform 0.3s ease;
          > img {
            width: 196px;
            height: auto;
            cursor: pointer;
          }
        }
        .slide_frameWorkB_icon:hover {
          transform: scale(1.2);
        }
        .slide_frameWorkB_container_content {
          padding-left: 15px;
          .slide_button {
            width: 170px;
            height: 54px;
            background: #ff4d4d;
            border-radius: 15px;
            border: 2px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
            font-family: "jtFont";
            margin-bottom: 30px;
          }
          .modifySlide {
            width: 180px;
            font-size: 13px;
          }
          .b1 {
            background: #01a96b;
          }
          .slide_h3 {
            font-weight: 700;
            font-size: 24px;
            color: #1d160d;
            font-family: "jtFont";
            margin-bottom: 15px;
          }
          .slide_p2 {
            font-weight: 500;
            font-size: 18px;
            color: #1d160d;
            font-family: "jtFont";
            margin-bottom: 10px;
            position: relative;
          }
          .slide_p2:last-child {
            margin-bottom: 0;
          }
        }
        .slide_text {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 25px;
          margin-top: 30px;
          height: 60px;
          background: #fff0f0;
          border-radius: 15px;
          border: 2px dashed #ff4d4d;
          display: flex;
          align-items: center;
          padding: 0 30px;
          font-weight: bold;
          font-family: "jtFont";
          font-size: 18px;
          color: #ff4d4d;
        }
        .b2 {
          color: #01a96b;
          background: #e9fff0;
          border: 2px dashed #01a96b;
        }
      }
    }
  }
  .slide_sectionC {
    min-height: 670px;
    background-image: url("../../assets/image/slide/sectionC_photoBG.png");
    background-size: cover;
    background-repeat: no-repeat;
    .sectionC_content {
      max-width: 1100px;
      height: 100%;
      margin: 0 auto;
      padding-top: 50px;
      .sectionC_title {
        display: flex;
        justify-content: center;
        .sectionC_p {
          min-width: 380px;
          padding: 0 10px;
          height: 105px;
          background: #ffffff;
          box-shadow: 6px 6px 0px 0px #000000;
          border-radius: 80px;
          border: 4px solid #000000;
          font-weight: 700;
          font-size: 40px;
          color: #1d160d;
          font-family: "jtFont";
          display: flex;
          align-items: center;
          justify-content: center;
          transform: skew(5deg, -5deg);
        }
      }
      .sectionC_ul {
        margin-top: 90px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 25px;
        .sectionC_li {
          cursor: pointer;
          min-height: 315px;
          background: #ffd026;
          box-shadow: 6px 6px 0px 0px #000000;
          border-radius: 40px;
          border: 4px solid #000000;
          padding: 40px 35px;
          transition: transform 0.3s ease;
          &.li1 {
            background: #ffffff;
            box-shadow: 6px 6px 0px 0px #9d7cff;
          }
          &.li2 {
            background: #4d9fff;
          }
          &.li3 {
            background: #ffffff;
            box-shadow: 6px 6px 0px 0px #ff4d4d;
          }
          .li_icon {
            width: 75px;
            height: 75px;
            background: #ffffff;
            border-radius: 20px;
            border: 4px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
              width: 33px;
              height: auto;
            }
            .iconA2 {
              width: 42px;
              height: auto;
            }
            .iconA3 {
              width: 45px;
              height: auto;
            }
          }
          .li_h1 {
            font-weight: 700;
            font-size: 26px;
            color: #1d160d;
            font-family: "jtFont";
            margin-top: 15px;
            margin-bottom: 15px;
          }
          .li_text {
            font-weight: 700;
            font-size: 18px;
            color: #1d160d;
            font-family: "jtFont";
          }
        }
        .modifySectionC_li {
          padding: 35px 30px;
          .li_h1 {
            font-size: 22px;
          }
          .li_text {
            font-size: 16px;
          }
        }
        .sectionC_li:hover {
          transform: translateY(-20px);
        }
      }
    }
  }
  .slide_sectionD {
    margin: 0 auto;
    max-width: 1100px;
    height: 1090px;
    padding-top: 320px;
    .sectionD_content {
      height: 450px;
      background: #ffffff;
      box-shadow: 6px 6px 0px 0px #000000;
      border-radius: 20px;
      border: 4px solid #000000;
      padding: 35px 45px 35px 70px;
      position: relative;
      .sectionD_h1 {
        font-weight: bold;
        font-size: 40px;
        color: #1d160d;
        font-family: "jtFont";
        margin-bottom: 15px;
      }
      .sectionD_h2 {
        font-weight: bold;
        font-size: 26px;
        color: #9d7cff;
        font-family: "jtFont";
        margin-bottom: 20px;
      }
      .sectionD_frame {
        width: 100%;
        height: 260px;
        border-radius: 15px;
        border: 2px dashed #000000;
        padding: 25px 30px;
        .frame_p {
          font-weight: 500;
          font-size: 18px;
          color: #1d160d;
          font-family: "jtFont";
          margin-top: 13px;
        }
        .frame_p:first-child {
          margin-top: 0;
        }
        .frame_iconA {
          display: none;
        }
        .frame_iconB {
          display: none;
        }
      }
      .sectionD_iconA {
        position: absolute;
        top: 45px;
        right: 75px;
        transition: transform 0.3s ease;
        > img {
          width: 265px;
          height: auto;
          cursor: pointer;
        }
      }
      .sectionD_iconA:hover {
        transform: scale(1.2);
      }
      .sectionD_iconB {
        position: absolute;
        top: 95px;
        right: 375px;
        transition: transform 0.3s ease;
        > img {
          width: 135px;
          height: 135px;
          cursor: pointer;
        }
      }
      .sectionD_iconB:hover {
        transform: scale(1.2);
      }
      .sectionD_button {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -20px;
        width: 285px;
        height: 80px;
        background: #ffd026;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 20px;
        border: 4px solid #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        color: #1d160d;
        font-weight: bold;
        font-family: "jtFont";
        cursor: pointer;
      }
      .modifySectionD {
        font-size: 22px;
      }
    }
  }
  .slide_sectionE {
    height: 575px;
    background-image: url("../../assets/image/slide/sectionE_photoBG.png");
    background-size: cover;
    background-repeat: no-repeat;
    .sectionE_content {
      margin: 0 auto;
      max-width: 1100px;
      padding-top: 50px;
      position: relative;
      .sectionE_title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        .sectionE_p {
          min-width: 380px;
          padding: 0 10px;
          height: 105px;
          background: #ffd026;
          box-shadow: 6px 6px 0px 0px #000000;
          border-radius: 80px;
          border: 4px solid #000000;
          font-weight: 700;
          font-size: 40px;
          color: #1d160d;
          font-family: "jtFont";
          display: flex;
          align-items: center;
          justify-content: center;
          transform: skew(5deg, -5deg);
        }
      }
      .sectionE_h1 {
        font-weight: bold;
        font-size: 32px;
        color: #000000;
        font-family: "jtFont";
        text-align: center;
        position: relative;
      }
      .sectionE_frame {
        margin: 20px 0 40px;
        width: 100%;
        height: 165px;
        background: #ffffff;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 20px;
        border: 4px solid #000000;
        padding: 35px 90px 40px 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .frame_text {
          > div:nth-child(1) {
            font-weight: bold;
            font-size: 26px;
            color: #1d160d;
            font-family: "jtFont";
            margin-bottom: 15px;
          }
          > div:nth-child(2) {
            font-size: 18px;
            color: #1d160d;
            font-weight: bold;
            font-family: "jtFont";
          }
        }
        .frame_button {
          width: 285px;
          height: 80px;
          background: #ffd026;
          box-shadow: 6px 6px 0px 0px #000000;
          border-radius: 20px;
          border: 4px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #000000;
          font-weight: bold;
          font-family: "jtFont";
          cursor: pointer;
        }
      }
      .sectionE_iconA {
        position: absolute;
        top: 180px;
        left: 165px;
        transition: transform 0.3s ease;
        > img {
          width: 134px;
          height: 134px;
          cursor: pointer;
        }
      }
      .sectionE_iconA:hover {
        transform: scale(1.2);
      }
      .sectionE_iconB {
        position: absolute;
        bottom: -20px;
        right: 20px;
        transition: transform 0.3s ease;
        > img {
          width: 146px;
          height: 146px;
          cursor: pointer;
        }
      }
      .sectionE_iconB:hover {
        transform: scale(1.2);
      }
    }
  }
  .slide_sectionF {
    margin: 0 auto;
    max-width: 1100px;
    height: 900px;
    padding-top: 300px;
    .sectionF_content {
      width: 100%;
      height: 380px;
      background: #ffffff;
      box-shadow: 6px 6px 0px 0px #000000;
      border-radius: 20px;
      border: 4px solid #000000;
      padding: 55px 70px 50px 60px;
      display: grid;
      grid-template-columns: 1fr 371.68px;
      gap: 90px;
      .content_text {
        .text_h1 {
          font-size: 40px;
          color: #1d160d;
          font-weight: bold;
          font-family: "jtFont";
          margin-bottom: 10px;
        }
        .text_button {
          display: flex;
          align-items: center;
          margin-bottom: 35px;
          .button {
            width: 210px;
            height: 60px;
            background: #27ff85;
            border-radius: 15px;
            border: 3px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #000000;
            font-weight: bold;
            font-family: "jtFont";
            margin-right: 15px;
          }
          .button:last-child {
            margin-right: 0;
          }
        }
      }
      .text_ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 15px;
        .text_li {
          display: flex;
          align-items: center;
          font-weight: 500;
          font-size: 18px;
          font-family: "jtFont";
          .li_line {
            width: 24px;
            height: 24px;
            background: #ffd027;
            border-radius: 8px;
            border: 2px solid #000000;
            &.s1 {
              background: #ff4d4d;
            }
            &.s2 {
              background: #9d7cff;
            }
            &.s3 {
              background: #333333;
            }
            &.s4 {
              background: #4e9fff;
            }
            &.s5 {
              background: #01a86b;
            }
          }
          .li_T {
            padding-left: 10px;
            padding-right: 20px;
          }
        }
        .modifyText_li {
          font-size: 15px;
          .li_T {
            padding-left: 5px;
            padding-right: 10px;
          }
        }
      }
      .content_icon {
        cursor: pointer;
        transition: transform 0.3s ease;
        > img {
          width: 371.68px;
          height: auto;
        }
      }
      .content_icon:hover {
        transform: scale(1.2);
      }
    }
  }
  .slide_sectionG {
    margin: 0 auto;
    height: 840px;
    padding-top: 80px;
    .sectionG_title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 55px;
      .sectionG_p {
        width: 380px;
        height: 105px;
        background: #ffffff;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 80px;
        border: 4px solid #000000;
        font-weight: 700;
        font-size: 40px;
        color: #1d160d;
        font-family: "jtFont";
        display: flex;
        align-items: center;
        justify-content: center;
        transform: skew(5deg, -5deg);
      }
    }
    .van-tabs {
      .van-tabs__wrap {
        height: 300px;
        .van-tabs__nav {
          height: 300px;
          padding-bottom: 0;
          background: transparent;
          padding-top: 30px;
          .van-tab {
            align-items: start;
            margin-right: 30px;
            line-height: normal;
            .van-tab__text--ellipsis {
              overflow: unset;
            }
            .frame {
              width: 280px;
              background: #ffffff;
              box-shadow: 6px 6px 0px 0px #000000;
              border-radius: 20px;
              border: 4px solid #000000;
              padding: 30px 40px;
              .frame_h1 {
                font-size: 26px;
                color: #1d160d;
                font-weight: bold;
                font-family: "jtFont";
                margin-bottom: 15px;
              }
              .frame_p {
                font-weight: 500;
                font-size: 18px;
                color: #1d160d;
                font-family: "jtFont";
              }
            }
            .a1 {
              transform: skew(5deg, -5deg);
            }
            .a2 {
              transform: skew(-2deg, 2deg);
            }
            .modifyFrame {
              .frame_p {
                font-size: 14px;
              }
            }
          }
          .van-tab:first-child {
            margin-left: 70px;
            margin-right: 25px;
          }
          .van-tabs__line {
            display: none;
          }
        }
      }
    }
  }
}

@keyframes float1 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 750px) {
  .slide {
    background-image: none;
    padding-top: 0;
    min-width: 320px;
    .slide_sectionA {
      height: 610px;
      background-image: url("../../assets/image/slide/bgA1.png");
      padding: 110px 10px 0;
      position: relative;
      .slide_logo {
        width: 136.88px;
      }
      .slide_h1 {
        margin-top: 15px;
        margin-bottom: 20px;
        font-size: 30px;
        .slide_active {
          width: 155px;
          height: 45px;
          border-radius: 60px;
          border: 2px solid #ffd026;
          font-size: 30px;
          margin-right: 10px;
        }
      }
      .modifySlide_h1 {
        flex-wrap: wrap;
        .slide_active {
          margin-bottom: 10px;
        }
      }
      .slide_h2 {
        position: relative;
        z-index: 1;
        font-size: 12px;
        border-bottom: 3px solid transparent;
        .slide_p {
          padding-bottom: 2px;
          &.rgbA {
            border-bottom: 3px solid #4d9fff;
          }
          &.rgbB {
            border-bottom: 3px solid #9d7cff;
          }
          &.rgbC {
            border-bottom: 3px solid #ff4d4d;
          }
        }
      }
      .slide_jump {
        bottom: -10px;
        width: 200px;
        height: 55px;
        box-shadow: 5px 5px 0px 0px #000000;
        border-radius: 15px;
        border: 3px solid #000000;
        font-size: 18px;
        > img {
          margin-left: 5px;
          width: 18px;
          height: 18px;
          transition: transform 0.6s ease-in-out;
        }
      }
      .slide_jump:hover {
        > img {
          transform: translateX(20px);
        }
      }
      .slide_position1 {
        position: absolute;
        right: 67px;
        bottom: 90px;
        animation: float1 2s ease-in-out infinite;
        > img {
          width: 63px;
          height: 85px;
        }
      }
      .slide_position2 {
        left: 41px;
        bottom: 95px;
        animation: float2 2.2s ease-in-out infinite;
        > img {
          width: 53px;
          height: 72px;
        }
      }
      .slide_position3 {
        top: 306px;
        left: 52px;
        bottom: auto;
        animation: float3 1.8s ease-in-out infinite;
        > img {
          width: 25px;
          height: 33px;
        }
      }
      .slide_position4 {
        display: none;
      }
      .slide_position5 {
        position: absolute;
        top: 353px;
        right: 28px;
        animation: float1 1.8s ease-in-out infinite;
        > img {
          width: 39px;
          height: 53px;
        }
      }
      .slide_position6 {
        display: none;
      }
    }
    .slide_sectionB {
      max-width: 750px;
      height: auto;
      padding: 90px 20px 40px;
      row-gap: 15px;
      .slide_frameWorkA {
        height: auto;
        box-shadow: 3px 3px 0px 0px #000000;
        border-radius: 15px;
        border: 2px solid #000000;
        .slide_title {
          height: 30px;
          border: 2px solid #000000;
          padding: 0 15px;
          .slide_line {
            .slide_round {
              width: 10px;
              height: 10px;
              margin-right: 10px;
            }
          }
          .slide_p {
            margin-left: 15px;
            font-size: 12px;
          }
        }
        .slide_content {
          padding: 30px 20px;
          .slide_content_h1 {
            font-size: 24px;
            margin-bottom: 10px;
          }
          .slide_content_text {
            width: 100%;
            font-size: 14px;
          }
          .slide_content_icon {
            position: absolute;
            top: -10px;
            right: 25px;
            > img {
              width: 96px;
            }
          }
          .slide_content_icon:hover {
            transform: scale(1.2);
          }
        }
      }
      .slide_frameWorkB {
        grid-template-columns: 1fr;
        gap: 0;
        row-gap: 20px;
        .slide_frameWorkB_container {
          height: auto;
          background: #ffffff;
          box-shadow: 4px 4px 0px 0px #000000;
          border-radius: 15px;
          border: 3px solid #000000;
          padding: 25px 15px 15px;
          .slide_frameWorkB_icon {
            position: absolute;
            top: 20px;
            right: 30px;
            > img {
              width: 123.29px;
            }
          }
          .slide_frameWorkB_container_content {
            padding-left: 10px;
            .slide_button {
              width: 105px;
              height: 35px;
              border-radius: 10px;
              border: 2px solid #000000;
              font-size: 10px;
              margin-bottom: 20px;
            }
            .modifySlide {
              width: 140px;
            }
            .slide_h3 {
              font-size: 16px;
              margin-bottom: 10px;
            }
            .slide_p2 {
              font-size: 12px;
              margin-bottom: 5px;
            }
            .slide_p2:last-child {
              margin-bottom: 0;
            }
          }
          .slide_text {
            position: initial;
            margin-top: 15px;
            height: 40px;
            border-radius: 10px;
            border: 1px dashed #ff4d4d;
            padding: 0 20px;
            font-size: 12px;
          }
          .b2 {
            border: 1px dashed #01a96b;
          }
        }
      }
    }
    .slide_sectionC {
      min-height: 640px;
      background-image: url("../../assets/image/slide/sectionC_photoBG1.png");
      .sectionC_content {
        max-width: 750px;
        height: 100%;
        margin: 0 auto;
        padding: 45px 20px 10px;
        .sectionC_title {
          .sectionC_p {
            min-width: 220px;
            padding: 0 5px;
            height: 60px;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 45px;
            border: 2px solid #000000;
            font-size: 24px;
          }
        }
        .sectionC_ul {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          row-gap: 15px;
          .sectionC_li {
            height: auto;
            box-shadow: 4px 4px 0px 0px #000000;
            border-radius: 25px;
            border: 3px solid #000000;
            padding: 30px 15px 40px 25px;
            &.li1 {
              box-shadow: 4px 4px 0px 0px #9d7cff;
            }
            &.li3 {
              box-shadow: 4px 4px 0px 0px #ff4d4d;
            }
            .li_icon {
              width: 45px;
              height: 45px;
              border-radius: 10px;
              border: 3px solid #000000;
              > img {
                width: 20.7px;
                height: auto;
              }
              .iconA2 {
                width: 26.27px;
                height: auto;
              }
              .iconA3 {
                width: 28.06px;
                height: auto;
              }
            }
            .li_h1 {
              font-size: 16px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .li_text {
              font-size: 12px;
            }
          }
          .modifySectionC_li {
            padding: 20px 15px 15px 20px;
            .li_h1 {
              font-size: 14px;
            }
          }
        }
      }
    }
    .modifySlide_sectionC {
    }
    .slide_sectionD {
      max-width: 750px;
      height: auto;
      padding: 110px 20px 70px;
      .sectionD_content {
        height: auto;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 20px;
        border: 4px solid #000000;
        padding: 35px 20px 20px;
        .sectionD_h1 {
          font-size: 24px;
          margin-bottom: 10px;
          text-align: center;
        }
        .sectionD_h2 {
          font-size: 18px;
          margin-bottom: 25px;
          text-align: center;
        }
        .sectionD_frame {
          height: auto;
          border-radius: 15px;
          border: 2px dashed #000000;
          padding: 20px 25px 30px;
          position: relative;
          .frame_p {
            font-size: 12px;
            margin-bottom: 10px;
          }
          .frame_iconA {
            display: block;
            margin-top: 30px;
            text-align: center;
            transition: transform 0.3s ease;
            > img {
              width: 185px;
              height: 264px;
            }
          }
          .frame_iconA:hover {
            transform: scale(1.1);
          }
          .frame_iconB {
            display: block;
            position: absolute;
            left: 0;
            bottom: 205px;
            transition: transform 0.3s ease;
            > img {
              width: 97px;
              height: 97px;
            }
          }
          .frame_iconB:hover {
            transform: scale(1.2);
          }
        }
        .sectionD_iconA {
          display: none;
        }
        .sectionD_iconB {
          display: none;
        }
        .sectionD_button {
          bottom: -20px;
          width: 200px;
          height: 55px;
          box-shadow: 5px 5px 0px 0px #000000;
          border-radius: 15px;
          border: 3px solid #000000;
          font-size: 18px;
        }
        .modifySectionD {
          font-size: 16px;
        }
      }
    }
    .slide_sectionE {
      height: 600px;
      background-image: url("../../assets/image/slide/sectionE_photoBG1.png");
      .sectionE_content {
        max-width: 750px;
        padding: 35px 20px 0;
        .sectionE_title {
          margin-bottom: 75px;
          .sectionE_p {
            min-width: 220px;
            padding: 0 10px;
            height: 60px;
            background: #ffd026;
            box-shadow: 3px 3px 0px 0px #000000;
            border-radius: 45px;
            border: 2px solid #000000;
            font-size: 24px;
          }
        }
        .sectionE_h1 {
          font-size: 24px;
        }
        .sectionE_frame {
          margin: 40px 0 50px;
          height: auto;
          box-shadow: 6px 6px 0px 0px #000000;
          border-radius: 20px;
          border: 4px solid #000000;
          padding: 20px;
          display: block;
          .frame_text {
            position: relative;
            z-index: 1;
            padding-left: 5px;
            margin-bottom: 35px;
            > div:nth-child(1) {
              font-size: 18px;
              margin-bottom: 5px;
            }
            > div:nth-child(2) {
              font-size: 14px;
            }
          }
          .frame_button {
            width: auto;
            height: 55px;
            box-shadow: 5px 5px 0px 0px #000000;
            border-radius: 15px;
            border: 3px solid #000000;
            font-size: 16px;
          }
        }
        .sectionE_iconA {
          position: absolute;
          top: 200px;
          left: 30px;
          > img {
            width: 62px;
            height: 62px;
            cursor: pointer;
          }
        }
        .sectionE_iconB {
          position: absolute;
          bottom: 65px;
          right: 30px;
          > img {
            width: 79px;
            height: 79px;
            cursor: pointer;
          }
        }
      }
    }
    .modifySlide_sectionE {
      .sectionE_content {
        .sectionE_title {
          margin-bottom: 55px;
        }
        .sectionE_h1 {
          font-size: 18px;
        }
        .sectionE_iconA {
          top: 175px;
        }
        .sectionE_iconB {
          bottom: 55px;
        }
      }
    }
    .slide_sectionF {
      max-width: 750px;
      height: auto;
      padding: 95px 20px 100px;
      .sectionF_content {
        height: auto;
        box-shadow: 6px 6px 0px 0px #000000;
        border-radius: 20px;
        border: 4px solid #000000;
        padding: 30px 20px 25px;
        grid-template-columns: 1fr;
        gap: 40px;
        .content_text {
          .text_h1 {
            font-size: 24px;
            margin-bottom: 15px;
          }
          .text_button {
            display: flex;
            align-items: center;
            margin-bottom: 35px;
            .button {
              width: 125px;
              height: 45px;
              border-radius: 15px;
              border: 3px solid #000000;
              font-size: 16px;
              margin-right: 10px;
            }
          }
          .modifyText_button {
            .button {
              font-size: 14px;
            }
          }
        }
        .text_ul {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 15px;
          .text_li {
            padding-left: 50px;
            font-size: 16px;
            .li_line {
              width: 20px;
              height: 20px;
              border-radius: 6px;
              border: 2px solid #000000;
              &.s1 {
                background: #ff4d4d;
              }
              &.s2 {
                background: #9d7cff;
              }
              &.s3 {
                background: #333333;
              }
              &.s4 {
                background: #4e9fff;
              }
              &.s5 {
                background: #01a86b;
              }
            }
            .li_T {
              width: 140px;
              padding-left: 10px;
              padding-right: 0px;
            }
          }
          .modifyText_li {
            padding-left: 20px;
            .li_T {
              width: 200px;
            }
          }
        }
        .content_icon {
          display: flex;
          align-items: center;
          justify-content: center;
          > img {
            width: 227.84px;
          }
        }
        .content_icon:hover {
          transform: scale(1.1);
        }
      }
    }
    .slide_sectionG {
      height: auto;
      padding: 100px 20px 30px;
      .sectionG_title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        .sectionG_p {
          width: 220px;
          height: 60px;
          box-shadow: 3px 3px 0px 0px #000000;
          border-radius: 45px;
          border: 2px solid #000000;
          font-size: 24px;
        }
      }
      .van-tabs {
        .van-tabs__wrap {
          height: auto;
          .van-tabs__nav {
            display: block;
            height: auto;
            padding-top: 30px;
            padding-bottom: 30px;
            .van-tab {
              align-items: start;
              margin-right: 0;
              margin-bottom: 50px;
              line-height: normal;
              .van-tab__text--ellipsis {
                overflow: unset;
              }
              .frame {
                width: 245px;
                box-shadow: 5px 5px 0px 0px #000000;
                border-radius: 15px;
                border: 4px solid #000000;
                padding: 20px 30px;
                .frame_h1 {
                  font-size: 23px;
                  margin-bottom: 10px;
                }
                .frame_p {
                  font-size: 16px;
                }
              }
            }
            .van-tab:first-child {
              margin-left: 0;
              margin-right: 0;
            }
            .van-tabs__line {
              display: none;
            }
          }
        }
      }
    }
  }

  @keyframes float1 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @keyframes float2 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  @keyframes float3 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}
</style>