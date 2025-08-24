ScrollTrigger.create({
    trigger:'body',
    start:"1000px 0%",
    end:"100% 100%",
    markers:false,
    onEnter:function(){
        $('.header').addClass('fixed')
    },
    onLeaveBack:function(){
        $('.header').removeClass('fixed')
    }
})

const motionIntro = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_intro",
    start: "top top",
    end: "+=7000",
    scrub: true,
    pin:true,
      onEnter:function(){
    $('body').addClass('dark');
  },
  onLeaveBack:function(){
    $('body').removeClass('dark');
  }
  }
});

const introText = $(".sc_intro .intro_description .intro_description_text");

motionIntro
.addLabel('a')
.to('.sc_intro .dimmed', {opacity:1 },'a')
.to(introText[0], { opacity: 1 },'a')
.to(introText[0], { opacity: 0 ,
  onStart:function(){
    $('.header').addClass('show');
  },
  onReverseComplete:function(){
    $('.header').removeClass('show');
  }
})
.to(introText[1], { opacity: 1 ,
})
.to(introText[1], { opacity: 0 })
.to(introText[2], { opacity: 1 })
.to(introText[2], { opacity: 0 })
.to(introText[3], { opacity: 1 });

const showTitleArr = $(".showcase_intro_text");
const showImgArr = $(".showcase_img img");
const motionShowcase = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_showcase",
    start: "0% 0%", 
    end: "100% 100%",
    scrub: 0
  }
});
motionShowcase
.to('.sc_showcase .dimmed',{ autoAlpha:1 },'a')
.to('.showcase_intro', { autoAlpha:1 },'a')

.to(showTitleArr[0], {xPercent:100 },'b')
.to(showTitleArr[2], { xPercent:-100},'b')
.to('.sc_showcase .dimmed',{ autoAlpha:0 },'b')


.to('.showcase_intro', { autoAlpha:0})

.to(showImgArr[2], { height:0})
.to(showImgArr[1], { height:0})

.to('.sc_showcase .dimmed',{ autoAlpha:1 },'c')
.to('.showcase_description',{ autoAlpha:1 },'c')


const asdasd = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_prove.prove1",
    start: "0% 80%", 
    end: "100% 90%", 
    scrub: 0
  }
});
asdasd.from('.sc_prove.prove1 [class*="bar_"]',{width:0})
asdasd.from('.sc_prove.prove1 .line',{x:0})


ScrollTrigger.create({
  trigger: ".sc_gallery",
  start: "top top", 
  end: "bottom bottom", 
  onEnter:function(){
    $('header').addClass('dark');
  },
  onLeaveBack:function(){
    $('header').removeClass('dark');
  }
})

ScrollTrigger.create({
  trigger: ".sc_challenge.challenge1",
  start: "top top",
  end: "100% 10%",
  anticipatePin:1,
  onEnter:function(){
    $('body').removeClass('dark');
  },
  onLeaveBack:function(){
    $('body').addClass('dark');
  }
})

ScrollTrigger.create({
  trigger: `[data-theme="dark"]`,
  start: "0% 55%",
  end: "100% 100%",
  toggleClass:{
    targets:"body",
    className:"dark",
  }
});

const possibility = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_possibility",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh:true,
  },
});
possibility.to(".sc_possibility .slide_sub_wrap", {
  xPercent:-100,
  x:function(){
    return window.innerWidth-100;
  }
});

const feature = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_feature",
    start: "0% 95%",
    end: "100% 80%",
    scrub: 0
  },
});
feature.from('.sc_feature .col-left',{xPercent:-50},'a')
feature.from('.sc_feature .green',{xPercent:50},'a')


const feature2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_feature",
    start: "0% 45%",
    end: "100% 35%",
    scrub: 0,
    onEnter:function(){
      $('.sc_feature').addClass('blur')
    },
    onLeaveBack:function(){
      $('.sc_feature').removeClass('blur')
    }
  },
});
feature2.from('.sc_feature .feature_title',{autoAlpha:0})



