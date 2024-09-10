<script setup></script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
     <h3>Team members</h3>
     <ul>
        <li class="captain programming">
            <div></div>
            <p>Micha</p>
            <h5 class="description">Captain Programming</h5>
        </li>
        <li class="mentor programming">
            <div></div>
            <p>Raphael</p>
            <h5 class="description">Mentor Programming</h5>
        </li>
        <li class="mentor constuction">
            <div></div>
            <p>Theo</p>
            <h5 class="description">Mentor Construction</h5>
        </li>
        <li class="captain construction">
            <div></div>
            <p>Zachary</p>
            <h5 class="description">Construction Captain</h5>
        </li>
        <li class="team_captain">
            <div></div>
            <p>Stephanie</p>
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
}

li {
    list-style: none;
    background-color: $secondary;
    height: 100%;
    width: 15%;
    text-align: center;
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