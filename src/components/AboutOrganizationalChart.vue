<script setup></script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
     <h3>Team members</h3>
     <ul>
        <li class="captain devteam">
            <div></div>
            <p>Micha</p>
            <h5 class="description">Captain Dev Team</h5>
        </li>
        <li class="mentor devteam">
            <div></div>
            <p>Raphaël</p>
            <h5 class="description">Mentor Dev Team</h5>
        </li>
        <li class="mentor constuction">
            <div></div>
            <p>Téo</p>
            <h5 class="description">Mentor Construction</h5>
        </li>
        <li class="captain construction">
            <div></div>
            <p>Zachary</p>
            <h5 class="description">Construction Captain</h5>
        </li>
        <li class="team_captain">
            <div></div>
            <p>Stéphanie</p>
            <h5 class="description">Team Captain</h5>
        </li>
     </ul>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

ul {
    display: flex;
    gap: 10px;
    height: 40vh;
    padding: 0 40px;
    justify-content: space-around;
}

li {
    list-style: none;
    background-color: $primary;
    height: 100%;
    width: 18%;
    text-align: center;
    border-radius: 10px;
}

h3 {
    text-align: center;
}

p {
    margin-bottom: 0;
}

.desciption {
    font-size: smaller;
}

</style>