const service1 = gsap.timeline();
service1
.addLabel("a")
.to(".sc_service .group_hr .slide",{x:-515,duration:3},"a")
.addLabel("b")
.to('.sc_service .group_hr .slide',{
  x:function(){
    return $('.sc_service .slide_head .headline').outerWidth()*-1
  }})
.to(".sc_service .group_hr .card_item:nth-child(2)",{xPercent:-100,x:-40,duration:3},"b")
.to(".sc_service .group_hr .card_item:nth-child(3)",{xPercent:-200,x:-80,duration:3},"b")
.to(".sc_service .group_hr .card_item:nth-child(4)",{xPercent:-300,x:-120,duration:3},"b")
.from(".sc_service .ico-unlock",{autoAlpha:1,duration:2},"b")
.to(".sc_service .ico-unlock",{autoAlpha:0,duration:2},"b")
.to(".sc_service .ico-lock",{autoAlpha:1,duration:2},"b")
.from(".sc_service .ico-lock",{autoAlpha:1,duration:5},"b")
.to(".sc_service .card_item .text",{autoAlpha:1,duration:2},"b")
.addLabel("c")
.from(".sc_service .group_vt",{autoAlpha:0},"c")
.from(".sc_service .group_vt",{yPercent:100,y:"-200",duration:8,ease:"none"},"c")
.from(".sc_service .group_vt .card_lock",{autoAlpha:0})
.addLabel("d")
.to(".sc_service .group_vt .card_item:nth-child(2)",{x:-445,duration:3},"d")
.to(".sc_service .group_vt .card_item:nth-child(3)",{x:-885,duration:3},"d")
.to(".sc_service .group_vt .card_item:nth-child(4)",{x:-1325,duration:3},"d")
.addLabel("e")
.from(".sc_service .group_vt .end_txt_box",{autoAlpha:0,duration:3},"e")



ScrollTrigger.create({
  trigger: ".sc_service",
  start: "top top",
  end: "+=9000",
  scrub: true,
  pin:true,
  animation: service1,
    toggleClass:{
    targets:"body",
    className:"dark",
  }
});

service2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_service .group_vt",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0
  },
});

ScrollTrigger.create({
  trigger: ".sc_change",
  start: "0% 0%",
  end: "45% 55%"
});

const prove2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_prove.prove2",
    start: "0% 80%",
    end: "100% 90%",
    scrub:0
  }
});

prove2.from('.sc_prove.prove2 [class*="bar_"]',{width:0})
prove2.to('.sc_prove.prove2 .line',{x:0})


const economy = gsap.timeline();

economy
    .addLabel("a")
    .to(".sc_economy .slide .slide_wrap .inner",{xPercent:-100,x:"100vw",duration:4},"a")
    .from(".sc_economy .slide .slide .slide_wrap .inner",{autoAlpha:0,duration:1},"a")
    .from(".sc_economy .slide .slide .slide_wrap .inner",{autoAlpha:0,delay:1,duration:1},"a")
    .from(".sc_economy .group_arrow .fade",{autoAlpha:0,delay:1,duration:1},"a")


    ScrollTrigger.create({
    animation:economy,
    trigger:".sc_economy",
    start:"top top",
    end:"+=1500",
    pin:true,
    markers:false,
    scrub:true, 
    onEnter:function(){
        $('.sc_economy .bg').addClass('blur')
    },
    onLeave:function(){
        $(".sc_economy .group_arrow").fadeOut();
    },
    onEnterBack:function(){
        $(".sc_economy .group_arrow").fadeIn();
    },
})

const wise = gsap.timeline();
wise.to(".sc_wise .slide",{xPercent:-100, ease: "none"})
    
ScrollTrigger.create({
    animation:wise,
    trigger:".sc_wise",
    start:"top top",
    end:"+=1000",
    pin:true,
    scrub:true
})