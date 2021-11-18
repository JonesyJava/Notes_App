<template>
  <div class="d-flex justify-content-center">
    <div class="notes">
      <div class="tools d-flex justify-content-end">
        <button class="fa fa-pencil"></button>
         <button class="fa fa-trash"></button>
      </div>
        <textarea></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.notes{
  background-color: #fff;
  flex-wrap:wrap;
  width: 500px;
  height: 500px;
  margin: 20px;
}
.notes .tools{
background-color: #9ec862;
justify-content: flex-end !important;
padding: 0.5rem;
}

</style>
