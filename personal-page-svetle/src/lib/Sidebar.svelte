<script lang="ts">
    import avatar from '../assets/avatar.jpg'

    export let arr: string[]; // array of strings
</script>

<aside id="sidebar">
    <img id="avatar-image" src = {avatar} alt="avatar">
    <p id="avatar-label">Stepan Dementev</p>
    {#each arr as item}
        <p>{item}</p>
    {/each}
    <footer>
        Created at Innopolis University
    </footer>
</aside>


<style>
    *{
        font-family: "Calibri";
    }


    p{
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

    #sidebar > footer{
        position: absolute;
        bottom: 0;
    }

    #sidebar > *{
        margin: 10%;
        color: #413934;
    }

    #avatar-label{
        margin-top: 0;
    }

    #avatar-image{
        margin-bottom: 1%;
        width: 80%;
        border-radius: 50%;
        border-width: 10px;
    }
</style>