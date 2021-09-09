<template>

  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="login">
      <!-- login--inner -->
      <div @click.stop class="login--inner">

        <button @click="close" class="close--btn"></button>


        <div class="wrapper">

          <h2 class="title_wallet">Enter your wallet</h2>

          <div class="title_input">Just put your (XCH) address below</div>

          <input class="login--input" type="text" placeholder="Placeholder">

          <button @click="confirm" :disabled="isConfirmationCorrect" class="login--stats_btn">Go to my stats<img
              src="../assets/images/icons/login_w.svg" alt="login"></button>

        </div>
        <!-- /.wrapper -->


      </div>
      <!-- /.login--inner -->

    </div>
  </div>
</template>

<script>
  export default {
    currentPopupController: null,

    data() {
      return {
        isOpen: false
      };
    },

    mounted() {
      document.addEventListener("keydown", this.handleKeydown);
    },
    beforeUnmount() {
      document.removeEventListener("keydown", this.handleKeydown);
    },

    methods: {
      handleKeydown(e) {
        if (this.isOpen && e.key === "Escape") {
          this.close();
        }
      },

      open() {
        let resolve;
        let reject;
        const popupPromise = new Promise((ok, fail) => {
          resolve = ok;
          reject = fail;
        });

        this.$options.popupController = {
          resolve,
          reject
        };
        this.isOpen = true;

        return popupPromise;
      },

      confirm() {
        this.$options.popupController.resolve(true);
        this.isOpen = false;
      },

      close() {
        this.$options.popupController.resolve(false);
        this.isOpen = false;
      },
    },
  };
</script>

<style scoped lang='scss'>
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
  }

  .login {
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    z-index: 101;
  }


  .login--inner {
    position: relative;
    max-width: 1170px;
    width: 100%;
    height: 479px;
    background: #00B9BD;
    border-radius: 0px 0px 42px 42px;
  }


  .close--btn {
    position: absolute;
    top: 30px;
    right: 147px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: transparent url(../assets/images/icons/x.svg) center no-repeat;
    border: none;
    border-radius: 6px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 120px;
    right: 135px;
    width: 470px;
    text-align: right;
  }

  .title_wallet {
    /* desktop/h2 */
    margin: 0 0 30px 0;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    /* identical to box height, or 117% */
    /* light/card (white) */
    color: #FFFFFF;
  }

  .title_input {
    margin: 0 0 12px 0;
    /* desktop/caption */
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    /* identical to box height, or 18px */
    /* light/white_label */
    color: rgba(255, 255, 255, 0.6);
  }


  .login--input {
    margin: 0 0 30px 0;
    padding: 7px 0 7px 12px;
    width: 470px;
    height: 48px;
    border: 2px solid #F7F8FC;
    //box-sizing: border-box;
    border-radius: 12px;

    /* desktop/text */
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    //line-height: 24px;
    /* identical to box height, or 109% */
    /* light/main */
    color: #4B6067;


    &::placeholder {
      /* desktop/text */
      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      //line-height: 24px;
      /* identical to box height, or 109% */
      /* light/main */
      color: #4B6067;
    }
  }


  .login--stats_btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 218px;
    height: 48px;
    padding: 0 12px 0 18px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    border: none;

    /* desktop/text */
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    /* identical to box height, or 109% */
    /* light/card (white) */
    color: #FFFFFF;


    img {
      width: 24px;
      height: 24px;
    }
  }
</style>