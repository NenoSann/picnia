<template>
  <transition name="el-message-fade">
    <div
      :class="['el-message', type ? `el-message--${type}` : '']"
      :style="positionStyle"
      v-show="visible"
    >
      <i :class="typeClass"></i>
      <slot>
        <p class="el-message__content">{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue';
const visible = ref(true);
const message = ref('这是一条信息提醒');
const type = ref('info');
const verticalOffset = ref(20);
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

const typeClass = computed(() => {
  return type.value ? `el-message__icon el-icon-${typeMap[type.value]}` : '';
});

const positionStyle = computed(() => {
  return {
    top: `${verticalOffset.value}px`
  };
});
</script>

<style scoped lang="scss">
.el-message {
  min-width: 380px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
}
</style>
