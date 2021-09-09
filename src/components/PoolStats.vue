<template>
  <MainLayout>
  <div class="main">
    <div class="content">
      <div class="first_content">
      <div class="stats">
        <p>{{ $t('stats') }}</p>

        <div class="names">
          <p>{{ $t('pool_capacity') }}</p>
          <p>{{ $t('pool_fee') }}</p>
        </div>
        <div class="data">
          <p>100 PiB</p>
          <p>1%</p>
        </div>

        <div class="names2">
          <p>{{ $t('farmers_online') }}</p>
          <p>{{ $t('workers_online') }}</p>
        </div>

        <div class="data2">
          <p>14791</p>
          <p>14791</p>
        </div>
      </div>

      <div class="xch" :class="{'xch-dark': MODE_STATE}">
          <p :class="{'lighter-caption': MODE_STATE}">XCH</p>

          <div class="names">
            <p :class="{'darker-caption': MODE_STATE}">{{ $t('payment_scheme') }}</p>
            <p :class="{'darker-caption': MODE_STATE}">{{ $t('network_capacity') }}</p>
            <div class="percents">
              <img src="../assets/high.svg" alt="">
              <p>12%</p>
            </div>
          </div>

        <div class="main_names">
          <p :class="{'lighter-caption': MODE_STATE}">PPLNS</p>
          <p :class="{'lighter-caption': MODE_STATE}">23.55 EiB</p>
        </div>

        <div class="names2">
          <p :class="{'darker-caption': MODE_STATE}">Blockchain Height</p>
          <p :class="{'darker-caption': MODE_STATE}">Network Difficulty</p>
        </div>

        <div class="data">
          <p :class="{'lighter-caption': MODE_STATE}">444581</p>
          <p :class="{'lighter-caption': MODE_STATE}">1164</p>
        </div>

        </div>
      </div>
      <img src="../assets/graphic.svg" alt="" class="graphic">
      <div class="last_content">
        <div class="top_adress" :class="{'top_adress-darker': MODE_STATE}">
          <p class="main_caption" :class="{'main_caption-darker': MODE_STATE}">{{$t('top_adress')}}</p>
          <div class="row_names">
            <p>Adress</p>
            <p>Plots</p>
            <p>Capacity</p>
          </div>

            <div class="row_data" :class="{'row_data_darker': MODE_STATE}">
              <p>0xe8abc143</p>
              <p>300</p>
              <p>30.42 TiB</p>
            </div>
            <div class="row_data gray" :class="{'row_data_black': MODE_STATE}">
              <p>0xe8abc143</p>
              <p>300</p>
              <p>30.42 TiB</p>
            </div>
            <div class="row_data" :class="{'row_data_darker': MODE_STATE}">
              <p>0xe8abc143</p>
              <p>300</p>
              <p>30.42 TiB</p>
            </div>
            <div class="row_data gray" :class="{'row_data_black': MODE_STATE}">
              <p>0xe8abc143</p>
              <p>300</p>
              <p>30.42 TiB</p>
            </div>
            <div class="row_data" :class="{'row_data_darker': MODE_STATE}">
              <p>0xe8abc143</p>
              <p>300</p>
              <p>30.42 TiB</p>
            </div>
        </div>

        <div class="block_found" :class="{'found-dark': MODE_STATE}">
          <p :class="{'main-title': MODE_STATE}">{{$t('last_block')}}</p>
          <div class="row_names">
            <p>Block</p>
            <p>Confirmation</p>
            <p>Time</p>
            <p>Amount</p>
          </div>

          <div class="row_data" :class="{'row_data-dark': MODE_STATE}">
            <p>12678676</p>
            <div class="confirmed"><p>Confirmed</p></div>
            <p class="time">19:21 06-21</p>
            <p class="amount">2.741324	</p>
          </div>

          <div class="row_data" :class="{'row_data-darker': MODE_STATE}">
            <p>12678676</p>
            <div class="confirmed"><p>Confirmed</p></div>
            <p class="time">19:21 06-21</p>
            <p class="amount">2.741324	</p>
          </div>

          <div class="row_data" :class="{'row_data-dark': MODE_STATE}" >
            <p>12678676</p>
            <div class="confirmed"><p>Confirmed</p></div>
            <p class="time">19:21 06-21</p>
            <p class="amount">2.741324	</p>
          </div>

          <div class="row_data" :class="{'row_data-darker': MODE_STATE}">
            <p>12678676</p>
            <div class="confirmed"><p>Confirmed</p></div>
            <p class="time">19:21 06-21</p>
            <p class="amount">2.741324	</p>
          </div>

          <div class="row_data" :class="{'row_data-dark': MODE_STATE}">
            <p>12678676</p>
            <div class="confirmed"><p>Confirmed</p></div>
            <p class="time">19:21 06-21</p>
            <p class="amount">2.741324	</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layout/MainLayout";
