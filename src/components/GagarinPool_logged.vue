<template>
  <MainLayout>
    <div class="main">
      <div class="account_header" :class="{'account_header-dark': MODE_STATE}">
        <div class="account_header__content" >
          <p>XCH :</p>
          <p :class="{'caption-dark': MODE_STATE}">0xe454cbxcvb435vsd34f...</p>
          <p>Min Payout:</p>
          <div class="min_payout">
            <p>0.5 XCH </p>
            <img src="../assets/main_payout.svg" alt="">
          </div>
        </div>
    </div>
        <div class="navigation">
          <a
           href="#"
           @click="activeComponent = tab.code"
           v-for ="tab in tabs"
           :key="tab.code"
           :class="{active: activeComponent === tab.code}"
          >
            {{$t(tab.name)}}
          </a>
        </div>
        <Overview
            v-if="activeComponent === 'Overview'"
        />
        <Workers
            v-if="activeComponent === 'Workers'"
        />
        <Rewards
            v-if="activeComponent === 'Rewards'"
        />
        <Payouts
            v-if="activeComponent === 'Payouts'"
        />
        <ReferralProgram
            v-if="activeComponent === 'ReferralProgram'"
        />
  </div>
  </MainLayout>
</template>

<script>
import Rewards from "@/components/Rewards";
import Payouts from "@/components/Payouts";
import ReferralProgram from "@/components/ReferralProgram";
import Overview from "@/components/Overview";
import Workers from "@/components/Workers";
import MainLayout from "@/layout/MainLayout";
import {mapGetters} from "vuex";
export default {
  name: "GagarinPool_logged",
  components: {MainLayout, Workers, Overview, ReferralProgram, Payouts, Rewards},
  data() {
    return {
      // rewards:false,
      // payouts :false,
      activeComponent: "Overview",
      tabs: [
        {
          name: "Overview",
          code: "Overview"
        },
        {
          name: "Workers",
          code: "Workers"
        },
        {
          name: "Rewards",
          code: "Rewards"
        },
        {
          name: "Payouts",
          code: "Payouts"
        },
        {
          name: "ReferralProgram",
          code: "ReferralProgram"
        },
      ]
    }
  },
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">

  .main {
    margin: 60px 0 0 0;
  }

  .account_header-dark{
    background: #212121 !important;
  }
  .caption-dark{
    color: #A1D3CE !important;
  }
  .account_header {
    max-width: 735px;
    height: 72px;
    background: #FFFFFF;
    border-radius: 18px;
    display: flex;
    align-items: center;
    &__content{
      display: flex;
      align-items: center;
      p{
        font-family: 'Manrope', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
      }
      p:nth-child(1){
        padding-left: 24px;
        color: rgba(75, 80, 103, 0.6);
        margin-right: 12px;
      }
      p:nth-child(2){
        color: #4B6067;
        margin-right: 42px;
      }
      p:nth-child(3){
        color: rgba(75, 80, 103, 0.6);
        margin-right: 22px;
      }
      .min_payout{
        width: 140px;
        height: 48px;
        border: 1px solid rgba(0, 185, 189, 0.1);
        box-sizing: border-box;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          padding: 0px;
          color: #00B9BD;
          margin-right: 12px;
        }
      }
     }
  }
  .navigation{
    margin-top: 70px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    a{
      font-family: 'Manrope', sans-serif;
      text-decoration: none;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      color: #4B6067;
      &.active{
        color: #00B9BD;
        padding-bottom: 12px;
        border-bottom: 3px solid;
      }
    }
  }
  .Rewards,.Payouts{
    margin-top: 60px;
  }
</style>
