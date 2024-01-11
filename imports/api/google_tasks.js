import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";


Meteor.methods({
    "tasks.lists"() {
        const apiKey = Meteor.settings.private.serviceConfigurations.google.apiKey;
        const accessToken = Meteor.user().services.google.accessToken;
        const apiUrl = `https://tasks.googleapis.com/tasks/v1/users/@me/lists?key=${apiKey}`;
        const response = HTTP.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const taskLists = response.data.items;
        // 处理任务列表数据
        console.log('taskLists: \n', taskLists);
        return taskLists
    },
    'tasks.get'({listId, dueMax, dueMin}) {
        const apiKey = Meteor.settings.private.serviceConfigurations.google.apiKey;
        const accessToken = Meteor.user().services.google.accessToken;
        const apiUrl = `https://tasks.googleapis.com/tasks/v1/lists/${listId}/tasks?key=${apiKey + (dueMax ? '&dueMax='+dueMax : '') + (dueMin ? '&dueMin='+dueMin : '')}&showCompleted=false`;
        console.log(apiUrl)
        const response = HTTP.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const tasks = response.data.items;
        return tasks

    }
});