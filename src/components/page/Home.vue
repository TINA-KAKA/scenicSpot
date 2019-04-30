<template>
  <div id="home">
    <div class="index-whole">
      <div class="list-div">
        <h5 class=" list-title">类别 <i class="iconfont icon-arrow_r f12"></i></h5>
        <ul class="kind-ul">
          <li><img src="img/index01.png" alt=""><span class="img-alt">著名景点</span></li>
          <li><img src="img/index02.png" alt=""><span class="img-alt">博物馆</span></li>
          <li><img src="img/index03.png" alt=""><span class="img-alt">剧院</span></li>
        </ul>
      </div>
      <div class="list-div">
        <h5 class="list-title">热门景点<i class="iconfont icon-arrow_r f12"></i></h5>
        <ul class="feature-ul">
          <li>
            <div class="feature-div">
              <img src="img/index04.png" alt="">
              <p class="p1">武汉大学</p>
              <p class="p2">距离您当前位置3.5公里</p>
            </div>
          </li>
          <li>
            <div class="feature-div">
              <img src="img/index05.png" alt="">
              <p class="p1">武汉江滩夜景</p>
              <p class="p2">距离您当前位置2.8公里</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-div">
        <h5 class="list-title">游记<i class="iconfont icon-arrow_r f12"></i></h5>
        <ul class="feature-ul">
          <li>
            <div class="feature-div">
              <img src="img/index06.png" alt="">
              <p class="p1">“武汉大学的樱花不一定是全国高校中最好看的 樱花，但是武汉大学的樱花一定是最有名的”</p>
            </div>
          </li>
          <li>
            <div class="feature-div">
              <img src="img/index07.png" alt="">
              <p class="p1">“户部巷是武汉最出名的一条小吃街，里面掺杂 着各种烧烤小吃，无论是下午</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-div">
        <h5 class="list-title">当地美食 <i class="iconfont icon-arrow_r f12"></i></h5>
        <ul class="feature-ul">
          <li>
            <div class="feature-div">
              <img src="img/index08.png" alt="">
              <p class="p1">蔡林记热干面 </p>
              <p class="p2">推荐好店：武汉市汉口中山大道845号</p>

            </div>
          </li>
          <li>
            <div class="feature-div">
              <img src="img/index09.png" alt="">
              <p class="p1">三鲜豆皮 </p>
              <p class="p2">推荐好店：武汉市武昌区户部巷</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

  export default {
    name: "Home",

  }
</script>

<style scoped>

</style>
