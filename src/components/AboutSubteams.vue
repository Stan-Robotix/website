<script setup>

</script>

<template>
    <main>
        <h2>Subteams</h2>
        <p>
            <!-- explication des subteams-->
        </p>
        <ul>
            <li class="programming">
                <div class = "image"></div>
                <div class = "texte">
                    Programming&nbsp;<i class="fa-solid fa-chevron-up"></i>
                </div>
            </li>
            <li class="SND">
                <div class = "image"></div>
                <div class = "texte">
                    SnD&nbsp;<i class="fa-solid fa-chevron-up"></i>
                </div>
            </li>
            <li class="construction">
                <div class = "image"></div>
                <div class = "texte">
                    Construction&nbsp;<i class="fa-solid fa-chevron-up"></i>
                </div>
            </li>
            <li class="marketing">
                <div class = "image"></div>
                <div class = "texte">
                    Marketing&nbsp;<i class="fa-solid fa-chevron-up"></i>
                </div>
            </li>
            <li class="medias">
                <div class = "image"></div>
                <div class = "texte">
                    Medias&nbsp;<i class="fa-solid fa-chevron-up"></i>
                </div>
            </li>
            <li class="design">
                <div class = "image"></div>
                <div class = "texte">
                    Design&nbsp;<i class="fa-solid fa-chevron-up"></i>
                </div>
                
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
    border-radius: 10px;
}

li div {
    height: 80%;
    border-radius: 10px;
}

.design .image {
    background-image: url("images/Subteams_images/DesignTeam_Picture.jpg");
}

.programming .image {
    background-image: url("images/Subteams_images/ProgTeam_Picture.jpg");
}

.medias .image {
    background-image: url("images/Subteams_images/MediasTeam_Picture.jpg");
}

.construction .image {
    background-image: url("images/Subteams_images/ConstructionTeam_Picture.jpg");
}

.SND .image {
    background-image: url("images/Subteams_images/SnDTeam_Picture.jpg");
}

.marketing .image {
    background-image: url("images/Subteams_images/MarketingTeam_Picture.jpg");
}

.image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.design p {
    margin: 0;
    height: 20%;
}

.texte {
    display: flex;
    height: 20%;
    background-color: $secondary;
    color: $text;
    align-items: center;
    justify-content: center;
    //bouton qui ouvre une explication de la subteam
}

.texte :hover {
    cursor: pointer;
}
</style>