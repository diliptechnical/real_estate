<template>
  <div v-if="link">
    <CoolLightBox
      v-if="imageList"
      :items="imageList"
      :index="index"
      @on-change="stopVideoPlay"
      @click="stopVideoPlay"
      @close="index = null"
    >
    <template slot="icon-previous">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="45px" viewBox="0 0 50 45" enable-background="new 0 0 50 45" xml:space="preserve">  <image id="image0" width="50" height="45" x="0" y="0"
    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAQAAABGtvB0AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
RQfkBxQJHDN6LOgoAAAEfUlEQVRYw62YTWwUZRjHf+/M7PZjZ9vSbktaYGnTz0gXIRZsSyiFpREK
BxMPHtSDHIyHSmviwaPeTAT0RAIXjppoOPlBoQhFSWhJvCBqi6XgkVSk3+vuzPt6mNmdWaBhv573
stl3Zn7zPP//+zVC8eIQOVwDgAYIBKBQKEABGLnen2MItylkGlFKiEDHIICODkhSWFgoJKo0EIFA
J0gFFVRgACkSrJIghUSUAiIQaJRhUkWVUWtUoqwVawEdnExyai8IjQBhGtnB/i0nbk0nUklr+ued
b/MyWzHR0YqHaAQJ00iMA9GR278rN/7+I3iIVmoIoBdbLg2Dckwi1G2PfTPS057uqG/VKjEcUxcD
ceQuwyRCQ/POiyO7W7xOlfTUKBySljtMhM3bdl0a62zyOheXPj6feEISC4oZJwLdLVRDU/flk1mI
1WNnb06wxDo2CqUVjHBMW0ddtPvb97q2el2P1944d3OSJyy646RACwsMTJqIMdg8On1P+eLf9aHT
HGEPUWooQ3MnmTwhwh0XTcSIR8duZyEsefhLhtnrIvS0C/KDCLRMFvHNo7f+9CMWlw98wTH2sp1q
guiZ6TtPSHp0x4g3jk7PZBVqpf9zhtlDs5uFt0LkBXG0aKSbwejYrSzEP6vxMxxlL81scrWgEIgn
98Hmk1OzWVmsDZ3hNfawPUuLPCFpubcQIx4dnc5CLK8OnOIoPUSpJsizwyJHiEYAk0Z2Et88OpVV
qMWVfacYdk0bzNIiL4hAp4J6uhhoHHlK7tX+0wzTkynU8zYEOUIMwkSJNb879ZsfsbB26Cyv0+vK
rW+w58gJohGkWm8ZeOfOXT9iZjn+NScYopM6yp+R2+f7nGcrTb3/SvdL/r9+Xbh6H4MUFjZy49VN
/ySH538KGgFV+d2jSLinyytJR7WuT95lmXUSpDZeRHODCEDHsLXvH2wyezszN4vBbSowOUMSCxsb
WRxEABoaxqWHtearbV7fwVZZdmMOhcTChudlk2u5nOlaorCvzodCfe0+TIdmXp8DbKSzSBUKUYB0
3lZaE/fNUH+bp82B9oD50xwiYwBVGMQJiUIilX35QU1Vb6uHGWg3wtdm3WyeweQHAek+Ro7P15i9
Pm0G2oR5/a+MNrIYiLNfl0jU+HxtyG+BwXZZcWPO9yIFQxz5badN3A9V9vst0GlGrswgXDtnipYv
JF00iY0trYl5M9zvy6a/pToy7mB82hQGybZA2G+BvhbDvDaDcrNVKEShEL8FHlSF+rItELo+i4WN
hYUsPBPHAm7lrzyMNuyOel2DHarsl3sqQZKUOwsUfHRwlrIInewvf+v8pMqKr37QBmmlGgO9GIiD
qaSeDvYZb576UUkPsp4sP04ntQQwijufKCRJ56fFRxcMNXrkqd0WUPzBVGGnMTB2QUt9cBwNkFfH
U4tY2KhSHLG9bBT2h+eWH+3YpXFn6rOL9mPWsVAoUZIvEgKNIBWECRNwfZdiiVXWsEr1scDJRmGz
ThkGYPEfCZLOVFmaTJyLBLrbyMzFCgn/AzAfZPGSs7XZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIw
LTA3LTIwVDA5OjI4OjUxKzAzOjAwopIknQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNy0yMFQw
OToyODo1MSswMzowMNPPnCEAAAAASUVORK5CYII=" />
</svg>
    </template>
    <template slot="icon-next">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="45px" viewBox="0 0 50 45" enable-background="new 0 0 50 45" xml:space="preserve">  <image id="image0" width="50" height="45" x="0" y="0"
    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAQAAABGtvB0AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
