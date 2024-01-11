<script>
    export let task = null;
</script>

<li>
    <!-- {#if task?.title}<div><label for={task.id}>{task?.title}</label><input type="checkbox" readonly id={task.id} /></div>{/if}
    {#if task?.note}<pre class="limited-lines">{task?.note
                .split("\n")
                .filter((n) => n.trim() !== "")
                .join("\n")}</pre>{/if} -->

    <div class="task-left">
        <input type="checkbox" readonly id={task.id} />
    </div>
    <div class="task-right">
        {#if task?.title}<label for={task.id}>{task?.title}</label>{/if}
        {#if task?.note}<pre class="limited-lines">{task?.note
                    .split("\n")
                    .filter((n) => n.trim() !== "")
                    .join("\n")}</pre>{/if}
    </div>
</li>

<style>
    li {
        padding: 6px;
        /* border-bottom: #eee solid 1px; */
        border-bottom: none;
        /* font-size: 14px; */

        display: flex;
        flex-wrap: wrap;
    }

    .task-left {
        width: 35px;
        height: 100%;
    }
    .task-right {
        width: 190px;
        height: 100%;
    }

    input[type="checkbox"] {
        font-size: 1em;
        -webkit-appearance: none; /* 移除默认样式 */
        -moz-appearance: none;
        appearance: none;
        width: 1em; /* 设置复选框的宽度 */
        height: 1em; /* 设置复选框的高度 */
        border: 1px solid black; /* 设置边框样式 */
        border-radius: 0.5em; /* 设置边框圆角 */
        /* background-color: #fff; 设置背景颜色 */
        outline: none; /* 移除选中时的外边框 */
        vertical-align: middle;
        margin-right: 1em;
    }
    label {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap; /* 允许文本自动换行 */
        text-align: left; /* 设置文本左对齐 */
    }

    .limited-lines {
        white-space: pre;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        /* margin: 0 0 0 3em; */
        margin: 0;
        color: gray;
        font-size: 0.6em;

        text-wrap: wrap;
    }
</style>
