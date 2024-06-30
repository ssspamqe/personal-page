<script>
    let sidebarNavigation;
</script>

<div id="sidebar">
    <img id="avatar-image" src="resources/me.jpg" alt="avatar">
    <p id="avatar-label">Stepan Dementev</p>
    <nav id="sidebar-nav" bind:this = {sidebarNavigation}>
        <a href="#header-part">Back to main page</a>
    </nav>

    <footer>
        Created at Innopolis University
    </footer>
</div>





<style>
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

    footer {
        position: absolute;
        bottom: 0;
    }

    #sidebar > * {
        margin: 10%;
        color: #413934;
    }

    #sidebar-nav {
        margin-top: 30%;
    }

    #sidebar-nav > a {
        display: block;
        margin-bottom: 10px;
        font-size: 180%;
    }

    #avatar-label {
        margin-top: 0;
    }

    #avatar-image {
        margin-bottom: 1%;
        width: 80%;
        border-radius: 50%;
        border-width: 10px;
    }
</style>