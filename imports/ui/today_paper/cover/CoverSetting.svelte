<script>
    import { Meteor } from "meteor/meteor";

    let name, slogan;
    $m: {
        let user = Meteor.user();
        name = user?.profile?.paper?.name;
        slogan = user?.profile?.paper?.slogan;
    }

    function setCoverInfo() {
        console.log(name, slogan);
        Meteor.users.update(Meteor.userId(), {
            $set: {
                "profile.paper.name": name,
                "profile.paper.slogan": slogan
            },
        });
    }
</script>

<form action={setCoverInfo}>
    <label for="name">your name</label>
    <input type="text" name="name" id="name" bind:value={name} />

    <br />
    <label for="slogan">your slogan</label>
    <input type="text" name="slogan" id="slogan" bind:value={slogan} />

    <br />
    <button on:click|preventDefault={setCoverInfo}>okay</button>
</form>
