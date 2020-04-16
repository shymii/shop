<template>
    <footer>
        <section class="footer-service">
            <h3>Customer service</h3>
            <div class="office">
                <p>OFFICE</p>
                <p>ul. Karmelicka<br>
                00-163 Warszawa</p>
            </div>
            <div class="online-sales">
                <p>ONLINE SALES</p>
                <p>online@pjeski.corp</p>
            </div>
            <div class="marketing">
                <p>MARKETING</p>
                <p>marketing@pjeski.corp</p>
            </div>
        </section>
        <section class="footer-random">
            <p>Links</p>
            <a href="#">Partners</a>
            <a href="#">FAQ</a>
            <a href="#">Returns</a>
            <a href="#">Terms and conditions</a>
        </section>
        <section class="footer-socials">
            <p>Find us at</p>
            <a href="#"><img src="../assets/envelope.png" alt="envelope"> pjeski@pjeski.corp</a>
            <a href="#"><img src="../assets/instagram.png" alt="instagram"> @pjeski</a>
            <a href="#"><img src="../assets/facebook.png" alt="facebook"> fb.com/prsink</a>
        </section>
        <section class="footer-working-hours">
            <p class="open">We're open</p>
            <p>Monday: 9:00-17:00</p>
            <p>Tuesday: 9:00-15:00</p>
            <p>Wednesday: 8:00-14:00</p>
            <p>Friday: 10:00-14:00</p>
        </section>
        <section class="footer-copy">
            <p>copyright &copy; pjeski 2020</p>
        </section>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    margin-top: 4em;
    background-color: #eee;
    padding: 1em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p{
        font-family: 'Raleway', sans-serif;
    }
    .footer-service{
        padding: .5em;
        flex-basis: 20%;
        h3{
            padding: .5em;
            font-family: 'Raleway', sans-serif;
        }
        div{
            padding: .5em;
            p{
                padding-left: .3em;
                &:first-of-type{
                    width: 60%;
                    padding: .3em;
                    font-weight: bold;
                }
            }
        }
    }
    .footer-random{
        padding: .5em;
        border-left: 1px solid #707070;
        flex-basis: 20%;
        p{
            padding: .5em;
            font-weight: bold;
        }
        a{
            display: block;
            padding: .5em;
            font-family: 'Raleway', sans-serif;
            text-decoration: none;
            color: black;
        }
    }
    .footer-socials{
        padding: .5em;
        border-left: 1px solid #707070;
        flex-basis: 20%;
        img{
            max-width: 20px;
            margin: auto;
        }
        p{
            font-weight: bold;
            padding: .5em;
        }
        a{
            display: block;
            padding: .5em;
            text-decoration: none;
            color: black;
            font-family: 'Raleway', sans-serif;
        }
    }
    .footer-working-hours{
        padding: .5em;
        border-left: 1px solid #707070;
        flex-basis: 20%;
        p{
            padding: .5em;
            &:first-of-type{
                font-weight: bold;
            }
        }
    }
    .footer-copy{
        flex-basis: 100%;
        margin-top: .5em;
        margin-left: 2em;
        padding-top: .5em;
        padding-left: .3em;
        border-top: 1px solid #707070;
        width: 20%;
        text-align: left;      
        p{
            font-family: 'Raleway', sans-serif;
        }
    }
}
</style>