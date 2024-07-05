<script lang="ts">
    import '../styles.css'
    export const prerender = true;


    import githubLogo from '../../lib/images/github_logo.png';
    import telegramLogo from '../../lib/images/telegram_logo.png';
    import gmailLogo from '../../lib/images/gmail_logo.png';
</script>

<main>
    <div class="structure-part" id="contact-with-me-part">
        <h1>Contact with me</h1>
        <div id="contacts">
            <a href="https://github.com/ssspamqe" id="gh-link">
                <img src={githubLogo} alt="github logo">
            </a>
            <a href="https://t.me/dementevssstepan" id="tg-link">
                <img src={telegramLogo} alt="telegram logo">
            </a>
            <a href="mailto:dementevssstepan@gmail.com" id="email">
                <img src={gmailLogo} alt="gmail logo">
            </a>
        </div>
    </div>
</main>
