<template>
  <div class="container-fluid">
    <div class="row">
      <Video/>
      <Audio/>
    </div>
    <div class="row h-100">
      <Subtitles/>
    </div>
  </div>
</template>

<script>
import Video from '../components/Video';
import Audio from '../components/Audio';
import Subtitles from '../components/Subtitles';

export default {
  components: {
    Video,
    Audio,
    Subtitles,
  },
};
</script>


