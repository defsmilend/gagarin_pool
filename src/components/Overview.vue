<template>
  <div class="main">
    <div class="content">
      <div class="balance_data_info">
        <div class="balance">
          <p>{{$t('Balance')}}</p>
          <div class="balance_info">
            <p>4.324567</p>
            <p>XCH</p>
          </div>
        </div>
        <div class="network_data"  :class="{'network_data-dark': MODE_STATE}">
          <p class="name" :class="{'name-dark': MODE_STATE}">{{$t('Network_Data')}}</p>
          <div class="data">
            <p>Day</p>
            <p>Week</p>
            <p>Month</p>
          </div>
          <div class="xch">
            <p>XCH</p>
            <p :class="{'name-dark': MODE_STATE}">0.0000</p>
            <p :class="{'name-dark': MODE_STATE}">0.0000</p>
            <p :class="{'name-dark': MODE_STATE}">0.0000</p>
          </div>
          <div class="total">
            <p class="name">Total</p>
            <p :class="{'name-dark': MODE_STATE}">$ 0.00</p>
            <p :class="{'name-dark': MODE_STATE}">$ 0.00	</p>
            <p :class="{'name-dark': MODE_STATE}">$ 0.00	</p>
          </div>
          <div class="question">
            <p>How To Calculated</p>
            <img src="../assets/question.svg" alt="">
          </div>
        </div>
      </div>

        <img src="../assets/graphic.svg" alt="" class="graphic">
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "Overview",
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">
.graphic{
  margin-top: 50px;
  margin-bottom: 50px;
}
.content{
  .balance_data_info {
    display: flex;
    .balance {
      margin-right: 30px;
      background: #00B9BD;
      border-radius: 36px;
      width: 470px;
      height: 331px;
      padding: 42px;

      p:nth-child(1) {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 161px;
      }

      .balance_info {
        display: flex;

        p:nth-child(1) {
          font-style: normal;
          font-weight: normal;
          font-size: 54px;
          line-height: 62px;
          color: #FFFFFF;
          margin-right: 85px;
        }

        p:nth-child(2) {
          padding-top: 23px;
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }

    .network_data {
      padding: 42px;
      width: 670px;
      height: 331px;
      background: #FFFFFF;
      border-radius: 36px;

      p.name {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: #4B6067;
        margin-bottom: 30px;
      }

      .data {
        display: flex;

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 25px;
          color: rgba(75, 80, 103, 0.6);
        }

        p:nth-child(1) {
          margin-left: 195px;
          margin-right: 130px;
        }

        p:nth-child(2) {
          margin-right: 115px;
        }
      }

      .xch {
        display: flex;
        margin-top: 18px;

        p:nth-child(1) {
          margin-right: 120px;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(75, 80, 103, 0.6);
        }

        p:nth-child(2), p:nth-child(3), p:nth-child(4) {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 27px;
          color: #4B6067;
        }

        p:nth-child(3), p:nth-child(4) {
          margin-left: 110px;
        }
      }

      .total {
        display: flex;
        margin-top: 21px;

        p:nth-child(1) {
          margin-right: 120px;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(75, 80, 103, 0.6);
        }

        p:nth-child(2), p:nth-child(3), p:nth-child(4) {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 27px;
          color: #4B6067;
        }

        p:nth-child(3), p:nth-child(4) {
          margin-left: 115px;
        }
      }
      .question{
        margin-left: 350px;
        width: 248px;
        height: 48px;
        padding: 12px;
        display: flex;
        border: 1px solid rgba(0, 185, 189, 0.1);
        box-sizing: border-box;
        border-radius: 12px;
        p{
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          line-height: 24px;
          color: #00B9BD;
          margin-right: 7px;
        }
      }
    }
  }
  .yourProfitability{
    margin-top: 60px;
    padding: 42px;
    width: 1170px;
    height: 436px;
    background: #FFFFFF;
    border-radius: 30px;
    p{
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      color: #4B6067;

    }
  }
  .network_data-dark{
    background: #212121 !important;
  }
  .name-dark{
    color: #A1D3CE !important;
  }
}

</style>