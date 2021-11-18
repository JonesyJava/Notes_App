<template>
  <div class="d-flex justify-content-center">
    <div class="notes">
      <div class="tools d-flex justify-content-end">
        <button class="fa fa-pencil edit"></button>
         <button class="fa fa-trash"></button>
      </div>
        <div class="best hidden">
        <textarea></textarea>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  setup(){

    return{}
  }
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

.notes .tools button{
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1;
  margin-left: 0.5rem;
}
.notes .best{
  height: 100%;
  width: 100%;
}

.notes textarea{
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  height: 100%;
  width: 100%;
}

.notes .hidden{
  display: none;
}

</style>
