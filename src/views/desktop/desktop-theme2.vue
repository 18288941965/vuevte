<template>
  <div id="cards">
    <div class="card" >
      <div class="card-border"></div>
      <div class="card-context"></div>
    </div>
    <div class="card" >
      <div class="card-border"></div>
      <div class="card-context"></div>
    </div>
    <div class="card" >
      <div class="card-border"></div>
      <div class="card-context"></div>
    </div>
    <div class="card" >
      <div class="card-border"></div>
      <div class="card-context"></div>
    </div>
    <div class="card" >
      <div class="card-border"></div>
      <div class="card-context"></div>
    </div>
    <div class="card" >
      <div class="card-border"></div>
      <div class="card-context"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import L1 from '../../assets/image/desktop/L1.svg'
import L2 from '../../assets/image/desktop/L2.svg'
import L3 from '../../assets/image/desktop/L3.svg'
import L4 from '../../assets/image/desktop/L4.svg'
import L5 from '../../assets/image/desktop/L5.svg'
import L6 from '../../assets/image/desktop/L6.svg'
import L7 from '../../assets/image/desktop/L7.svg'
import L8 from '../../assets/image/desktop/L8.svg'
import L9 from '../../assets/image/desktop/L9.svg'
import L10 from '../../assets/image/desktop/L10.svg'
import L11 from '../../assets/image/desktop/L11.svg'
import L12 from '../../assets/image/desktop/L12.svg'
import L13 from '../../assets/image/desktop/L13.svg'
import L14 from '../../assets/image/desktop/L14.svg'

import H1 from '../../assets/image/desktop/1.svg'
import H2 from '../../assets/image/desktop/2.svg'
import H3 from '../../assets/image/desktop/3.svg'
import H4 from '../../assets/image/desktop/4.svg'
import H5 from '../../assets/image/desktop/5.svg'

export default defineComponent({
  name: 'DesktopTheme2',
  setup () {

    onMounted(() => {

      document.getElementById('cards').onmousemove = (e) => {
        for (const card of document.getElementsByClassName('card')) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
        }
      }
    })
    return {
      L1,
      L2,
      L3,
      L4,
      L5,
      L6,
      L7,
      L8,
      L9,
      L10,
      L11,
      L12,
      L13,
      L14,
      H1,
      H2,
      H3,
      H4,
      H5
    }
  }
})
</script>

<style>
:root{
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23,23,23);
}
body{
  background-color: var(--bg-color);
}

#cards{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  width: calc(100% - 20px);
  margin: 10px;
}

.card{
  background-color: rgba(255,255,255,0.1);
  border-radius: 10px;
  height: 260px;
  width: 300px;
  cursor: pointer;
  position: relative;
}

#cards:hover > .card > .card-border  {
  opacity: 1;
}

.card:hover::before {
  opacity: 1;
}

.card::before,
.card > .card-border {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2;
  opacity: 0;
  transition: opacity 500ms;
}

.card::before{
  background-image: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255,255,255,0.1),
    transparent 40%
  );
  z-index: 3;
}

.card > .card-border{
  background-image: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(255,255,255,0.3),
    transparent 40%
  );
  z-index: 1;
}

.card > .card-context{
  background-color: var(--card-color);
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  border-radius: inherit;
  margin: 1px ;
  z-index: 2;
  position: relative;
}
</style>
<style scoped lang="scss">

</style>