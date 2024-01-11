<script>
    import { Meteor } from "meteor/meteor";
    import Task from "./Task.svelte";

    let tasks;
    $m: tasks = Meteor.user()?.profile?.paper?.tasks;
</script>


<div class="print-section">
    <big>TASKS</big>
    <ul>
        {#each tasks || [] as t (t.id)}
            <Task task={t} />
        {/each}
    </ul>
</div>


<style>
    ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin: 0;
    }

</style>
