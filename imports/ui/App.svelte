<script>
    import { Meteor } from "meteor/meteor";
    import TodayPaper from "./today_paper/TodayPaper.svelte";
    import LoginForm from "./LoginForm.svelte";

    let user = null;
    $m: {
        user = Meteor.user();
    }
</script>

{#if user}
    <TodayPaper />
{:else}
    <LoginForm />
{/if}