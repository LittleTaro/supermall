<template>
  <div class="feature">
    <p class="title">本周流行</p>
    <ul class="popular-list">
      <li>
        <a href="https://detail.tmall.com/item.htm?id=577247113246&spm=875.7931836/B.2017077.2.3f104265qk31Ek&scm=1007.12144.81309.73263_0_0&pvid=22259bc2-84d7-4396-9b61-2941cb857315&utparam=%7B%22x_hestia_source%22:%2273263%22,%22x_object_type%22:%22item%22,%22x_hestia_subsource%22:%22default%22,%22x_mt%22:8,%22x_src%22:%2273263%22,%22x_pos%22:1,%22wh_pid%22:-1,%22x_pvid%22:%2222259bc2-84d7-4396-9b61-2941cb857315%22,%22scm%22:%221007.12144.81309.73263_0_0%22,%22x_object_id%22:577247113246,%22tpp_buckets%22:%222144#0#81309#0%22%7D&sku_properties=1627207:28338">
          <img src="~assets/img/home/feature/1.jpg" alt="" />
          <p>纯棉牛仔衬衣</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.1.38119a6b896oJf&id=626292835617&skuId=4608817459599&user_id=420567757&cat_id=2&is_b=1&rn=a32467b83a41297e7fac5cca547bafc4">
          <img src="~assets/img/home/feature/2.jpg" alt="" />
          <p>丝绒连衣裙</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.8.646c27a7eDwFxK&id=622985697146&skuId=4579414843547&user_id=356060330&cat_id=2&is_b=1&rn=83d6958745bfe0bf2aac46133beb16f4">
          <img src="~assets/img/home/feature/3.jpg" alt="" />
          <p>哈伦牛仔裤</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.1.466d31b2tYysXD&id=575305746589&skuId=4558294336220&user_id=2175979437&cat_id=2&is_b=1&rn=89435af83a5b5da233bca1743c801f1a">
          <img src="~assets/img/home/feature/4.jpg" alt="" />
          <p>工装夹克</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.8.5c304a37lb0ET3&id=638293919335&skuId=4775530294631&user_id=2983371276&cat_id=54290461&is_b=1&rn=f0e2833082f1d83e4d4f49f738b58e6c">
          <img src="~assets/img/home/feature/5.jpg" alt="" />
          <p>新款碎花吊带</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.130.5c304a37lb0ET3&id=635683248539&skuId=4728007438381&user_id=2983371276&cat_id=54290461&is_b=1&rn=f0e2833082f1d83e4d4f49f738b58e6c">
          <img src="~assets/img/home/feature/6.jpg" alt="" />
          <p>学院风西装</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.127.41747cdeMYvM49&id=615635449371&skuId=4340848833856&user_id=746866993&cat_id=2&is_b=1&rn=9104798c021caf3e1696b114cc544bad">
          <img src="~assets/img/home/feature/7.jpg" alt="" />
          <p>夏季T恤</p>
        </a>
      </li>
      <li>
        <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.77.5ae2c81bcIJ4GF&id=639587783396&skuId=4586470829562&user_id=3170143977&cat_id=2&is_b=1&rn=9516f5759d730d6c948457037257b442">
          <img src="~assets/img/home/feature/8.jpg" alt="" />
          <p>百搭棒球服</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
};
</script>

<style scoped>
  .feature {
    font-size: 12px;
  }
  .feature .title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0 10px;
  }
  .popular-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
    padding-bottom: 10px;
  }
  .popular-list li {
    flex: 1;
    margin: 10px 10px 5px;
  }
  .popular-list li img {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-bottom: 10px;
  }
</style>