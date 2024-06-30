<header>
    <div class="structure-part" id="header-part">
        <h1>
            HELLO!<br>
            I AM STEPAN<br>
            BACKEND DEVELOPER
        </h1>
        <p>Java Spring programmer, cats lover</p>
    </div>
</header>
<main>
    <div class="structure-part" id="about-me-part">
        <h1>ABOUT ME</h1>
        <p>
            I'am Stepan Dementev, a Back-End Developer located at Innopolis, Russia.
            I have a serious passion for creating and producing server web applications with pleasant and clear code
            style
            and architecture.
            I would like to switch to Kotlin, not afraid of new technologies to learn.
            Well-organized person, ready to take responsibility and crucial roles.
        </p>
    </div>

    <div class="structure-part" id="skills-part">
        <h1>SKILLS</h1>
        <ul id="skill-list">
            <li><p>Java</p></li>
            <li><p>Spring</p></li>
            <li><p>PostgreSQL,Redis</p></li>
            <li><p>Hibernate</p></li>
            <li><p>Grafana</p></li>
            <li><p>Docker</p></li>
            <li><p>Kafka</p></li>
            <li><p>Rest API</p></li>
            <li><p>Git, GitHub</p></li>
        </ul>
    </div>

    <div class="structure-part" id="projects-part">
        <h1>Projects</h1>
        <ul>
            <li>
                <p>
                    <a href="https://github.com/ssspamqe/Link-Tracker"><b>Link-Tracker</b></a>
                    an application consisting of two services - Telegram bot and Scrapper
                    (an application that checks resource updates using links stored in PostgreSQL). The client
                    registers in Bot, sends links to the GitHub repository or a question on StackOverflow and
                    receives information about, for example, new answers to a question or a new commit directly in
                    the messenger. Communication between the services is implemented through the Rest API and Kafka.
                    There
                    is coverage with both unit and integration tests.
                </p>
            </li>
            <li>
                <p>
                    <a href="https://github.com/ssspamqe/Fractal-Generator"><b>Fractal Generator</b></a>
                    an application written in pure Java language (using Lombok and
                    Junit5), which generates fractal images in the form of concrete files (.png, .jpg, .jpeg).
                    There is a coverage with unit tests. Learn more in README.md file (in Russian).
                </p>
            </li>
        </ul>
    </div>

    <div class="structure-part" id="contact-with-me-part">
        <h1>Contact with me</h1>
        <div id="contacts">
            <a href="https://github.com/ssspamqe" id="gh-link">
                <img src="resources/github_logo.png" alt="github logo">
            </a>
            <a href="https://t.me/dementevssstepan" id="tg-link">
                <img src="resources/telegram_logo.png" alt="telegram logo">
            </a>
            <a href="mailto:dementevssstepan@gmail.com" id="email">
                <img src="resources/gmail_logo.png" alt="gmail logo">
            </a>
        </div>
    </div>

</main>

<style>
    *{
        font-family: "Calibri";
    }

    body {
        font-family: "Roboto Light", sans-serif;
        background-color: #E7AD99;
    }

    p{
        font-size: 300%;
    }

    a:visited{
        color: inherit;
    }

    a{
        text-decoration: none;
    }

    a:hover{
        color: rgb(128, 128, 128);
    }

    h1 {
        font-size: 700%;
        margin-top: 0;
        margin-bottom: 0;
        color: #495867;
        font-family: Ramona;
        text-align: left;
    }

    #sidebar > footer{
        position: absolute;
        bottom: 0;
    }

    #sidebar > *{
        margin: 10%;
        color: #413934;
    }

    #sidebar-nav > a{
        display: block;
        margin-bottom: 10px;
        font-size: 180%;
    }

    #contacts  img{
        height: 100px;
        margin: 10px;
    }

    header, main{
        padding-left: 17%;
    }

    .structure-part{
        /*padding-top: 12%;*/
        margin: 5%;
        margin-bottom: 20%;
        background: white;
        border-radius: 20px;
        box-shadow: 0 4px 100px rgba(0, 0, 0, 0.2);
        padding: 5%;

    }

    ul{
        list-style-type: none;
    }

    #skill-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    #skill-list li {
        list-style-position: inside;
        text-align: left;
        margin: 0;
        padding: 0;
    }

    ol,ul{
        padding-left: 0;
        margin-left: 0;
    }


</style>