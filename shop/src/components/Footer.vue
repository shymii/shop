<template>
    <footer>
        <nav class="footer-nav">
            <ul class="footer-nav-list">
                <li class="footer-nav-list-item">Home</li>
                <li class="footer-nav-list-item">Dogs</li>
                <li class="footer-nav-list-item">Contact</li>
                <li class="footer-nav-list-item">Cats</li>
            </ul>
        </nav>
        <div class="footer-contact">
            <p>email</p>
            <p>number</p>
        </div>
        <p class="footer-copy">copyright &copy; pjeski 2020</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    height: 8em;
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    .footer-nav{
        flex-basis: 70%;
        ul{
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            
            li{
                flex-basis: 50%;
            }
        }
    }
    .footer-contact{
        flex-basis: 30%;
    }
    .footer-copy{
        text-align: center;
        flex-basis: 100%;
    }
}
</style>