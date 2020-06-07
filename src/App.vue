<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>This is a bold text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-8 mx-auto">
        <h1>Custom Directives</h1>
        <!-- <p v-highlight>Some green text</p> no argument passed -->
        <p v-highlight:background.delay="'#2ecc71'">
          This is some text by passing argument
        </p>
        <p
          v-local-highlight:background.delay.blink="{
            mainColor: '#3498db',
            secondaryColor: '#e74c3c',
            delay: 500,
          }"
        >
          This is local directives
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0;

        if (binding.modifiers.delay) {
          delay = 3000;
        }

        if (binding.modifiers.blink) {
          let mainColor = binding.value.mainColor;
          let secondaryColor = binding.value.secondaryColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondaryColor
                ? (currentColor = mainColor)
                : (currentColor = secondaryColor);
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
                el.style.color = 'white';
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, binding.value.delay);
        }
      },
    },
  },
};
</script>

<style></style>