RQfkBxQJHDTkSH2LAAAEhklEQVRYw62YTVAbZRjHf+/uBpYUqEDSsaVKBQJTpYaOOnVIaBzHS2do
D0BLsb3oyYPj9ODBSxFHb1Zrx4vjQb15cWQsbSm2OFN60OmH9VL1oDAhVaEIBEjkI/vhYTebhIR2
E/rkksnmfX/7PP/ned4PgWUCEAgEYGICBq7MdPEfxfkmEEgIe5Sbsa5NAXtyBQUPEqCjk0JDf1Qo
BQFIeFDZhooH0FhhhRXW0e3QPQKIQEGlmu2KT6lEaP9p8yyxRIJVjEcTOgmZSnYTfPbkjevr2mrq
pxv1r9PJM+ykyg7gA8x08QEZD4/RVPby1G+mbTd/ffJNIuxjJ1WUPRjjBiLZmiiS19+UHvj83m/e
agjiw08VKsrDvHl4sNI4w1zP/PxCYOjUnv3swEcl5cj2y5Ro1nCZcs0zl+hsU8vTD3bWHNr3XXQp
gYmOjr7ZBIOuIFa4JJRb09fnevarZelHvqpDe4f+XE5iomFiFE5ndxArRQUgx2ZvLnQFKzwOprqj
4UpsccnxpmRIulsZ6EiT/9xZOLxfdZrNE75w85VofBmBgY6Rj3HrCXZDNNCQJ2Zux08ckByZ62vD
zaOxxSQmBkZ+23QPsUBWSKSJ6Wuz3W3ljja7ajueGp5KJgunQHEQAMOaJDo9PtcTzKTAbl+k8UI0
YWE2pEApEAMDHRGbuRXPToH6unDj91OLS7AxBYqHmPYkGmLy7zvxw+2qg9ldF2q6Go0nbH+dFCge
YuWZhZEmpn+cO9peluVNqHl0ajFp56JROsQyHQMNKXp/fK43mEmB+rpQ43A0aZWn5Y1ZOgRbG2L3
x+d7gmqWN5HGCxOJRXvtNLbiCU5VyLH5m4muNm8WprPh6u/xGXTW0bbmiVWeJhLeyeRt7cU9dZmg
7XglcPePe/fMVXTMQRfr5uYrhdVoNFIoYxM//5v9qO3pN56TTPfNfzOIQEKmjApUlHcj3Q3Z+M++
fe28Jpy1tUQTyFTgI0CY/oFRM8c+Oc8R2tlFJTLC3RpfCKGgUkeAEL2nh3MR50Y4TpgmaikvHSJQ
bC86OfrexVzER5c8xwnTio8KZCS3u5V8hBcfAQ5y7INLOQTjzEXpGB0EbISw8qNYiIXwEyBM7/sj
uYizl+mjgwB+vGlE8ZC03C2E6B3cEKizI/QTJoA/40XxkAwiTM/p83ly93OQFvx4c/dhxUDScrdw
kKMfjuUizlxU+gjTkq1F8ZC0Fi1E6Pv4hw2IkXy5i4WIrKQtLPfxfLlLgZRRQyMH6B68sKEuRni1
kNzFQiRktrGLdvnIwFAu4ovr4iQRWvFTsdm22+3RQWE7TdJLX+eWnvn5NfUEnU51b9Jz3UEUPNTS
qnatrOdU94jSR8hOWnnztu4GomBmHaudkecuv/0VfzHLAknWC21PizEJa++opRbHRu0diPHp8Kkv
sxBbPgVbx2uVamqqHn+ne98Bg7u/DAzp88wRt7144LWBG75AAhS8bKMaDzICkxTLLLPiJlDubiQM
QGcVgxTlKIDGGmuskdqqFhlPLGWsNV1xbiR0txcFbt7ifxREloC84+1nAAAAJXRFWHRkYXRlOmNy
ZWF0ZQAyMDIwLTA3LTIwVDA5OjI4OjUyKzAzOjAwk3o+AAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy
MC0wNy0yMFQwOToyODo1MiswMzowMOInhrwAAAAASUVORK5CYII=" />
</svg>
    </template>
    </CoolLightBox>
    <!--<div class="filters text-center">
      <ul class="filter-tabs filter-btns clearfix" id="list">
        <template v-for="(name, key) in nameList">
          <li :key="key">
          <router-link :to="'/category/'+name.linkname">
            {{ name.name }} 
            </router-link>
          </li>
        </template>
        <li data-role="button" class="liyoutube" @click="filter_video">BROCHURE DESIGN</li></ul>
    </div>-->
    <!--Items Container-->
    <div class="mss-column">
      <div id="videos"  :style="link != 'BROCHUREDESIGN' ? 'display:none' : ''" class="items-container clearfix">
        <template v-for="(image, key) in imageList">
            <div :key="'youtube'+key" v-if="image.type == 'youtube'" class="youtube">
              <iframe height="100%" width="100%" :src="image.src" frameborder="0" allowfullscreen></iframe>
            </div>
        </template>
      </div>
      <div id="photos" class="items-container clearfix">
       <template v-for="(image, key) in imageList">
          <transition :key="'image'+key" name="bounce" v-if="image.type != 'youtube'">
              <div
              class="image"
              @click="index = key"
              :style="link != image.linkname ? 'display:none' : ''"
              :class="'filter' + image.id + ' ' + image.type"
              >
                <div class="img-area ">
                  <v-lazy-image :src="image.thumb" />
                </div>
              </div>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import VLazyImage from "v-lazy-image";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  components: {
    VLazyImage,
    CoolLightBox
  },
  props: {
    images: null,
    link: null
  },
  data() {
    return {
      index: null,
      imageList: null,
      nameList: null,
      activeId: "",
      linkname: '',
    };
  },
    watch: {
    'link': function (link) {
      // console.log(this.$route.params.linkname)
      this.links = this.links
      // this.pageData()
    }
  },
  mounted() {
    console.log(this.link)
    var self = this;
    var imgList = [];
    var list = [];
    $.each(this.images, function(key, val) {
      list.push({ name: val.name,linkname: val.linkname, id: val.id,submenu: val.submenu });
      $.each(val.list, function(key1, val1) {
        // debugger
        var url =  "https://7squarearchitecturalstudio.com/admin/uploads/media/" + val1.url;
        var thumb = "https://7squarearchitecturalstudio.com/admin/uploads/media/" + val1.url;
        //console.log('dilipsingh')
        //console.log(val1)
        if (val1.type === "youtube") {
         // alert(val1.type)
          thumb = "https://img.youtube.com/vi/" + val1.link + "/0.jpg";
          url = "https://www.youtube.com/embed/" + val1.link;
        }
        imgList.push({
          title: val1.name,
          type: val1.type,
          id: val.id,
          linkname: val.linkname,
          thumb: thumb,
          src: url
        });
      });
      if (val.linkname === 'SCALEMODALMAKING') {
        self.activeId = this.link;
      }
    });
    this.imageList = imgList;
    this.nameList = list;
  },
  created() {
   // this.$emit("finishLoading");
  },
  methods: {
    startYoutube(event){
    },
    stopVideoPlay() {
      $("iframe").each(function(){
        $(this).attr("src",$(this).attr("src"));
      })
    },
    filter_video(){
      $("#videos").show();
      $("#photos").hide();
      this.stopVideoPlay();
      $(".filter").removeClass("active");
      $(".liyoutube").addClass("active");
    },
    filter(id) {
      $("#videos").hide();
      $("#photos").show();
      this.stopVideoPlay()
      this.activeId = id;
      $(".filter").removeClass("active")
      $(".li" + id).addClass("active")
      // $('.image').slideUp("slow")
      // $('.filter' + id).slideDown("slow")
    }
  }
}
</script>
<style>
.play_overlay {
  position: absolute;
  width: 26%;
  top: 40%;
  left: 40%;
}
.img-area.youtube-area {
  position: relative;
}
.img-area svg {
  width: 79px;
  height: 79px;
  position: absolute;
  z-index: 9999;
  top: 30%;
  left: 40%;
  background-color: #0000006e;
  border-radius: 50%;
  padding: 12px 9px 12px 21px;
  fill: #ca0202a8;
}
</style>
<style lang="scss" scoped>
.youtube {
    padding: 1%;
    width: 33%;
    height: 306px;
    display: inline-block;
    vertical-align: text-bottom;
}
.youtube iframe {
    padding-top: 7px;
}
.youtube img,.youtube iframe {
    width: 100%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.v-lazy-image, iframe {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded, iframe {
  filter: blur(0);
}
.mss-row {
  #photos {
    display: flex;
    flex-wrap: wrap;
  }
  .image {
    height: 30vh;
    flex-grow: 1;
    padding: 3px;
    position: relative;
    .img-area {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 100%;
      img, iframe {
        transition: transform 0.5s ease;
        max-height: 100%;
        min-width: 100%;
        object-fit: cover;
        vertical-align: bottom;
      }
    }
    .text-area {
      display: none;
      position: absolute;
      bottom: 0;
    }
  }
  .image:hover {
    .img-area {
      z-index: 9999;
      img {
        opacity: 0.8;
        filter: grayscale(100);
        transform: scale(1.2);
      }
    }
    svg {
      display: none;
    }
    .text-area {
      display: block !important;
      bottom: 30%;
      text-align: center;
      width: 97%;
      z-index: 999;
      color: #fff;
      text-shadow: 0 0 15px #000;
      text-transform: capitalize;
      padding: 10px;
      line-height: 20px;
      font-weight: bold;
    }
  }
  .image:last-child {
    // There's no science in using "10" here. In all my testing, this delivered the best results.
    flex-grow: 10;
  }
}
.mss-column {
  #photos {
    /* Prevent vertical gaps */
    transition-delay: 1s; /* delays for 1 second */
    -webkit-transition-delay: 1s; /* for Safari & Chrome */
    line-height: 0;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 4;
    column-gap: 0px;
    .image {
      width: 100% !important;
      height: auto !important;
      position: relative;
      padding: 5px;
      .img-area {
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
        img{
          transition: transform 0.5s ease;
          width: 100%;
          height: 100%;
        }
        iframe {
          transition: transform 0.5s ease;
          width: 100%;
          height: 100%;
          min-height: 300px;
        }
      }
      .text-area {
        display: none;
        position: absolute;
        bottom: 0;
      }
    }
    :hover {
      .img-area {
        z-index: 9999;
        img {
          opacity: 0.8;
          filter: grayscale(100);
          transform: scale(1.2);
        }
      }
      .text-area {
        display: block;
        bottom: 30%;
        text-align: center;
        width: 97%;
        z-index: 999;
        color: #fff;
        text-shadow: 0 0 15px #000;
        text-transform: capitalize;
        padding: 10px;
        line-height: 20px;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 1200px) {
    #photos {
      -moz-column-count: 4;
      -webkit-column-count: 4;
      column-count: 4;
    }
  }
  @media (max-width: 1000px) {
    #photos {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    #photos {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
  @media (max-width: 500px) {
    #photos {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
}
body {
  margin: 0;
  padding: 0;
}
@media (max-width: 1200px) {
  .youtube {
    width: 33%;
    height: 242px;
  }
}
@media (max-width: 1000px) {
  .youtube {
    width: 33%;
    height: 204px;
  }
}
@media (max-width: 800px) {
  .youtube {
    width: 50%;
    height: 243px;
  }
}
@media (max-width: 500px) {
  .youtube {
    width: 100%;
    height: 253px;
  }
}
</style>
