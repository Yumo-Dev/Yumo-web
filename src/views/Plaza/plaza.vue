<template>
  <div class="plaza">
    <div class="plaza_on">
      <div>{{ $t("plaza.word_T1") }}</div>
      <div>{{ moList.length || "0" }}</div>
    </div>

    <div class="plaza_scroll">
      <div class="plaza_map" ref="containerRef">
        <div class="background"></div>

        <div
          class="li"
          v-for="(item, index) in positionedMoList"
          :key="index"
          :style="{
            position: 'absolute',
            left: item.left + 'px',
            top: item.top + 'px',
            width: itemSize + 'px',
            pointerEvents: 'none',
          }"
        >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { momos } from "../../api/get";
import { ref, onMounted, computed } from "vue";

const store = useStore();
const router = useRouter();
const moList = ref([]);

const itemSize = 20;

const minSpacing = 80;

const MAP_WIDTH = 750;
const MAP_HEIGHT = 1622;

const image_emoji = import.meta.glob("../../assets/image/home/*.png", {
  eager: true,
});

const image_Emoji = import.meta.glob("../../assets/image/people/emojis/*.png", {
  eager: true,
});

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

const peopleAccessories = (value) => {
  const imagePath = `../../assets/image/people/accessories/${value}A.png`;
  const imageModule = image_accessories[imagePath];
  return imageModule ? imageModule.default || imageModule : "";
};

const positionedMoList = computed(() => {
  if (moList.value.length === 0) return [];

  const positions = [];
  const occupied = []; 

  moList.value.forEach((item) => {
    let placed = false;
    let attempts = 0;
    let x, y;

    while (!placed && attempts < 100) {
      x = Math.floor(Math.random() * (MAP_WIDTH - itemSize - 40)) + 20;
      y = Math.floor(Math.random() * (MAP_HEIGHT - itemSize - 40)) + 20;

      const tooClose = occupied.some((pos) => {
        const dx = Math.abs(pos.x - x);
        const dy = Math.abs(pos.y - y);
        return dx < minSpacing && dy < minSpacing;
      });

      if (!tooClose) {
        placed = true;
        occupied.push({ x, y });
      }
      attempts++;
    }

    if (!placed) {
      x = Math.floor(Math.random() * (MAP_WIDTH - itemSize));
      y = Math.floor(Math.random() * (MAP_HEIGHT - itemSize));
    }

    const imagePath = `../../assets/image/home/iconA.png`;
    const imageModule = image_emoji[imagePath];
    positions.push({
      src: imageModule ? imageModule.default || imageModule : "",
      left: x,
      top: y,
      accessories: item.accessories,
      emojis: item.emojis,
    });
  });

  return positions;
});

const getMoMos = () => {
  momos(0, 0, 0).then((res) => {
    if (res.data.code === 200) {
      moList.value = res.data.result;
    }
  });
};

const getInit = () => {
  const token = localStorage.getItem("Token-YUMO");
  const account = localStorage.getItem("Account-YUMO");
  if (token && account) {
    getMoMos();
  }
};

onMounted(() => {
  getInit();
});
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .plaza {
    margin: auto;
    min-width: 320px;
    max-width: 750px;
    position: relative;
    .plaza_on {
      position: absolute;
      top: 75px;
      left: 20px;
      right: 20px;
      background: #ffd026;
      border-radius: 15px;
      border: 3px solid #000000;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
      > div:nth-child(1) {
        font-weight: bold;
        font-size: 14px;
        color: #000000;
        font-family: "jtFont";
      }
      > div:nth-child(2) {
        font-weight: bold;
        font-size: 24px;
        color: #000000;
        font-family: "jtFont";
      }
    }
    .plaza_scroll {
      height: 100vh;
      overflow: auto;
      -webkit-overflow-scrolling: touch; 
      .plaza_map {
        position: relative;
        width: 750px;
        height: 1622px;
        .background {
          position: absolute;
          inset: 0;
          background-image: url("../../assets/image/plaza/iconBG.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          pointer-events: none;
        }
        > img {
          user-select: none;
          -webkit-user-drag: none;
        }
        .li {
          user-select: none;
          -webkit-user-drag: none;
          .frame_people {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 40px;
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
              width: 40px;
              height: auto;
            }
            .access {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              margin: auto;
              width: 40px;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>