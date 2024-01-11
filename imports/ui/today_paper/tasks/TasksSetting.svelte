<script>
    import { Meteor } from "meteor/meteor";
    import { startOfDay2rfc3339, endOfDay2rfc3339, rfc3339ToInt } from "/imports/functions/date";

    let tasks = [];

    async function login() {
        console.log("start login");
        Meteor.loginWithGoogle(
            {
                requestPermissions: ["https://www.googleapis.com/auth/tasks.readonly"],
            },
            (error) => {
                if (error) {
                    console.log("error:", error);
                    // 处理错误
                } else {
                    console.log("success");
                    return true;
                }
            },
        );
    }

    async function tasksGet() {
        console.log("start get lists");
        let lists = await Meteor.callAsync("tasks.lists")
            .then((result) => {
                console.log(result);
                return result;
            })
            .catch(async (error) => {
                console.log(error);
                await login();
            });
        console.log(lists)

        let startTime = startOfDay2rfc3339();
        let endTime = endOfDay2rfc3339();
        console.log(startTime, endTime);

        console.log("start get tasks");
        let lists2tasks = await Promise.all(
            lists.map(async (list) => {
                let tasks = await Meteor.callAsync("tasks.get", { listId: list.id, dueMax: endTime, dueMin: startTime })
                    .then((result) => {
                        console.log(result);
                        return result || [];
                    })
                    .catch((error) => {
                        console.log(error);
                        throw error;
                    });
                if (tasks.length > 0) {
                    list.tasks = tasks;
                    console.log(list);
                    return list;
                } else {
                    return null;
                }
            }),
        );
        console.log(lists2tasks);

        // let startTimeInt = rfc3339ToInt(startTime);
        // let endTimeInt = rfc3339ToInt(endTime);

        tasks = lists2tasks
            .filter((t) => t != null)
            .map((l) => l.tasks)
            .flat()
            .map((t) => ({
                id: t.id,
                title: t.title,
                due: rfc3339ToInt(t.due),
                note: t.note,
            }));
        // .filter((t) => t.due > startTimeInt && t.due <= endTimeInt);
        console.log(tasks);
        Meteor.users.update(Meteor.userId(), {
            $set: {
                "profile.paper.tasks": tasks,
            },
        });
    }
</script>

<button class="non-print-section" on:click={tasksGet}>update Google Tasks</button>
