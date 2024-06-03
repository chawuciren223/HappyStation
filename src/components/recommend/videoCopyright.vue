<script setup></script>
<template>
  <!-- 底部版权 start -->
  <footer>
    <div class="left">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="anime">
        <img src="@/assets/lyy.gif" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="copyright">
        <ul class="illustrate">
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">联系我们</a></li>
          <li><a href="javascript:;">用户协议</a></li>
          <li><a href="javascript:;">加入我们</a></li>
          <li><a href="javascript:;">友情连接</a></li>
          <li><a href="javascript:;">隐私协议</a></li>
          <li><a href="javascript:;">版权声明</a></li>
        </ul>
        <div class="ourIntro">
          &copy; 2023 纯享驿站. 保留所有权利. | 设计者:
          <a href="./index.html">查吴此人</a>
        </div>
      </div>
      <ul class="my">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-xinlangweibo"></i><span>官方微博</span>
            <div class="erweima">
              <img src="@/assets/weibo.jpg" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-weixin"></i><span>官方微信</span>
            <div class="erweima">
              <img src="@/assets/weixin.jpg" alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-QQ"></i><span>官方QQ</span>
            <div class="erweima">
              <img src="@/assets/qq.jpg" alt="" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </footer>
  <!-- 底部版权 end -->
</template>
<style scoped>
/* 底部版权 start */
footer {
  background-color: #151221;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .left {
  width: 10%;
  height: 200px;
  /* background: springgreen; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

footer .left img {
  width: 150px;
}

footer .left .anime {
  width: 80px;
  height: 80px;
  /* background-color: springgreen; */
}

footer .left .anime img {
  width: 100%;
  height: 100%;
}

footer .right {
  width: 50%;
  height: 200px;
  color: #fff;
  /* background-color: #1e89b7; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

footer .right .copyright {
  width: 60%;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer .right .copyright .illustrate {
  display: flex;
}

footer .right .copyright .illustrate li {
  margin-right: 15px;
}

footer .right .copyright .illustrate li:last-child {
  margin-right: 0;
}

footer .right .copyright .illustrate li a {
  color: #fff;
  font-size: 15px;
}

footer .right .copyright .ourIntro {
  border-top: 1px solid #ddd;
  margin-top: 20px;
  width: 85%;
  text-align: center;
  /* height: 100px; */
  padding: 15px;
  font-size: 16px;
}

footer .right .copyright .ourIntro a {
  color: #2f92f4;
}

footer .right .my {
  display: flex;
}

footer .right .my li {
  margin-right: 25px;
}

footer .right .my li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* background-color: #1dd14a; */
  position: relative;
}

footer .right .my li a i {
  font-size: 23px;
}

footer .right .my li a .erweima {
  position: absolute;
  top: -130px;
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #fff;
  display: none;
}

footer .right .my li a:hover .erweima {
  display: block;
}

/* 底部版权 end */
</style>
