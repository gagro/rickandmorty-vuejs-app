<template>
  <div class="main responsiveItem">
    <ul>
      <li>
        Name: <span>{{ item.name }}</span>
      </li>
      <li>
        Type: <span>{{ item.type }}</span>
      </li>
      <li>
        Dimension: <span>{{ item.dimension }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: ["item"],
};
</script>

<style scoped lang="scss">
@import "@/css/_variables.scss";
.main {
  box-shadow: 0px 0px 10px 3px $primary-color;
  border-radius: 15px;
  display: flex;
  padding: 10px;
  margin: 10px;
  transform: scale(1);
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: transform 300ms ease-in-out;
  }

  ul {
    list-style: none;
    color: #d4d2cd;
    padding: unset;

    span {
      color: #fff;
      font-weight: 600;
    }
  }
  img {
    width: 100%;
    height: 30px;
  }
}
</style>