import Vue from 'vue'

Vue.directive('click-outside', {
  inserted: function (el, binding, vnode) {
    setTimeout(()=>{
      el.clickOutsideEvent = event => {
        if(!(el == event.target || el.contains(event.target))){
          console.log("CALLED");
          console.log(el);
          console.log(event.target);
          binding.value();
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent)
      // document.body.addEventListener("touchstart", el.clickOutsideEvent)
    }, 200)
  },
  unbind: function (el) {
    setTimeout(()=>{
      document.body.removeEventListener('click', el.clickOutsideEvent)
      // document.body.removeEventListener("touchstart", el.clickOutsideEvent)
    }, 200)
  },
});
