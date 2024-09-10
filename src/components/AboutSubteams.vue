<script setup>

</script>

<template>
    <main>
        <h2>Subteams</h2>
        <p>
            Stan-Robotix is divided into multiple subteams.
        </p>
        <ul>
            <li class="programming">
                <div></div>
                <p>Programming</p>
            </li>
            <li class="SND">
                <div></div>
                <p>SND</p>
            </li>
            <li class="construction">
                <div></div>
                <p>Construction</p>
            </li>
            <li class="marketing">
                <div></div>
                <p>Marketing</p>
            </li>
            <li class="medias">
                <div></div>
                <p>Medias</p>
            </li>
            <li class="design">
                <div></div>
                <p>Design</p>
            </li>
        </ul>
    </main>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

main {
    font-family: Inter, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;
}

h2 {
    text-align: center;
}

ul {
    display: flex;
    justify-content: space-evenly;
    width: 80vw;
    height: 90vh;
    gap: 15px;
    flex-flow: row wrap;
    padding: 10px;
    margin: auto;
}

li {
    background-color: $secondary;
    list-style: none;
    width: 25vw;
    height: 40vh;
    text-align: center;
    margin: auto;
}

li div {
    background-color: #ffffff;
    height: 80%;
    // mettre des images des equipes?
}
</style>