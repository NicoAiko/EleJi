<template>
  <div class="scrollable table">
    <table class="ui selectable celled compact inverted single line table">
      <thead>
        <tr>
          <th>{{ $t('subtitles.table.headers.line') }}</th>
          <th>{{ $t('subtitles.table.headers.start') }}</th>
          <th>{{ $t('subtitles.table.headers.end') }}</th>
          <th>{{ $t('subtitles.table.headers.author') }}</th>
          <th>{{ $t('subtitles.table.headers.effect') }}</th>
          <th class="eight wide">{{ $t('subtitles.table.headers.text') }}</th>
        </tr>
      </thead>
      <tbody id="subtitlesBody">
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>tdornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  // mounted() {
  //   $('thead', this.$el).sticky({
  //     context: '#subtitlesBody',
  //   });
  // },
  // updated() {
  //   $('thead', this.$el).sticky({
  //     context: '#subtitlesBody',
  //   });
  // },
};
</script>


<style scoped>
.scrollable.table {
  position: fixed;
  bottom: 0;
  height: 250px;
  width: 100%;
  overflow-y: scroll;
}

tr td, tr th {
  cursor: default !important;
}
</style>

