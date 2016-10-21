<template>
<section id="app">
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column">
                        <h1 class="title">51cto editor with markdown</h1>
                        <h2 class="subtitle">工欲善其事,必先利其器.</h2>
                        <p>
                            <a class="button is-small" href="https://github.com/rozbo/51cto-editor-plus" target="_blank">
                                <span class="icon is-small"><i class="fa fa-star"></i></span><span>Star</span></a><span>&nbsp;</span>
                            <a class="button is-small" href="https://github.com/rozbo/51cto-editor-plus/fork" target="_blank"><span class="icon is-small"><i class="fa fa-github"></i></span><span>Fork</span></a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="heading">
                <h1 class="title">使用帮助</h1>
                <h5 class="subtitle">
                    在下面左边的框框写上<code>markdown</code>格式的帖子，然后点击下面的按钮，
                    这个小工具会自动帮你转换成<strong>老旧而破败的</strong>51cto可识别的格式，并复制到您的剪切板上。
            </h5>
            </div>
            <HR></HR>
            <div class="content">
                <div class="columns">
                    <div class="column">
                        <textarea id="md" v-model="md_content" class="textarea" placeholder="ur markdown here"></textarea>
                    </div>
                    <div class="column">
                        <textarea id="ubb" v-model="ubb_content" class="textarea" placeholder="result"></textarea>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <a v-on:click="deal" class="button is-primary is-outlined has-text-centered	is-fullwidth">转换</a></div>

                </div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>51cto editor plus</strong> by <a href="https://post.zz173.com">rozbo</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                </p>
                <p>
                    <a class="icon" href="https://github.com/rozbo/51cto-editor-plus">
                        <i class="fa fa-github"></i>
                    </a>
                </p>
            </div>
        </div>
    </footer>
</section>
</template>


<script>
//es6
import md2ubb from "../helper/md2ubb";
export default {
    el: "#app",
    //data:function(){}，下面是es6写法
    data: {
        md_content: '',
        ubb_content: '',
    },
    methods: {
        deal: function() {
            this.ubb_content = md2ubb(this.md_content);
        }
    }
}
</script>


<style>
.textarea {
    min-height: 500px;
}
</style>
