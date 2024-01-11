<script>
    import DateSetting from "./date/DateSetting.svelte";
    import Tasks from "./tasks/Tasks.svelte";
    import TasksSetting from "./tasks/TasksSetting.svelte";
    import Cover from "./cover/Cover.svelte";
    import CoverSetting from "./cover/CoverSetting.svelte";
</script>

<div class="non-print-section settings-container">
    <h2>settings</h2>
    <h4>Date</h4>
    <DateSetting />

    <h4>Tasks</h4>
    <TasksSetting />

    <h4>Cover Page</h4>
    <CoverSetting />

    <br />
    <hr />
    <br /><br />
</div>

<div class="container">
    <div class="box"></div>
    <div class="box rotate">
        <Tasks />
    </div>
    <div class="box">
        <big>NOTES</big>
    </div>
    <div class="box">
        <big>PUZZLE GAME</big>
    </div>

    <div class="box"></div>
    <div class="box"><Cover /></div>
    <div class="box"></div>
    <div class="box"></div>
</div>

<style>
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0;
    }

    * {
        box-sizing: border-box;
    }

    .settings-container {
        margin: 20px;
    }

    .container {
        width: 297mm; /* A4纸的宽度 297mm;*/
        height: 210mm; /* A4纸的高度 210mm*/
        display: flex;
        flex-wrap: wrap;
        padding: 5mm;
    }

    .box {
        width: 25%; /* 每个div的宽度 */
        height: 50%; /* 每个div的高度 */
        /* border: 10px solid black; */
        padding: 16px;
        overflow: hidden; /* 将内容限制在box内部 */
    }

    .rotate {
        transform: rotate(180deg);
    }

    @page {
        size: A4; /* 设置纸张大小 */
        size: landscape;
        margin: 0; /* 设置上下边距为2cm，左右边距为1cm */

        @top-left {
            content: none;
        }
        @top-center {
            content: "";
        }
        @top-right {
            content: "";
        }
        @bottom-left {
            content: "";
        }
        @bottom-center {
            content: "";
        }
        @bottom-right {
            content: "";
        }
    }
</style>
