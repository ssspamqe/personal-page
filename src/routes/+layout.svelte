<script lang="ts">
    import avatar from '../lib/images/avatar.jpg'

    export const prerender = true;

</script>

<aside id="sidebar">
    <header>
        <img id="avatar-image" src={avatar} alt="avatar">
        <p id="avatar-label">Stepan Dementev</p>
        <nav id="sidebar-nav">
            <a href=".">Hello!</a>
            <a href="./about">About Me</a>
            <a href="./skills">Skills</a>
            <a href="./projects">Projects</a>
            <a href="./contact">Contact with me</a>
            <a href="./comic">Comic</a>
        </nav>
    </header>

    <footer>
        Created at Innopolis University
    </footer>
</aside>

<slot/>

<style>
    * {
        font-family: "Calibri";
    }

    header{
        padding: 0;
    }

    p {
        font-size: 300%;
        text-align: center;
    }

    #sidebar {
        width: 15%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        float: left;
        background-color: #ECC8AF;
        color: white;
        text-align: center;
        box-shadow: 0 4px 100px rgba(0, 0, 0, 0.2);
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
    }

    #sidebar > footer {
        position: absolute;
        bottom: 0;
    }

    #sidebar > * {
        margin: 10%;
        color: #413934;
    }

    #avatar-label {
        margin-top: 0;
    }

    #sidebar-nav {
        margin-top: 30%;
    }

    #sidebar-nav > a {
        display: block;
        margin-bottom: 10px;
        font-size: 180%;
    }


    #avatar-image {
        margin-bottom: 1%;
        width: 80%;
        border-radius: 50%;
        border-width: 10px;
    }
</style>