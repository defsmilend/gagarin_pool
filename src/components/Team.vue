<template>
  <MainLayout>
    <div class="main">
      <div class="caption">
        <p :class="{'theme-dark-caption': MODE_STATE}">{{ $t('meet') }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="container">
      <div class="names">
        <div class="person" >
          <div class="photo"></div>
          <p :class="{'person_text': MODE_STATE}">John Johnson</p>
          <p>CEO</p>
        </div>

        <div class="person" >
          <div class="photo"></div>
          <p :class="{'person_text': MODE_STATE}">John Johnson</p>
          <p>CEO</p>
        </div>

        <div class="person" >
          <div class="photo"></div>
          <p :class="{'person_text': MODE_STATE}">John Johnson</p>
          <p>CEO</p>
        </div>

        <div class="person" >
          <div class="photo"></div>
          <p :class="{'person_text': MODE_STATE}">John Johnson</p>
          <p>CEO</p>
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
  name: "Team",
  components: {MainLayout},
  computed:{
    ...mapGetters([
      'MODE_STATE'
    ])
  }
}
</script>

<style scoped lang="scss">
.main{
  height: 1489px;
  .caption{
    display: flex;
    margin-top: 172px;
    padding-bottom: 60px;
    p:first-child{
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 120%;
      letter-spacing: -0.02em;
      color: #4B6067;
      margin-right: 158px;
    }
    p:last-child{
      width: 500px;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: -0.02em;
      color: rgba(75, 80, 103, 0.6);
    }
  }
  .container {
    width: 100% !important;
    margin:0 auto;
    //background-color: white !important;
  }
  .names{
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    .person{
      .photo{
        width: 270px;
        height: 340px;
        background: #E3E3E3;
        margin-bottom: 18px;
      }
      p:first-child{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        color: #4B6067;
        margin-bottom: 11px;
      }
      p:last-child{
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
        color: rgba(75, 80, 103, 0.6);
      }
    }
  }
  .theme-dark-caption{
    color: #A1D3CE !important;
  }
  .person_text{
      color: #A1D3CE !important;
  }
}

</style>