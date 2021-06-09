<template>
  <div id="nav">
    <div>
      <header>
        <div class="logo">
          <img class="er_logo" src="../src/assets/er_logo_color.png" alt="" />
        </div>

        <nav>
          <div class="topnav" id="myTopnav">
            <a href="index.html">Home</a>
            <a href="index_portfolio.html">Portfolio</a>
            <a href="index_about.html">About</a>

            <a href="index_media.html">Media</a>

            <a id="menu" href="#" class="icon">&#9776;</a>
            <!-- <router-link to="/about">About</router-link> -->
            <!-- <router-view/> -->
          </div>
        </nav>
      </header>

      <main>
        <div class="united">
          <div class="slider">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../src/assets/slider7.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p>3-30.06.2021</p>
                    <h1>Когда цветет иван-чай</h1>
                    <p>Персональная выставка в Медиа-центре Vыход</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="../src/assets/slider1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p>3-30.06.2021</p>
                    <h1>Когда цветет иван-чай</h1>
                    <p>Персональная выставка в Медиа-центре Vыход</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="../src/assets/slider8.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p>3-30.06.2021</p>
                    <h1>Когда цветет иван-чай</h1>
                    <p>Персональная выставка в Медиа-центре Vыход</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Предыдущий</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Следующий</span>
              </button>
            </div>
          </div>
          <div class="currentdate">
            <currentdate></currentdate>
          </div>
          <div class="timer">
            <h1>
              Exhibition ends in <br />
              <countdown></countdown>
            </h1>
          </div>

          <div class="vihod">
            <div>Медиа-центр<br />VЫХОД</div>
            <div>Пр. Карла Маркса, 14<br />Петрозаводск<br />185035</div>
            <div>Тел.: 8 (814) 276-14-41</div>
            <div>3-30.06.2021</div>
            <div>Вт-пт: 10.00-19.00<br />сб: 12.00-19.00</div>
          </div>

          <div class="advantages__container">
            <div class="advantages">
              <div class="advantages__item">
                <img src="../src/assets/pic13.jpg" />
                <h2>Бурьян</h2>
                <p>Холст, масло<br />100*120<br />2018 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic14.jpg" />
                <h2>Тропинка к озеру</h2>
                <p>Холст, масло<br />95*115<br />2018 г.</p>

                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic15.jpg" />
                <h2>Бурьян</h2>
                <p>ДВП, масло<br />91*122<br />2018 г.</p>
                <p><mybutton></mybutton></p>
              </div>

              <div class="advantages__item">
                <img src="../src/assets/pic7.jpg" />
                <h2>Натюрморт</h2>
                <p>OSB-плита, масло<br />100*120<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic8.jpg" />
                <h2>Натюрморт</h2>
                <p>OSB-плита, масло<br />100*120<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic6.jpg" />
                <h2>Разрушенный дом</h2>
                <p>OSB-плита, масло<br />120*100<br />2019 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic8.jpg" />
                <h2>Натюрморт</h2>
                <p>OSB-плита, масло<br />100*120<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic6.jpg" />
                <h2>Разрушенный дом</h2>
                <p>OSB-плита, масло<br />120*100<br />2019 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic25.jpg" />
                <h2>Иксия</h2>
                <p>Холст, масло<br />110*90<br />2018 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic26.jpg" />
                <h2>Ромашки</h2>
                <p>Холст, масло<br />100*80<br />2017 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic27.jpg" />
                <h2>Букет для Анны</h2>
                <p>Бумага, масло<br />110*90<br />2016 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic1.jpg" />
                <h2>Праздничный натюрморт</h2>
                <p>Строительный флизелин, масло<br />100*80<br />2021 г.</p>
                <p><mybutton></mybutton></p>
              </div>

              <div class="advantages__item">
                <img src="../src/assets/pic2.jpg" />
                <h2>Гладиолусы</h2>
                <p>OSB-плита, масло<br />120*49,5<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic3.jpg" />
                <h2>Пейзаж</h2>
                <p>Строительный флизелин, масло<br />100*90<br />2021 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic4.jpg" />
                <h2>Ваза с цветами на стуле</h2>
                <p>Холст, масло<br />90*70<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic5.jpg" />
                <h2>Натюрморт</h2>
                <p>OSB-плита, масло<br />120*100<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic9.jpg" />
                <h2>Заросшие дома</h2>
                <p>OSB-плита, масло<br />115*130<br />2020 г.</p>
                <p><mybutton></mybutton></p>
              </div>
              <div class="advantages__item">
                <img src="../src/assets/pic16.jpg" />
                <h2>Мостик</h2>
                <p>ДВП, масло<br />122*91<br />2017 г.</p>
                <p><mybutton></mybutton></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="social">
          <a href="http://facebook.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              /></svg
          ></a>
          <a href="http://twitter.com"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              /></svg
          ></a>
          <a href="http://youtube.com"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-youtube"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
              /></svg
          ></a>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import mybutton from "./components/mybutton.vue";
