<template>
  <div class="main">
    <div class="top">
      <div class="title">{{ item.name }}</div>
      <div class="hehe">
        <div class="circle" />
        <div class="circle" />
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Episode",
  props: ["item"],
};
</script>

<style scoped lang="scss">
@import "@/css/_variables.scss";
.main {
  border-radius: 15px;
  background-color: #fff;
  width: 20%;
  height: 8.5em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  transform: scale(1);
  transition: transform 300ms ease-in-out;

  @for $i from 1 through length($colors) {
    &:nth-of-type(#{length($colors)}n + #{$i}) {
      .top {
        background-color: nth($colors, $i);
      }
    }
  }

  &:hover {
    transform: scale(1.02);
    transition: transform 300ms ease-in-out;
  }

  .top {
    height: 75%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 5px;

    .title {
      background-color: #fff;
      color: #000;
      padding: 5px;
      text-align: center;
      border: 2px solid #000;
      border-radius: 7px;
    }

    .hehe {
      padding: 5px;
      border-radius: 7px;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-self: center;
      background-color: #000;
      margin-top: auto;

      .circle {
        width: 20%;
        border: 5px solid #fff;
        height: 30px;
        border-radius: 50%;
      }
    }
  }
}
</style>