<script>
export default {

}
</script>

<template>
  <div class="social">
    <a href="/">behance</a>
    <a href="/">linkedin</a>
    <a href="/">dprofile</a>
    <a href="/">vc.ru</a>
    <a href="/">instagram</a>
    <a href="/">ya.music</a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;

  a {
    padding: 3px 12px;
    background: inherit;
    color: $color-general-white;
    border: 1px solid $color-border;
    border-radius: 100px;
    background: $color-general-dark;
    letter-spacing: -0.03em;
    margin-left: -10px;
    cursor: pointer;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: $color-general-dark;
      background: $color-general-white;
    }
  }
}

@media (max-width: 1060px) {

  .social {
    max-width: 200px;
    flex-wrap: wrap;
    justify-content: flex-end;

    a:nth-child(1),
    a:nth-child(2),
    a:nth-child(3) {
      margin-bottom: -2px;
    }

    a {
      font-size: 14px;
      padding: 1px 10px;
      margin-left: -8px;
    }
  }
}

@media (max-width: 700px) {
  .social {
    justify-content: center;
  }
}
</style>