import countdown from "./components/countdown.vue";
import currentdate from "./components/currentdate.vue";
export default {
  name: "App",
  components: {
    mybutton,
    countdown,
    currentdate,
  },
};
</script>

<style lang="scss">
$main_color: #890722;
$bkg_color: #050505;
$my_font: "Dancing Script", cursive;
$inner_font: "Cormorant Garamond", serif;

%flexlayout {
  display: flex;
  justify-content: center;
}

#app {
  font-family: $my_font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

li {
  text-decoration: none;
  list-style: none;
}

body {
  font-family: $my_font;
}

.button1 a {
  &:hover {
    color: solid black;
    border: 1px solid red;
  }
}

.about p {
  margin: 20px;
  text-align: center;
}

.about_1 {
  text-align: center;
}

.exhibit {
  padding: 20px;
  text-align: center;
}

.exhibit p {
  margin: 20px;
}

.exhibit h2 {
  font-family: $inner_font;
}

.exhibit {
  background-image: url("../src/assets/background6.jpeg");
  opacity: 100%;
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: repeat;
  color: $bkg_color;
}

.about img {
  width: 400px;
  margin: 10px;
}

.media {
  margin: 10px 50px 50px 50px;
  @extend %flexlayout;
}

.vihod {
  padding: 20px;
  font-family: $inner_font;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #af992a;
  opacity: 100%;
  color: $main_color;
  font-size: 20px;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
}

.er_logo {
  width: 100%;
  box-sizing: border-box;
}

.current_date {
  color: $bkg_color;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
}

.timer {
  color: $main_color;
  text-align: center;
  font-size: 20px;
}
.currentdate {
  padding-top: 10px;
  color: rgb(18, 18, 58);
  text-align: center;
  font-size: 20px;
}

nav {
  margin: auto;
  width: 400px;
  height: 50px;
}

.topnav {
  background-color: white;
  font-size: 20px;
  margin-top: 20px;
}

.topnav a {
  color: $main_color;
  text-align: center;
  padding: 15px 20px;
  font-size: 20px;
}

.topnav {
  a {
    &:hover {
      border-bottom: 2px $main_color;
    }
  }
}

.topnav .icon {
  display: none;
}

.pic {
  max-width: 100%;
}

.advantages__container {
  @extend %flexlayout;
}

.advantages {
  padding-top: 40px;
  padding-bottom: 40px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}

.advantages__item {
  width: 30%;
}

.advantages__item img {
  width: 200px;
}

.advantages__item h2 {
  font-family: $inner_font;
}

.carousel-inner p,
h3 {
  color: #f8f6f8;
}

footer {
  width: 100%;
  height: auto;
  background: $bkg_color;
  margin: 0 auto;
  text-align: center;
  padding: 25px;
}

footer a {
  color: white;
  font-size: 14px;
  margin-left: 10px;
}

footer nav a:hover {
  border-bottom: 1px solid white;
  color: $main_color;
}

.social {
  @extend %flexlayout;
  text-align: center;
}

.social a:hover {
  color: $main_color;
}

@media all and (max-width: 768px) {
  // .topnav a.icon {
  //   float: center;
  //   margin-top: -17px;
  //   display: block;
  //   color: $bkg_color;
  // }

  .united {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    // height: 100px;
  }
  .currentdate {
    display: none;
  }
  .timer {
    display: none;
  }

  // .topnav.responsive {
  //   position: relative;
  // }

  .topnav a {
    font-size: 15px;
  }
  .vihod {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  .vihod {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  // .topnav.responsive a.icon {
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  // }

  // .topnav.responsive a {
  //   float: none;
  //   display: block;
  //   text-align: left;
  // }

  .advantages__item {
    width: 100%;
  }
}
@media screen and (max-width: 420px) {
  .advantages {
    flex-direction: column;
  }

  .advantages__item {
    width: 100%;
  }

  .vihod {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
}
</style>
