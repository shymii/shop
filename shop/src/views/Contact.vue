<template>
    <main id="contact">
        <div class="contact-form">
            <h2>Contact</h2>
            <input type="text" class="name-input" placeholder="name" v-model="name">
            <input type="text" class="email-input" placeholder="email" v-model="email">
            <textarea class="question-input" cols="60" rows="10" placeholder="your question" v-model="question"></textarea>
            <button class="btn-conf" @click="sendForm()">SEND</button>
        </div>
        <div :class="cont">
            <p>Thc for submitting the form {{form.name}}! We'll reach to you as fast as possible!</p>
            <figure class="icon" @click="closeConf()">
                <img src="../assets/close.png" alt="close">
            </figure>
        </div>
        <div :class="error">
            <p>Yo man fill the form!</p>
            <figure class="icon" @click="closeConf()">
                <img src="../assets/close.png" alt="close">
            </figure>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            email: '',
            question: '',
            cont: 'contact-conf disabled',
            error: 'error-msg disabled',
            form: {
                name: '',
                email: '',
                question: ''
            },
            timeout: null
        }
    },
    methods: {
        sendForm(){
            if(this.name && this.email && this.question){
                this.form.name = this.name
                this.form.email = this.email
                this.form.question = this.question
                this.name = ''
                this.email = ''
                this.question = ''
                this.cont = 'contact-conf enabled'
                this.timeout = setTimeout(() => {
                    this.cont = 'contact-conf disabled'
                }, 5000)
            }
            else{
                this.error = 'error-msg enabled'
                this.timeout = setTimeout(() => {
                    this.error = 'error-msg disabled'
                }, 5000)
            }
        },
        closeConf(){
            this.cont = 'contact-conf disabled'
            this.error = 'error-msg disabled'
            clearTimeout(this.timeout)
        }
    },
    mounted(){
		window.scrollTo(top)
	}
}
</script>

<style lang="scss" scoped>
#contact{
    width: 50%;
    margin: auto;
    margin-top: 4em;
    .contact-form{
        padding: 1.5em;
        h2{
            text-align: left;
            padding: 1em;
            padding-left: 0;
            font-weight: 100;
            font-family: 'Raleway', sans-serif;
        }
        input, textarea{
            display: block;
            margin-top: 2em;
            border: none;
            border-bottom: 1px solid #707070;
            padding: .5em 0;
            resize: none;
            outline: none;
            transition: .5s;
            &::placeholder{
                font-family: 'Raleway', sans-serif;
            }
            &:focus{
                border-color: #EDB270;
            }
        }
        textarea{
            border-top: 1px solid #707070;
        }
        .btn-conf{
            background: none;
            border: none;
            padding: 1em;
            padding-bottom: .5em;
            margin-top: 2em;
            margin-left: 19%;
            border-bottom: 1px solid #707070;
            transition: .5s;
            font-family: 'Raleway', sans-serif;
            font-size: 16px;
            outline: none;
            &:hover{
                cursor: pointer;
                border-color: #EDB270;
            }
        }
    }
    .contact-conf, .error-msg{
        position: absolute;
        width: 90vw;
        bottom: 3em;
        left: 3em;
        background-color: #EBD270;
        height: 10em;
        border-radius: 1em;
        padding: 3em;
        p{
            font-family: 'Raleway', sans-serif;
            font-size: 1.5em;
        }
        figure{
            position: absolute;
            top: 1em;
            right: 1em;
            max-height: 16px;
            &:hover{
                cursor: pointer;
            }
            img{
                max-height: 16px;
            }
        }
    }
    .error-msg{
        background-color: #FE6645;
    }
    .disabled{
        display: none;
    }
    .enabled{
        display: block;
    }
}
</style>