<script lang="ts">
    import Sidebar from './lib/Sidebar.svelte'

    import MainPageHeader from "./lib/MainPageHeader.svelte";

    import AboutMePart from "./lib/structure.parts/AboutMePart.svelte";
    import SkillsPart from "./lib/structure.parts/SkillsPart.svelte";
    import ProjectsPart from "./lib/structure.parts/ProjectsPart.svelte";
    import ContactWithMePart from "./lib/structure.parts/ContactWithMePart.svelte";

    import type {Anchor} from "./lib/ intefaces/BasicInterfaces.svelte";

    const sidebarAnchors: Anchor[] = buildSidebarAnchors();

    function buildSidebarAnchors(): Anchor[] {
        const headerAnchor: Anchor = {
            href: "#header-part",
            textContent: "Hello!"
        }
        const aboutMeAnchor: Anchor = {
            href: "#about-me-part",
            textContent: "About me"
        }
        const skillsAnchor: Anchor = {
            href: "#skills-part",
            textContent: "Skills"
        }
        const projectsAnchor: Anchor = {
            href: "#projects-part",
            textContent: "Projects"
        }
        const contactAnchor: Anchor = {
            href: "#contact-with-me-part",
            textContent: "Contact with me"
        }

        return [headerAnchor, aboutMeAnchor, skillsAnchor, projectsAnchor, contactAnchor]
    }

</script>


<MainPageHeader/>
<main>
    <AboutMePart/>
    <SkillsPart/>
    <ProjectsPart/>
    <ContactWithMePart/>
</main>


<Sidebar anchors={sidebarAnchors}/>
