<template>

  <div class="add">
    <!-- add--inner -->
    <div class="add--inner">

      <button class="close--btn"></button>


      <div class="wrapper">

        <h2 class="title_wallet">Add A Worker Name</h2>

        <div class="wrapper_add">

          <input class="add--input" type="text" placeholder="Placeholder">

          <button class="add--stats_btn">Add<img src="../assets/images/icons/add_white.svg" alt="add"></button>

        </div>
        <!-- /.wrapper_add -->

      </div>
      <!-- /.wrapper -->


    </div>
    <!-- /.add--inner -->

  </div>

</template>

<script>
  export default {
    name: 'AddWorker',
  }
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
  

  .add {
    width: 100%;
    display: flex;
    justify-content: center;
  }


  .add--inner {
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
    ;
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


.wrapper_add{
  display: flex;
  justify-content: space-between;
  width: 495px;

}


  .add--input {
    margin: 0 0 30px 0;
    padding: 7px 0 7px 12px;
    width: 370px;
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


  .add--stats_btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 113px;
    height: 48px;
    padding: 0 14px 0 18px;
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
    color: #FFF;


    img {
      width: 20px;
      height: 20px;
    }
  }
</style>