<template>
  <div class="form-check">
    <input type="checkbox" @click="checked(id, $event)" :value="id" v-model="selected" />
  </div>
</template>

<script>
export default {
  props: {
    id: { default: "" },

  },

  data: () => {
    return {
      selected: []
    };
  },

  methods: {
 
    checked(value, event) {
      if (event.target.checked) {
        
          EventBus.$emit("SELECTED", {action: 'add', value: value});
      } else {
        EventBus.$emit("SELECTED", {action: 'remove', value: value});

      }
    }
  }
};
</script>
