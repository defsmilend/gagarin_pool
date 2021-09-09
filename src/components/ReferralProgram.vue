<template>
  <div class="main">
    <div class="content">
      <div class="join_chat"
           v-if="join_chat"
      >
        <div class="header">
          <p>{{$t('promocode')}}</p>
          <img @click="closeJoinChat()" src="../assets/close.svg" alt="">
        </div>
        <p class="main_caption">{{$t('join_telegram')}}</p>
        <button>
          <p>{{$t('join_chat')}}</p>
          <img src="../assets/telegram.svg" alt="">
        </button>
      </div>
      <div class="status"  >
        <div class="cashback_status" :class="{'status-dark': MODE_STATE}">
          <p :class="{'name-dark': MODE_STATE}">Cashback Status</p>
          <p :class="{'name-dark': MODE_STATE}">Promo Code</p>
          <label>
            <input type="text" placeholder="Insert Promocode">
            <button><img src="../assets/send.svg" alt=""></button>
          </label>
          <div class="cashback_info">
            <p>Cashback</p>
            <p>-</p>
          </div>
          <div class="expired_info">
            <p>Expired</p>
            <p>-</p>
          </div>
        </div>

        <div class="referal_data" :class="{'status-dark': MODE_STATE}">
          <p :class="{'name-dark': MODE_STATE}">Your Referral Data</p>

          <p id="partner_link" class="input_name">Your Partner Link</p>
          <label for="partner_link" class="label_partner">
            <input type="text" placeholder="https://link">
            <button><img src="../assets/copy.svg" alt=""></button>
          </label>

          <p id="promo_code" class="input_name">Promo Code</p>
          <label for="promo_code" class="label_promo">
            <input type="text" placeholder="5ace9">
            <button><img src="../assets/copy.svg" alt=""></button>
          </label>

          <div class="question_part">
            <p class="question">How to become a partner?</p>
            <button><img src="../assets/question.svg" alt=""></button>
          </div>

        </div>
      </div>


      <div class="attracted_rewards" :class="{'status-dark': MODE_STATE}">
        <div class="navigation">
          <a
              href="#"
              @click="activeComponent = tab.code"
              v-for ="tab in tabs"
              :key="tab.code"
              :class="{active: activeComponent === tab.code}"
          >
            {{tab.name}}
          </a>
        </div>

        <div class="rewards_main"
             v-if="activeComponent === 'Rewards'"
        >
          <div class="rewards_content">
            <div class="reward_info">
              <p>Reward Date</p>
              <p>Reward (XCH)</p>
            </div>
            <div class="main_info">
              <div class="main_info__item">
                <p class="date" :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
                <div class="cashback">
                  <p :class="{'name-dark': MODE_STATE}">0.00356</p>
                </div>
              </div>

              <hr :class="{'hr-dark': MODE_STATE}">

              <div class="main_info__item">
                <p class="date" :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
                <div class="cashback">
                  <p :class="{'name-dark': MODE_STATE}">0.00356</p>
                </div>
              </div>

              <hr :class="{'hr-dark': MODE_STATE}">

              <div class="main_info__item">
                <p class="date" :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
                <div class="cashback">
                  <p :class="{'name-dark': MODE_STATE}">0.00356</p>
                </div>
              </div>

              <hr :class="{'hr-dark': MODE_STATE}">

              <div class="main_info__item">
                <p class="date" :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
                <div class="cashback">
                  <p :class="{'name-dark': MODE_STATE}">0.00356</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="payouts_main"
             v-if="activeComponent === 'AttractedMiners'"
        >
          <div class="payouts_content">
            <div class="payouts_info" :class="{'payouts_info-dark': MODE_STATE}">
              <p>Wallet Address</p>
              <p>Hashrate</p>
              <p>Connection Date</p>
            </div>
            <div class="main_info">
              <div class="main_info__item">
                <p class="date">0xe454cbxcvb435vsd34f...</p>
                <p :class="{'name-dark': MODE_STATE}">0.032</p>
                <p :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
              </div>

              <hr :class="{'hr-dark': MODE_STATE}">

              <div class="main_info__item">
                <p class="date">0xe454cbxcvb435vsd34f...</p>
                <p :class="{'name-dark': MODE_STATE}">0.032</p>
                <p :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
              </div>

              <hr :class="{'hr-dark': MODE_STATE}">

              <div class="main_info__item">
                <p class="date">0xe454cbxcvb435vsd34f...</p>
                <p :class="{'name-dark': MODE_STATE}">0.032</p>
                <p :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
              </div>

              <hr :class="{'hr-dark': MODE_STATE}">

              <div class="main_info__item">
                <p class="date">0xe454cbxcvb435vsd34f...</p>
                <p :class="{'name-dark': MODE_STATE}">0.032</p>
                <p :class="{'name-dark': MODE_STATE}">06.06.2021 19:48</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "ReferralProgram",
  data() {
    return {
      join_chat : true,
      activeComponent: "AttractedMiners",
      tabs: [
        {
          name: "Attracted Miners",
          code: "AttractedMiners"
        },
        {
          name: "Rewards",
          code: "Rewards"
        },
      ]
    }},
    methods:{
      closeJoinChat(){
        this.join_chat = false
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
.main{
  .content{
    .join_chat{
      p{
        font-family: 'Manrope', sans-serif;
      }
      img{
        cursor: pointer;
      }
      max-width: 1170px;
      //height: 252px;
      left: calc(50% - 1170px/2);
      top: 366px;
      background: #00B9BD;
      border-radius: 36px;
      display: flex;
      flex-direction: column;
      padding: 42px 44.75px 42px 42px;
      .header{
        display: flex;
        justify-content: space-between;
        p{
          font-family: 'Manrope', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      p.main_caption{
        max-width: 1086px;
        margin-top: 30px;
        font-style: normal;
        font-weight: 500;
        font-size: 35px;
        line-height: 42px;
        color: #FFFFFF;
      }
      button{
        width: 335px;
        min-width: 168px;
        max-height: 48px;
        padding: 12px 18px;
        background: #FFFFFF;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        border: none;
        margin-top: 24px;
        p{
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: #00B9BD;
        }
      }
    }
    .status{
      display: flex;
      margin-top: 60px;
      .cashback_status{
        width: 570px;
        height: 402px;
        background: #FFFFFF;
        border-radius: 36px;
        padding: 42px;
        p:nth-child(1){
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 100%;
          color: #4B6067;
          padding-left: 12px;
        }
        p:nth-child(2){
          //padding-left: 12px;
          margin-right: 12px;
          margin-top: 30px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 100%;
          color: #4B6067;
        }
        label{
          position: relative;
          input{
            margin-top: 12px;
            width: 486px;
            height: 48px;
            background: #FFFFFF;
            border: 2px solid #F7F8FC;
            box-sizing: border-box;
            border-radius: 12px;
          }
          input::placeholder{
            padding-left: 12px;
            font-family: 'Manrope', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: rgba(75, 80, 103, 0.6);
          }
          button{
            border: none;
            position: absolute;
            top:0;
            bottom: 0;
            right:10px;
            background-color: unset;
          }
          button:hover{
            cursor: pointer;
          }
        }

        .cashback_info{
          display: flex;
          margin-top: 24px;
          justify-content: space-between;
          p:nth-child(1){
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: rgba(75, 80, 103, 0.6);
          }
          p:nth-child(2){
            margin-top: 0px;
            margin-right: 12px;
          }
        }
        .expired_info{
          display: flex;
          margin-top: 39px;
          justify-content: space-between;
          p:nth-child(1){
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: rgba(75, 80, 103, 0.6);
          }
          p:nth-child(2){
            margin-top: 0px;
          }
        }
      }
      .referal_data{
        margin-left: 30px;
        padding: 42px;
        background: #FFFFFF;
        border-radius: 36px;
        width: 570px;
        height: 402px;
        p:nth-child(1){
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 100%;
          color: #4B6067;
          margin-bottom: 30px;
        }
        p.input_name{
          margin-bottom: 12px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 100%;
          color: rgba(75, 80, 103, 0.6);
        }
        label.label_partner{
          position: relative;
          input{
            border: 2px solid #F7F8FC;
            border-radius: 12px;
            width: 486px;
            height: 48px;
            margin-bottom: 30px;
          }
          input::placeholder{
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: #4B6067;
          }
          button{
            position: absolute;
            top:0;
            bottom: 0;
            right: 5px;
            border: none;
            background-color: unset;
            cursor: pointer;
          }
        }
        label.label_promo{
          position: relative;
          input{
            border: 2px solid #F7F8FC;
            border-radius: 12px;
            width: 486px;
            height: 48px;
          }
          input::placeholder{
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: #4B6067;
          }
          button{
            position: absolute;
            top:0;
            bottom: 0;
            right: 5px;
            border: none;
            background-color: unset;
            cursor: pointer;
          }
        }
        .question_part{
          margin-left: 160px;
          margin-top: 30px;
          border: 1px solid rgba(0, 185, 189, 0.1);
          box-sizing: border-box;
          border-radius: 12px;
          display: flex;
          max-width: 326px;
          height: 48px;
          position: relative;
          p.question{
            padding-top: 12px;
            margin-bottom: 0px;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: #00B9BD;
          }
          button{
            position: absolute;
            top:0;
            bottom: 0;
            right: 5px;
            border: none;
            background-color: unset;
          }

        }
      }
    }




    .attracted_rewards{
      max-width: 1170px;
      margin-top: 60px;
      height: 427px;
      background: #FFFFFF;
      border-radius: 36px;
      padding:42px 42px 0px 42px;
      .navigation{
        margin-bottom: 30px;
        display: flex;
        justify-content: space-around;
        a{
          font-family: 'Manrope', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: #4B6067;
          text-decoration: none;
          &.active{
            color: #00B9BD;
            padding-bottom: 12px;
            border-bottom: 3px solid;
          }
        }
      }
    }

    .rewards_main{
      max-width: 1170px;
      height: 427px;
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

    .payouts_main{
      max-width: 1170px;
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
            margin-right: 127px;
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
              text-align: right;
              color: #4B6067;
            }
            p{
              font-style: normal;
              font-weight: normal;
              font-size: 22px;
              line-height: 24px;
              text-align: right;
              color: #4B6067;
            }
          }
        }

      }
    }
  }
}
.status-dark{
  background: #212121 !important;
}
.name-dark{
  color: #A1D3CE !important;
}
.payouts_info-dark{
  background: #1A1A1A !important;
}
.hr-dark{
  border: 1px solid  #1A1A1A !important;
}
</style>