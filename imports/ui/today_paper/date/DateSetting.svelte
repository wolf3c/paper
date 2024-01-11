<script>
    import { Meteor } from "meteor/meteor";

    let scoops = null;

    $m: if (Meteor.user()) {
            scoops = Meteor.user()?.profile?.paper?.date || 0;
        }

    $: setDate(scoops);

    function setDate(date) {
        Meteor.users.update(Meteor.userId(), {
            $set: {
                "profile.paper.date": date,
            },
        });
    }
</script>


<label>
    <input type="radio" bind:group={scoops} value={0} />
    today
</label>

<label>
    <input type="radio" bind:group={scoops} value={1} />
    tomorrow
</label>
