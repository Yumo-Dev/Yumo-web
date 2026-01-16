<template>
  <div class="modifyName">
    <van-overlay :show="modifyNameShow">
      <div class="container_name">
        <div class="content_name">
          <div class="title">{{ t("modifyName.word_T1") }}</div>
          <img
            class="close"
            @click="$emit('overlayClose', false)"
            src="../../assets/image/un/close.png"
            alt=""
          />
          <div class="modify_input">
            <el-input
              v-model="name"
              maxlength="9"
              :placeholder="t('modifyName.word_T2')"
            ></el-input>
            <div class="p" v-if="props.initAccount.isWhitelist == 0">
              {{ t("modifyName.word_T3") }}
            </div>
            <div class="p" v-else>{{ t("modifyName.word_T4") }}</div>
          </div>
          <div class="modify_button">
            <el-button :loading="loading" @click="getChangeName">{{
              t("gamesStart.word_T5")
            }}</el-button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { showToast } from "vant";
import { defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import { defineProps, ref } from "vue";
import { changeName } from "../../api/post";

const { t } = useI18n();

const props = defineProps({
  modifyNameShow: Boolean,
  initAccount: Object,
});

const emit = defineEmits(["overlayClose", "overlayParameter"]);

const name = ref("");
const loading = ref(false);

const getChangeName = () => {
  if (
    !localStorage.getItem("Token-YUMO") &&
    !localStorage.getItem("Account-YUMO")
  )
    return;
  loading.value = true;
  let data = {
    logicSuperior: name.value,
  };
  changeName(data).then((res) => {
    if (res.data.code === 200) {
      showToast(t("modifyName.word_T5"));
      setTimeout(() => {
        emit("overlayParameter", false);
      }, 1000);
      loading.value = false;
    } else {
      showToast(t(`codeInfo.${res.data.msg}`));
      loading.value = false;
    }
  });
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .modifyName {
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
          height: 270px;
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
          .modify_input {
            margin-top: 20px;
            .el-input {
              .el-input__wrapper {
                width: 100%;
                height: 58px;
                background: #fff7dd;
                border-radius: 10px;
                border: 2px solid #000000;
                padding: 0 10px;
                .el-input__inner {
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  font-weight: bold;
                  font-size: 12px;
                  color: #000;
                  font-family: "jtFont";
                }
                .el-input__inner::placeholder {
                  color: #c9bd97;
                }
              }
              .el-input__wrapper.is-focus {
                box-shadow: none;
              }
            }
            .p {
              margin-top: 10px;
              font-weight: bold;
              font-size: 12px;
              color: #000;
              font-family: "jtFont";
              text-align: center;
            }
          }
          .modify_button {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 30px;
            margin: auto;
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