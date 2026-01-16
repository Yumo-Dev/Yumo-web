<template>
  <div class="mobileFooter">
    <div class="mobileFooter-ul">
      <div class="container-li" @click="goTo('/home')">
        <div
          class="li-button"
          :class="
            $route.path == '/home' ||
            $route.path == '/home-check' ||
            $route.path == '/home-community' ||
            $route.path == '/home-communityList' ||
            $route.path == '/home-Character' ||
            $route.path == '/home-aiInsight' ||
            $route.path == '/home-introduction'
              ? 'li-active '
              : ''
          "
        >
          <img src="../assets/image/mFooter/iconA1.png" alt="" />
        </div>
        <div class="li-name">{{ $t("mobileFooter.word_T1") }}</div>
      </div>
      <div class="container-li" @click="goTo('/games')">
        <div
          class="li-button"
          :class="$route.path == '/games' ? 'li-active ' : ''"
        >
          <img src="../assets/image/mFooter/iconA2.png" alt="" />
        </div>
        <div class="li-name">{{ $t("mobileFooter.word_T2") }}</div>
      </div>
      <div class="container-li" @click="goTo('/tasks')">
        <div
          class="li-button"
          :class="
            $route.path == '/tasks' ||
            $route.path == '/tasks-issueATask' ||
            $route.path == '/tasks-detail' ||
            $route.path == '/tasks-result' ||
            $route.path == '/tasks-history'
              ? 'li-active '
              : ''
          "
        >
          <img src="../assets/image/mFooter/iconA3.png" alt="" />
        </div>
        <div class="li-name">{{ $t("mobileFooter.word_T3") }}</div>
      </div>
      <div class="container-li" @click="goTo('/plaza')">
        <div
          class="li-button"
          :class="
            $route.path == '/plaza' ||
            $route.path == '/plaza-momo' ||
            $route.path == '/plaza-nft'
              ? 'li-active '
              : ''
          "
        >
          <img src="../assets/image/mFooter/iconA4.png" alt="" />
        </div>
        <div class="li-name">{{ $t("mobileFooter.word_T4") }}</div>
      </div>
      <div class="container-li" @click="goTo('/more')">
        <div
          class="li-button"
          :class="$route.path == '/more' ? 'li-active ' : ''"
        >
          <img src="../assets/image/mFooter/iconA5.png" alt="" />
        </div>
        <div class="li-name">{{ $t("mobileFooter.word_T5") }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (value) => {
  router.push(value);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .mobileFooter {
    min-width: 320px;
    max-width: 750px;
    margin: auto;
    .mobileFooter-ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px 25px;
      .container-li {
        flex: 1;
        text-align: center;
        cursor: pointer;
        .li-button {
          margin: 0 auto;
          width: 38px;
          height: 38px;
          box-shadow: 2px 2px 0px 0px #000000;
          border-radius: 10px;
          border: 2px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          > img {
            width: 26px;
            height: 26px;
          }
        }
        .li-active {
          background: #ffd026;
        }
        .li-name {
          margin-top: 8px;
          font-weight: bold;
          font-size: 12px;
          color: #000000;
          font-family: "jtFont";
        }
      }
    }
  }
}
</style>