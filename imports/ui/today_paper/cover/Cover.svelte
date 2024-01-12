<script>
    import { Meteor } from "meteor/meteor";
    let name, slogan, date;
    $m: {
        let user = Meteor.user();
        name = user?.profile?.paper?.name;
        slogan = user?.profile?.paper?.slogan;
        date = user?.profile?.paper?.date;
    }

    function dateFormat(date=0) {
        let now = new Date(Date.now() + date * 24 * 60 * 60 * 1000);
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    }
</script>

<div class="container">
    <h1 class="top">{name ? name+'\'s' : 'PAPER'} <br />TODAY</h1>

    <div class="bottom">
        <p class="bottom-center">{slogan || ''}</p>
        <small class="bottom-center">{dateFormat(date)}</small>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* 将子元素在容器中水平分布 */
        height: 100%;
    }
    .top {
        align-self: flex-start; /* 将顶部内容对齐到容器的顶部 */
    }
    .bottom {
        display: flex;
        flex-direction: column;
    }
    .bottom-center {
        align-self: center;
    }
</style>
