<template>
  <div class="rewards_main" :class="{'rewards_main-dark': MODE_STATE}">
    <div class="rewards_content">
      <div class="reward_info" :class="{'reward_info-dark': MODE_STATE}">
        <p>{{$t('Reward_date')}}</p>
        <p>{{$t('Reward_XCH')}}</p>
      </div>
      <div class="main_info">
        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <div class="cashback">
            <p :class="{'name-dark': MODE_STATE}">0.00356</p>
            <p>Including Cashback 0.000356</p>
          </div>
        </div>

        <hr :class="{'hr-dark': MODE_STATE}">

        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <div class="cashback">
            <p :class="{'name-dark': MODE_STATE}">0.00356</p>
            <p>Including Cashback 0.000356</p>
          </div>
        </div>

        <hr :class="{'hr-dark': MODE_STATE}">

        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <div class="cashback">
            <p :class="{'name-dark': MODE_STATE}">0.00356</p>
          </div>
        </div>

        <hr :class="{'hr-dark': MODE_STATE}">

        <div class="main_info__item">
          <p class="date">06.06.2021 19:48</p>
          <div class="cashback">
            <p :class="{'name-dark': MODE_STATE}">0.00356</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "Rewards",
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">
.rewards_main{
  max-width: 1170px;
  height: 373px;
  background: #FFFFFF;
  border-radius: 36px;
  padding:42px 42px 0px 42px;
  .rewards_content{
    .reward_info{
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
      p:nth-child(2){
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
        .cashback{
          p:nth-child(1){
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 27px;
            color: #4B6067;
            text-align: right;


          }

          p:nth-child(2){
            font-weight: 500;
            font-size: 12px;
            line-height: 100%;
            letter-spacing: 0.04em;
            color: rgba(75, 80, 103, 0.6);}
        }
      }
    }

  }
}
.rewards_main-dark{
  background: #212121 !important;
}
.reward_info-dark{
  background: #1A1A1A !important;
}
.hr-dark{
  border: 1px solid  #1A1A1A !important;
}
.name-dark{
  color: #A1D3CE !important;
}
</style>