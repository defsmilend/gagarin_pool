<template>
  <div class="payouts_main" :class="{'payouts_main-dark': MODE_STATE}">
    <div class="payouts_content">
      <div class="payouts_info" :class="{'payouts_info-dark': MODE_STATE}">
        <p>{{ $t('Reward_date') }}</p>
        <p>{{$t('Reward_XCH')}}</p>
        <p>{{$t('Link')}}</p>
      </div>
      <div class="main_info">
        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <p :class="{'name-dark': MODE_STATE}">0.00356</p>
          <a href="#">Link</a>
        </div>

        <hr :class="{'hr-dark': MODE_STATE}">

        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <p :class="{'name-dark': MODE_STATE}">0.00356</p>
          <a href="#">Link</a>
        </div>

        <hr :class="{'hr-dark': MODE_STATE}">

        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <p :class="{'name-dark': MODE_STATE}">0.00356</p>
          <a href="#">Link</a>
        </div>

        <hr :class="{'hr-dark': MODE_STATE}">

        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <p :class="{'name-dark': MODE_STATE}">0.00356</p>
          <a href="#">Link</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Payouts",
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">
.payouts_main{
  max-width: 1170px;
  height: 373px;
  background: #FFFFFF;
  border-radius: 36px;
  padding:42px 42px 0px 42px;
  .payouts_content{
    .payouts_info{
      max-width: 1086px;
      height: 42px;
      background: #F7F8FC;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        font-family: 'Manrope', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        color: rgba(75, 80, 103, 0.6);
      }
      p:nth-child(1){
        padding-left: 12px;
      }
      p:nth-child(3){
        padding-right: 12px;
      }
    }
    .main_info{
      hr{
        border: 1px solid  #F7F8FC;
        margin-bottom: 12px;
      }
      margin-top: 25px;
      .main_info__item{
        padding-left: 12px;
        padding-right: 12px;
        display: flex;
        justify-content: space-between;
        p.date{
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(75, 80, 103, 0.6);
        }
        p:nth-child(2){
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          /* identical to box height, or 109% */

          text-align: right;

          /* light/main */

          color: #4B6067;
        }
        a{
          text-decoration: none;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          text-align: right;
          text-decoration-line: underline;
          color: #00B9BD;
        }
      }
    }
  }
}
.payouts_main-dark{
  background: #212121 !important;
}
.payouts_info-dark{
  background: #1A1A1A !important;
}
.hr-dark{
  border: 1px solid  #1A1A1A !important;
}
.name-dark{
  color: #A1D3CE !important;
}

</style>
