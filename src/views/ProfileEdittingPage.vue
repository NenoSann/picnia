<template>
  <div class="profile-eddit-main">
    <h2 class="title">编辑个人资料</h2>
    <div class="avatar-section">
      <TheAvatar
        image_url="src/assets/IMG_1446.JPG"
        widthString="48px"
        heightString="48px"
      ></TheAvatar>
      <button class="btn-eddit">修改头像</button>
    </div>
    <div class="input-section">
      <div class="user-name section">
        <p>用户名：</p>
        <input type="text" />
      </div>
      <div class="nick-name section">
        <p>昵称：</p>
        <input type="text" />
      </div>
      <div class="indroduction section">
        <p>简介：</p>
        <textarea
          name="introduction"
          id="introduction"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="phone section">
        <p>手机号：</p>
        <input type="text" />
      </div>
      <div class="gender section">
        <p>性别：</p>
        <div>
          <input
            type="radio"
            id="gender-male"
            value="male"
            name="radio"
            class="radio"
          />
          <label for="gender-male">男</label>
        </div>
        <div>
          <input
            type="radio"
            id="gender-female"
            value="female"
            name="radio"
            class="radio"
          />
          <label for="gender-female">女</label>
        </div>
      </div>
      <div class="site section">
        <p>网站：</p>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheAvatar from '../components/TheAvatar.vue';
</script>

<style lang="scss" scoped>
.profile-eddit-main {
  margin: 0 10vw;
  padding-top: 4vh;
  display: flex;
  flex-direction: column;

  input:not(.radio) {
    width: 40vw;
  }

  textarea {
    width: 40vw;
    resize: none;
  }
}

.avatar-section {
  display: flex;
  flex-direction: row;
  align-items: center;

  .btn-eddit {
    background-color: #1da0ff;
    border-radius: 6px;
    margin-left: 20px;
    padding: 6px 20px;
    color: white;
  }
}

.input-section {
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
}

.section {
  display: flex;
  align-items: center;
}

.gender {
  align-self: flex-start;
}
</style>
