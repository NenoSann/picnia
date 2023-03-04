<template>
    <div class="post-tab-main">
        <img src="../assets/Persona 5R.png">
        <div class="post-tab-mid">
            <div class="avatar-section">
                <div class="avatar">
                    <img src="src/assets/IMG_1446.JPG" id="avatar">
                    <p class="username">NenoSan</p>
                </div>
                <p class="post-time">Posted 12 hours ago</p>
            </div>
            <div class="btn-section">
                <div class="btn">
                    <TheIcon icon="like"></TheIcon>
                    <p class="count">1m</p>
                </div>
                <div class="btn">
                    <TheIcon icon="comment"></TheIcon>
                    <p class="count">1m</p>
                </div>
                <div class="btn">
                    <TheIcon icon="favorite"></TheIcon>
                    <p class="count">1m</p>
                </div>
            </div>
        </div>
        <div class="discription">
            <p>
                P5真是太好玩啦！！！
            </p>
        </div>
        <div class="tags">
            <a>#P5R</a>
            <a>#JRPG</a>
        </div>
    </div>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
</script>

<style lang="scss" scoped>
.post-tab-main {
    width: 600px;
    background-color: white;
    max-height: 600px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 6px 6px;
    display: flex;
    flex-direction: column;

    img {
        max-width: 100%;
        max-height: 400px;
        background-color: #c4c4c4;
    }
}

.post-tab-mid {
    display: flex;
    padding: 20px;

    .avatar-section {
        display: flex;
        flex-direction: column;

        .avatar {
            display: flex;
            align-items: center;

            .username {
                padding-left: 10px;
                font-size: 1.2rem;
                font-weight: 100;
                font-family: "Raleway", "Noto Sans SC", sans-serif;
            }

            #avatar {
                width: 33px;
                height: 33px;
                border-radius: 50px;
            }
        }

        .post-time {
            margin-top: 10px;
            color: #9f9f9f;
            font-family: "Noto Sans SC", sans-serif;

        }
    }

    .btn-section {
        display: flex;
        flex-direction: row;
        margin-left: auto;

        .btn {
            padding-left: 10px;

            svg {
                width: 32px;
                height: 40px;
                stroke: black;
                fill: transparent;
            }
        }

        p {
            text-align: center;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    }
}

.discription {
    padding: 0 20px;
}

.tags {
    padding: 20px 20px;
    margin-top: auto;
    margin-bottom: 20px;

    a {
        color: #1DA0FF;
    }
}
</style>