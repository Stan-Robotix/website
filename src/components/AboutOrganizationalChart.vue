<script setup></script>

<template>
    <!-- image de l'organisation de StanRobotix?-->
     <h3>Team members</h3>
     <ul>
        <li class = "captain devteam">
            <p>Micha</p>
            <h5 class="description">Captain Dev Team</h5>
            <div></div>
        </li>
        <li class = "mentor devteam">
            <p>Raphaël</p>
            <h5 class="description">Mentor Dev Team</h5>
            <div></div>
        </li>
        <li class = "mentor constuction">
            <p>Téo</p>
            <h5 class="description">Mentor Construction</h5>
            <div></div>
        </li>
        <li class = "captain construction">
            <p>Zachary</p>
            <h5 class="description">Construction Captain</h5>
            <div></div>
        </li>
        <li class = "team_captain">
            <p>Stéphanie</p>
            <h5 class="description">Team Captain</h5>
            <div></div>
        </li>
        <li class = "captain management ines image">
            <p>Inès</p>
            <h5 class="description">Management Captain</h5>
            <!-- <div class = "ines image"></div> -->
        </li>
     </ul>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

ul {
    display: flex;
    gap: 10px;
    height: 350px;
    padding: 0 40px;
    justify-content: space-around;
}

li {
    display: flex;
    list-style: none;
    background-color: $primary;
    height: 100%;
    width: 18%;
    text-align: center;
    border-radius: 10px;
    flex-direction: column;
    align-content: stretch;
}

h3 {
    text-align: center;
}

.ines {
    background-image: url("images/TeamMembers_images/Ines_Picture.jpg");
}

.image {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

li p {
    margin: 0;
    height: 10%;
}

.description {
    margin: 0;
    height: 10%;
} 

</style>