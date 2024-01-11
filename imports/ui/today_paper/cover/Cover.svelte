<script>
    import { Meteor } from "meteor/meteor";
    let name, slogan;
    $m: {
        let user = Meteor.user();
        name = user?.profile?.paper?.name;
        slogan = user?.profile?.paper?.slogan;
    }
</script>

<div class="container">
    <h1 class="top">{name}'s <br />TODAY</h1>

    <div class="bottom">
        <p class="bottom-center">{slogan}</p>
        <small class="bottom-center">{`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}</small>
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
