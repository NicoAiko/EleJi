<template>
  <table class="table table-sm table-dark table-hover table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>tdornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>tdornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>tdornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>tdornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin-bottom: 0;
  height: 200px;
  display: -moz-groupbox;
}
tbody {
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  height: 165px;
}
tr {
  width: 100%;
  display: inline-table;
  table-layout: fixed;
  height: 20px;
}
</style>

