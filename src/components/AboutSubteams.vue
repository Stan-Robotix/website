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
                <p>Programming</p>
            </li>
            <li class="S&D">
                <p>S&D</p>
            </li>
            <li class="construction">
                <p>Construction</p>
            </li>
            <li class="Equipe1">
                <p>Equipe1</p>
            </li>
            <li class="Equipe2">
                <p>Equipe2</p>
            </li>
            <li class="Equipe3">
                <p>Equipe3</p>
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
</style>