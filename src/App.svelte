<script>
    import UserInterface from './lib/UserInterface.svelte';
    import DifficultySelection from "./lib/DifficultySelection.svelte";

</script>

<main>
    <DifficultySelection/>
    <UserInterface/>
    <img src="bobomb.png" alt="A bomb.">
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;  

    img {
        position: fixed;
        height: 339px;
        width: 292px;
        bottom: 30px;
        right: 15px;
        pointer-events: none;
        user-select: none;
    }
    
    main {
        caret-color: transparent;
    }
</style>
