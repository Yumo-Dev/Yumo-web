<template>
  <div class="plazaMomo">
    <div class="container_plaza">
      <div
        class="h1"
        :class="store.getters.i18nLocal == 'US' ? 'modifyH1' : ''"
      >
        {{ $t("plazaMomo.word_T1") }}
      </div>
      <div class="plaza_select">
        <div :class="plazaQ == 1 ? 'active' : ''" @click="changePlazaA(1)">
          {{ $t("plazaMomo.word_T2") }}
        </div>
        <div :class="plazaQ == 2 ? 'active' : ''" @click="changePlazaA(2)">
          {{ $t("plazaMomo.word_T3") }}
        </div>
        <div :class="plazaQ == 3 ? 'active' : ''" @click="changePlazaA(3)">
          {{ $t("plazaMomo.word_T4") }}
        </div>
      </div>
      <template v-if="!lock">
        <template v-if="moList.length != 0">
          <div class="plaza_ul">
            <div class="li" v-for="(item, index) in moList" :key="index">
              <div v-if="item.background == 0" class="background"></div>
              <img
                v-else
                class="background"
                :src="peopleBackground(item.background)"
                alt=""
              />
              <div class="frame_people">
                <img
                  class="people"
                  src="../../assets/image/home/iconAww.png"
                  alt=""
                />
                <img class="emo" :src="peopleEmoji(item.emojis)" alt="" />
                <img
                  class="access"
                  :src="peopleAccessories(item.accessories)"
                  alt=""
                />
              </div>
              <div class="p">{{ item.logicSuperior }}</div>
              <div class="p t1">
                {{ $t("plazaMomo.word_T5") }}{{ item.active }}
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="noData">{{ $t("plazaMomo.word_T6") }}</div>
        </template>
      </template>
      <template v-else>
        <div class="noData">{{ $t("dataLoad") }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { momos } from "../../api/get";
import { ref, onMounted, watch } from "vue";

const store = useStore();
const plazaQ = ref(0);
const plazaS1 = ref(0);
const plazaS2 = ref(0);
const plazaS3 = ref(0);
const moList = ref([]);
const lock = ref(false);

const image_Emoji = import.meta.glob("../../assets/image/people/emojis/*.png", {
  eager: true,
});

const image_Background = import.meta.glob(
  "../../assets/image/people/background/*.png",
  {
    eager: true,
  }
);

const image_accessories = import.meta.glob(
  "../../assets/image/people/accessories/*.png",
  {
    eager: true,
  }
);

const peopleEmoji = (value) => {
  const imagePath = `../../assets/image/people/emojis/${value}A.png`;
  const imageModule = image_Emoji[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const peopleBackground = (value) => {
  const imagePath = `../../assets/image/people/background/${value}.png`;
  const imageModule = image_Background[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const peopleAccessories = (value) => {
  const imagePath = `../../assets/image/people/accessories/${value}A.png`;
  const imageModule = image_accessories[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const changePlazaA = (value) => {
  if (plazaQ.value == value) {
    plazaQ.value = 0;
    plazaS1.value = 0;
    plazaS2.value = 0;
    plazaS3.value = 0;
  } else {
    plazaQ.value = value;
    if (value == 1) {
      plazaS1.value = 1;
      plazaS2.value = 0;
      plazaS3.value = 0;
    }
    if (value == 2) {
      plazaS1.value = 0;
      plazaS2.value = 1;
      plazaS3.value = 0;
    }
    if (value == 3) {
      plazaS1.value = 0;
      plazaS2.value = 0;
      plazaS3.value = 1;
    }
  }
  getMoMos();
};

const changePlazaB = (value) => {
  moList.value = [];
  if (plazaS2.value == value) {
    plazaS2.value = 0;
  } else {
    plazaS2.value = value;
  }
  getMoMos();
};

const changePlazaC = (value) => {
  moList.value = [];
  if (plazaS3.value == value) {
    plazaS3.value = 0;
  } else {
    plazaS3.value = value;
  }
  getMoMos();
};

const getMoMos = () => {
  momos(plazaS1.value, plazaS2.value, plazaS3.value).then((res) => {
    if (res.data.code === 200) {
      moList.value = res.data.result;
    }
    lock.value = false;
  });
};

onMounted(() => {
  getInit();
});

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    lock.value = true;
    getMoMos();
  }
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .plazaMomo {
    min-width: 320px;
    max-width: 750px;
    min-height: 100vh;
    padding: 80px 0 100px;
    margin: auto;
    .container_plaza {
      height: 100%;
      padding: 0 20px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .h1 {
        text-align: center;
        padding: 0 60px;
        font-weight: bold;
        font-size: 12px;
        color: #000000;
        font-family: "jtFont";
        margin-bottom: 15px;
      }
      .modifyH1 {
        padding: 0 20px;
        font-size: 11px;
      }
      .plaza_select {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        margin-bottom: 10px;
        > div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 38px;
          border-radius: 10px;
          border: 3px solid #000000;
          font-weight: bold;
          font-size: 14px;
          color: #000000;
          font-family: "jtFont";
          &.active {
            background: #ffd026;
          }
        }
      }
      .plaza_ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        height: 100%;
        max-height: calc(100vh - 270px);
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .li {
          position: relative;
          text-align: center;
          background: #fff7dd;
          border-radius: 20px;
          border: 2px solid #000000;
          padding: 10px;
          overflow: hidden;
          .background {
            margin: auto;
            width: 100%;
            max-width: 200px;
            height: 120px;
            border-radius: 15px;
            border: 2px solid #000000;
          }
          .frame_people {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 10;
            width: 120px;
            height: auto;
            .people {
              width: 100%;
              height: 100%;
            }
            .emo {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: auto;
              z-index: 11;
              width: 120px;
              height: auto;
            }
            .access {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: auto;
              z-index: 12;
              width: 120px;
              height: auto;
            }
          }
          .p {
            text-align: center;
            margin-top: 10px;
            font-weight: bold;
            font-size: 12px;
            color: #000000;
            font-family: "jtFont";
          }
          .t1 {
            margin-top: 5px;
          }
        }
      }
      .noData {
        margin-top: 90px;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: #000000;
        font-family: "jtFont";
      }
    }
  }
}
</style>