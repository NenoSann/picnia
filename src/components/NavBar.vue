<template>
    <div class="header-main">
        <p class="header-title">Picnia</p>
        <div class="search-main">
            <TheIcon icon="search"></TheIcon>
            <input type="search" name="search" placeholder="搜索">
        </div>
        <div class="header-icons">
            <TheIcon icon="home" />
            <TheIcon icon="publish"></TheIcon>
            <img src="../assets/IMG_1446.JPG" id="avatar">
        </div>
    </div>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
</script>

<style lang="scss" scoped>
.header-main {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    height: 5rem;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.search-main {
    display: flex;
    align-items: center;
    border-radius: 14px;
    background-color: #F1F1F1;
    overflow: hidden;
    padding-left: 16px;

    >svg {
        width: 20px;
        height: 20px;
    }
}

.header-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
    color: black;
}

.header-icons {
    width: 160px;
    display: flex;
    justify-content: space-between;

    >* {
        // add thie property to all child elements
        cursor: pointer;
    }
}

#avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

input {
    height: 2rem;
    background-color: #F1F1F1;
    border: none;
}

::placeholder {
    color: #949494;
    opacity: 1;
}
</style>