<script lang="ts">
    import Sidebar from './lib/Sidebar.svelte'

    import MainPageHeader from "./lib/MainPageHeader.svelte";

    import AboutMePart from "./lib/structure.parts/AboutMePart.svelte";
    import SkillsPart from "./lib/structure.parts/SkillsPart.svelte";
    import ProjectsPart from "./lib/structure.parts/ProjectsPart.svelte";
    import ContactWithMePart from "./lib/structure.parts/ContactWithMePart.svelte";
</script>


<MainPageHeader/>
<main>
    <AboutMePart/>
    <SkillsPart/>
    <ProjectsPart/>
    <ContactWithMePart/>
</main>


<Sidebar arr={["Hello!","About me","Skills", "Projects", "Contact with me"]}/>

