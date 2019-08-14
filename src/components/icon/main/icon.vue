<template>
  <div class='bc-icon'
       :style="{
    display: 'inline-flex',
    height: iconSize,
    width: iconSize
    }">
    <svg :style="{fill:color}"
         :class="[
          'icon-'+name
         ]">
      <use :xlink:href='`#icon-${name}`'></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "bc-icon",
  props: {
    color: String,
    disabled: Boolean,
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: "1em"
    }
  },
  computed: {
    iconSize() {
      if (typeof this.size === "number") return this.size + "px";
      else return this.size;
    }
  }
};
</script>
