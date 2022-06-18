<template>
    <div>
        <div aria-label="1 of 12"
    role="group"
    class="home-portfolio-slide w-slide"
    style="transform: translateX(0px); opacity: 1">
        <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
                <div role="listitem" class="w-dyn-item more-projects-width">
                    <a  class="card home-portfolio-card w-inline-block flex-direction-row">
                        <div class="image-wrapper portfolio-card">
                            <div class="wg-box-content">
                                <a href="#">
                                  <div class="wg-box-content-overlay"></div>
                                  <img
                                  src="/_nuxt/assets/image/Maslak-1453.jpg"
                                  alt="Todo List Mobile App Redesign"
                                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
                                  class="border-radius image"
                                  />
                                  <div class="wg-box-content-details wg-box-fadeIn-bottom">
                                    <h3 class="wg-box-content-title">This is a title</h3>
                                    <p class="wg-box-content-text">This is a short description</p>
                                  </div>
                                </a>
                              </div>

                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.wg-box-content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.wg-box-content .wg-box-content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 23px;
}

.wg-box-content:hover .wg-box-content-overlay{
  opacity: 1;
}

.wg-box-content-image{
  width: 100%;
}

.wg-box-content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.wg-box-content:hover .wg-box-content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.wg-box-content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.wg-box-content-details p{
  color: #fff;
  font-size: 0.8em;
}

.wg-box-fadeIn-bottom{
  top: 80%;
}
</style>