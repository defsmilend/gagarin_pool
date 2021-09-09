<template>
  <div class="main">
    <div class="workers" :class="{'workers-dark': MODE_STATE}">
      <div class="header">
        <p :class="{'name-dark': MODE_STATE}">{{$t('Total_Workers')}}</p>
        <div class="add_worker">
          <p>{{$t('Add_Worker')}}</p>
          <img src="../assets/add.svg" alt="">
        </div>
      </div>

      <div class="status">
        <div class="status__info online" :class="{'status__info-dark': MODE_STATE}">
          <img src="../assets/online.svg" alt="">
          <p>Online</p>
          <p>12</p>
        </div>

        <div class="status__info offline" :class="{'status__info-dark': MODE_STATE}">
          <img src="../assets/offline.svg" alt="">
          <p>Offline</p>
          <p>3</p>
        </div>

        <div class="status__info warning" :class="{'status__info-dark': MODE_STATE}">
          <img src="../assets/warning.svg" alt="">
          <p>Warning</p>
          <p>2</p>
        </div>
      </div>

      <div class="form" >
        <label>
          <input type="text" placeholder="Filter By Worker Name" :class="{'form-dark': MODE_STATE}">
          <button><img src="../assets/search.svg" alt=""></button>
        </label>
      </div>

      <div class="table">
        <div class="row_names" :class="{'row_names-dark': MODE_STATE}">
          <p :class="{'name-dark': MODE_STATE}">Name</p>
          <p :class="{'name-dark': MODE_STATE}">Token</p>
          <p :class="{'name-dark': MODE_STATE}">Plot Count</p>
          <div class="last_row">
            <p>Status</p>
            <img src="../assets/arrow_bottom.svg" alt="">
          </div>
        </div>

        <div class="row_data">
          <p :class="{'name-dark': MODE_STATE}">Robocop</p>
          <p>x4d7ajd726fn16312m2b31</p>
          <p>324</p>
          <div class="status">
            <p>Online</p>
          </div>
        </div>
        <hr/>
        <div class="row_data">
          <p :class="{'name-dark': MODE_STATE}">Robocop</p>
          <p>x4d7ajd726fn16312m2b31</p>
          <p>324</p>
          <div class="status">
            <p>Online</p>
          </div>
        </div>
        <hr/>

        <div class="row_data">
          <p :class="{'name-dark': MODE_STATE}">Robocop</p>
          <p>x4d7ajd726fn16312m2b31</p>
          <p>324</p>
          <div class="status">
            <p>Online</p>
          </div>
        </div>
        <hr/>
        <div class="row_data">
          <p :class="{'name-dark': MODE_STATE}">Robocop</p>
          <p>x4d7ajd726fn16312m2b31</p>
          <p>324</p>
          <div class="status">
            <p>Online</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "Workers",
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">
.main{
  .workers{
    background: #FFFFFF;
    border-radius: 36px;
    padding: 42px;
    width: 1170px;
    height: 655px;
    .header{
      display: flex;
      justify-content: space-between;
      p:first-child{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: #4B6067;

      }
      .add_worker{
        display: flex;
        padding: 12px 18px;
        min-width: 186px;
        height: 48px;
        background: rgba(0, 185, 189, 0.1);
        border-radius: 12px;
        p:first-child{
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 24px;
          color: #00B9BD;
          margin-right: 14px;
        }
        img{
          cursor: pointer;
        }
      }
    }
    .status{
      display: flex;
      justify-content: space-between;
      margin-top: 42px;
      &__info{
        display: flex;
        padding: 42px;
        width: 342px;
        height: 126px;
        border: 2px solid #F7F8FC;
        box-sizing: border-box;
        border-radius: 36px;
        background: #FFFFFF;
        p{
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: rgba(75, 80, 103, 0.6);
        }
        p:nth-child(2){
          margin-left: 15px;
          margin-right: 12px;
        }
      }
    }
    .form{
      margin-top: 30px;

      label{
        position: relative;
        input{
          width: 476px;
          height: 48px;
          padding: 12px;
          background: #FFFFFF;
          border: 2px solid #F7F8FC;
          box-sizing: border-box;
          border-radius: 12px;
        }
        input::placeholder{
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(75, 80, 103, 0.6);
        }
        button{
          border: none;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 10px;
          background-color: unset;
        }
      }
    }
    .table{
      margin-top: 30px;
      .row_names{
        padding: 12px;
        width: 1086px;
        height: 48px;
        background: #F7F8FC;
        border-radius: 12px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 25px;
        p{
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: #4B6067;
        }

        .last_row{
          display: flex;
          img{
            margin-left: 17px;
          }
        }
      }

      .row_data{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 12px;
        width: 1086px;
        height: 48px;
        border-radius: 12px;
        p:nth-child(1){
          color: #4B6067;
        }
        p:nth-child(2){
          margin-left: 125px;
        }
        p:nth-child(3){
          margin-right: 280px;
        }
        p{
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 24px;
          color: rgba(75, 80, 103, 0.6);
        }
        .status{
          margin-top: 0px;
          width: 84px;
          height: 24px;
          background: #00B9BD;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 6px;
          p{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 100%;
            text-align: center;
            letter-spacing: 0.04em;
            color: #FFFFFF;
          }
        }
      }
      hr{
        background: #F7F8FC;
        opacity: 0.3;
      }
    }
  }
  .workers-dark{
    background: #212121;
  }
  .name-dark{
    color: #A1D3CE !important;
  }
  .status__info-dark{
    background: #212121 !important;
    border: 2px solid #1A1A1A !important;
  }
  .form-dark{
    background: #212121 !important;
    border: 2px solid #1A1A1A !important;
  }
  .row_names-dark{
    background: #1A1A1A !important;
  }

}

</style>