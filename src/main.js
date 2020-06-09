// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = '#2ecc71'; no argument passed
    let delay = 0;

    if (binding.modifiers.delay) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

Vue.filter('toLowerCase', (value) => value.toLowerCase());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
