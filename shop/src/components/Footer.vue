<template>
    <footer>
        <section class="footer-contact">
            <div class="working-hours">
                <p class="open">we're open</p>
                <p>monday: 9:00-17:00</p>
                <p>tuesday: 9:00-15:00</p>
                <p>wednesday: 8:00-14:00</p>
                <p>friday: 10:00-14:00</p>
            </div>
            <div class="socials">
                <p class="mail">contact us at</p>
                <p>email: pjeski@pjeski.corp</p>
                <p>instagram: @pjeski</p>
                <p>facebook: fb.com/prsink</p>
            </div>
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
    .footer-contact{
        margin-left: 2em;
        padding-top: .5em;
        p{
            padding-left: .3em;
            padding-top: .3em;
            font-family: 'Raleway', sans-serif;
        }
        .working-hours{
            .open{
                padding-left: 0;
                width: 10%;
                border-bottom: 1px solid #707070;
            }
        }
        .socials{
            margin-top: .5em;
            .mail{
                padding-left: 0;
                width: 10%;
                border-bottom: 1px solid #707070;
            }
        }  
    }
    .footer-copy{
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