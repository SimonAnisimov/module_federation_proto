<script lang="ts" setup>
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { http } from 'shared/api';
import { BaseAvatar } from 'shared/ui';

defineOptions({
  name: 'Logo',
});

const aniScale = ref(null);
const aniTranslate = ref(null);

const animationIsPlayed = ref(false);
const animationDuration = 1000;
const animationInterval = ref(null);

const playHeartAimation = () => {
  aniScale.value.beginElement();
  aniTranslate.value.beginElement();
};

const startAnimation = () => {
  animationIsPlayed.value = true;

  playHeartAimation();

  animationInterval.value = setInterval(() => {
    if (!http.isLoading.value) {
      clearInterval(animationInterval.value);

      animationIsPlayed.value = false;

      return;
    }

    playHeartAimation();
  }, animationDuration);
};

watch(
  () => http.isLoading.value,
  (newVal) => {
    if (newVal && !animationIsPlayed.value) startAnimation();
  }
);

onBeforeRouteUpdate(() => {
  clearInterval(animationInterval.value);

  startAnimation();
});
</script>

<template>
  <BaseAvatar size="40px" square>
    <svg
      id="e145IScODTb1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 248 248"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="e145IScODTb6-fill"
          x1="-0.165386"
          y1="123.6"
          x2="247.834614"
          y2="123.6"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="e145IScODTb6-fill-0" offset="0%" stop-color="green" />

          <stop id="e145IScODTb6-fill-1" offset="100%" stop-color="blue" />
        </linearGradient>
      </defs>

      <g>
        <g>
          <g>
            <g>
              <path
                d="M70.952,247.6C33.319,247.6,2.514,218.369,0,181.374v0-115.548C2.342,31.353,29.253,3.62,63.36,0v0h120.949c35.708,3.79,63.526,34.005,63.526,70.717v0v105.767c0,39.277-31.84,71.116-71.117,71.116v0Z"
                fill="url(#e145IScODTb6-fill)"
              />
            </g>
          </g>
        </g>
      </g>

      <g transform="matrix(1 0 0-1 0 245.996986)" clip-path="url(#e145IScODTb13)">
        <g>
          <g transform="translate(146.784 175.77)">
            <path
              d="M0,0c-29.146,13.591-63.792.981-77.384-28.166-13.591-29.147-.981-63.792,28.166-77.383c18.577-8.663,39.382-6.668,55.552,3.456"
              fill="none"
              stroke="#fff"
              stroke-width="40"
              stroke-miterlimit="10"
            />
          </g>

          <g id="e145IScODTb11" transform="translate(185.975 145.809)">
            <path
              d="M0,0c-4.219,0-8.018-1.878-10.677-4.878-2.66,3-6.459,4.878-10.677,4.878-8.043,0-14.564-6.826-14.564-15.246c0-2.263.382-4.44,1.051-6.519c0,0,.606-1.876,1.142-2.909c6.14-13.202,23.048-21.764,23.048-21.764s16.907,8.562,23.047,21.764c0,0,.792,1.76,1.144,2.909.638,2.089,1.049,4.256,1.049,6.519C14.563,-6.826,8.043,0,0,0"
              fill="#fff"
            >
              <animateTransform
                ref="aniScale"
                attributeName="transform"
                type="scale"
                begin="0s"
                dur="1s"
                values="1;1.3;1"
                keyTimes="0;0.1;1"
                repeatCount="0"
              ></animateTransform>

              <animateTransform
                ref="aniTranslate"
                attributeName="transform"
                additive="sum"
                type="translate"
                begin="0s"
                dur="1s"
                values="0;0,5;0"
                keyTimes="0;0.1;1"
                repeatCount="0"
              ></animateTransform>
            </path>
          </g>
        </g>

        <clipPath id="e145IScODTb13">
          <path d="M0,248h248v-248L0,0Z" />
        </clipPath>
      </g>
    </svg>
  </BaseAvatar>
</template>