import {mapGetters} from "vuex";
export default {
name: "PoolStats",
  components: {MainLayout},
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">
.graphic{
  margin: 50px 0px 0px;
}
.main{
  margin-top: 50px;
  margin-bottom: 119px;
}
.content{
  .first_content{
    display: flex;
  .stats{
    padding: 42px;
    width: 570px;
    height: 303px;
    background: #00B9BD;
    border-radius: 36px;
    p:nth-child(1){
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      color: #FFFFFF;
    }
    div.names{
      display: flex;
      margin-top: 30px;
      margin-bottom: 6px;
      p:nth-child(1){
        margin-right: 208px;
      }
      p:nth-child(1),p:nth-child(2){
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.6);
        max-width: 45px;
      }
    }
    .data{
      display: flex;
      p:nth-child(1){
        margin-right: 128px;
      }
      p:nth-child(1),p:nth-child(2){
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        color: #FFFFFF;
      }
    }
    .names2{
      margin-top: 24px;
      display: flex;
      p:nth-child(2){
        margin-left: 255px;
      }
      p:nth-child(1){
        position: absolute;
      }
      p:nth-child(1),p:nth-child(2){
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        color: rgba(255, 255, 255, 0.6);
      }
    }
    .data2{
      display: flex;
      margin-top: 3px;
      p:nth-child(1){
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
        color: #FFFFFF;
        margin-right: 201px;
      }
      p:nth-child(1),p:nth-child(2){
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }
  }
    .xch{
      margin-left: 30px;
      width: 570px;
      height: 303px;
      background: #FFFFFF;
      border-radius: 36px;
      padding: 42px;
        p:nth-child(1){
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 100%;
          color: #4B6067;
        }
        .names{
          margin-top: 30px;
          display: flex;
          p:nth-child(1){
            width: 91px;
          }
          p:nth-child(2){
            width: 120px;
            margin-left: 104px;
          }
          p:nth-child(1),p:nth-child(2){
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: rgba(75, 80, 103, 0.6);
          }
          .percents{
            display: flex;
            margin-top: 4px;
            img {
              margin-right: 2px;
              margin-left: 12px;
              width: 6px;
              height: 10px;
            }
            p{
              margin-left: 0px;
              width: 34px;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 100%;
              color: #00B9BD;
            }
          }
        }
      .main_names{
        display: flex;
        margin-top: 6px;
        p:nth-child(1){
          margin-right: 75px;
        }
        p:nth-child(1),p:nth-child(2){
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: #4B6067;
        }
      }
      .names2{
        display: flex;
        margin-top: 24px;
        p:nth-child(1){
          margin-right: 35px;
        }
        p:nth-child(1),p:nth-child(2){
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 100%;
          color: rgba(75, 80, 103, 0.6);
        }
      }
      .data{
        display: flex;
        margin-top: 3px;
        p:nth-child(1){
          margin-right: 122px;
        }
        p:nth-child(1),p:nth-child(2){
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: #4B6067;
        }
      }
    }
    .xch-dark{
      background: #212121;
    }
    .darker-caption{
      color: rgba(149, 166, 182, 0.6) !important;
    }
    .lighter-caption{
      color: #A1D3CE !important;
    }
  }
  .last_content{
    display: flex;
    margin-top: 60px;
    .top_adress{
      margin-right: 30px;
      padding: 42px 42px 42px 0;
      width: 470px;
      height: 442px;
      background: #FFFFFF;
      border-radius: 36px;
      p:nth-child(1).main_caption{
        padding-left: 42px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: #4B6067;
      }
      .row_names{
        display: flex;
        margin-top: 42px;
        margin-bottom: 15px;
        padding-left: 54px;
        p{
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 100%;
          color: rgba(75, 80, 103, 0.6);
        }
        p:nth-child(1){
          margin-right: 125px;
        }
        p:nth-child(2){
          margin-right: 60px;
        }
      }
        .row_data{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 54px;
          p:nth-child(1){
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: #4B6067;
          }
          p:nth-child(2),p:last-child{
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 24px;
            color: #4B6067;
          }
        }
      .row_data.gray{
        margin: 15px 0px 15px 42px;
        width: 398px;
        padding: 12px;
        height: 51px;
        background: #F7F8FC;
        border-radius: 12px;
      }
    }
    .top_adress-darker{
      background: #212121;
    }
    .main_caption-darker{
      color: #A1D3CE !important;
    }
    .row_data_darker{
      p{
        color: #A1D3CE !important;
      }
    }
    .row_data_black{
      background: #1A1A1A !important;
      p{
        color: #A1D3CE !important;
      }
    }
    .block_found{
      width: 670px;
      height: 442px;
      padding: 42px;
      background: #FFFFFF;
      border-radius: 36px;
      p:nth-child(1){
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: #4B6067;
        margin-bottom: 42px;
      }
      .row_names{
        display: flex;
        //justify-content: space-between;
        p{
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 100%;
          color: rgba(75, 80, 103, 0.6);
          margin-right: 45.33px;
        }
        p:nth-child(1),p:nth-child(2){
          width: 120px;
        }
        p:nth-child(3){
          width: 130px;
        }
        p:nth-child(4){
          width: 110px;
        }
      }
      .row_data{
        display: flex;
        margin-bottom: 15px;
        height: 40px;
        p{
          margin-bottom: 0px;
        }
        p:first-child{
          width: 120px;
          margin-right: 27.33px;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: #4B6067;
        }
        .confirmed{
          padding: 5px 6px;
          width: 92px;
          height: 24px;
          background: #00B9BD;
          border-radius: 12px;
          margin-right: 71.33px;
          p{
            width: 74px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 100%;
            text-align: center;
            letter-spacing: 0.04em;
            color: #FFFFFF;
          }
        }
        p.time{
          width: 120px;
          margin-right: 27.33px;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(75, 80, 103, 0.6);
        }
        p.amount{
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 27px;
          text-align: right;
          color: #4B6067;
        }
      }

    }
    .found-dark{
      background: #212121;
    }
    .main-title{
      color: #A1D3CE !important;
    }
    .row_data-dark,.row_data-darker{
      p{
        color: #A1D3CE !important;
      }
    }
  }
}

</style>