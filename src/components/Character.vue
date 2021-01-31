<template>
  <div class="main">
    <div class="profile">
      <img :src="item.image" alt="Profile" />
    </div>
    <ul class="info">
      <li>
        Name: <span>{{ item.name }}</span>
      </li>
      <li>
        Species: <span>{{ item.species }}</span>
      </li>
      <li>
        Gender: <span>{{ item.gender }}</span>
      </li>
      <li>
        Status: <span>{{ item.status }}</span>
      </li>
      <li>
        Last seen: <span>{{ item.location.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Character",
  props: ["item"],
};
</script>

<style scoped lang="scss">
@import "@/css/_variables.scss";
.main {
  box-shadow: 0px 0px 10px 3px $primary-color;
  border-radius: 15px;
  width: 20%;
  display: flex;
  padding: 10px;
  margin: 10px;
  transform: scale(1);
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: transform 300ms ease-in-out;
  }

  .profile {
    width: 7em;
    height: 7em;
    margin: auto 0;

    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      box-shadow: 0px 0px 10px 3px $secondary-color;
    }
  }

  .info {
    height: fit-content;
    margin: auto 0;
    margin-left: 5px;
    list-style: none;
    padding: unset;
    color: #d4d2cd;

    span {
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>