<template>
  <div class="ui fluid container">
    <div class="ui two column grid">
      <Video/>
      <Audio/>
    </div>
    <TextBox/>
    <Subtitles/>
  </div>
</template>

<script>
import Video from '../components/Video';
import Audio from '../components/Audio';
import Subtitles from '../components/Subtitles';
import TextBox from '../components/TextBox';

export default {
  components: {
    Video,
    Audio,
    Subtitles,
    TextBox,
  },
};
</script>


