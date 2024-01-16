<script>
    import { Meteor } from "meteor/meteor";
    import { Accounts } from "meteor/accounts-base";
    import "@material/web/textfield/outlined-text-field";
    import "@material/web/button/outlined-button";
    import "@material/web/button/filled-tonal-button";
    import "@material/web/divider/divider";

    let username = "";
    let password = "";

    const handleSubmit = () => {
        Meteor.loginWithPassword(username, password, (error) => {
            console.log(error);
            Accounts.createUser({ username, password }, (error) => {
                console.log(error);
            });
        });
    };

    function googleLogin() {
        Meteor.loginWithGoogle(
            {
                requestPermissions: [
                    "https://www.googleapis.com/auth/tasks.readonly",
                ],
            },
            (error) => {
                if (error) {
                    console.log("error:", error);
                    // 处理错误
                } else {
                    console.log("success");
                    return true;
                }
            }
        );
    }
</script>

<div class="container">
    <form class="flex-column" on:submit|preventDefault={handleSubmit}>
        <md-outlined-text-field
            label="Username"
            placeholder="Username"
            password="text"
            on:change={(e) => (username = e.target.value)}
            required
            minLength="3"
            maxLength="20"
            class="flex-item margin"
        />
        <md-outlined-text-field
            label="Password"
            placeholder="Password"
            type="password"
            on:change={(e) => (password = e.target.value)}
            required
            maxLength="20"
            minLength="6"
            class="flex-item margin"
        />
        <md-outlined-button class="flex-item margin">Log In</md-outlined-button>
    </form>
    <div class="margin">
        <md-divider inset />
    </div>
    <div class="margin flex-column">
        <md-filled-tonal-button on:click={googleLogin}>
            Google
            <svg slot="icon" viewBox="0 0 48 48" width="48px" height="48px"
                ><path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                /><path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                /><path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                /><path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                /></svg
            >
        </md-filled-tonal-button>
    </div>
</div>

<style>
    /* 当屏幕宽度小于等于600像素时应用的样式 */
    @media (max-width: 600px) {
        .container {
            width: calc(100%-32px);
            margin: 4em 16px;
        }
    }
    /* 当屏幕宽度大于600像素时应用的样式 */
    @media (min-width: 601px) {
        .container {
            width: 50%;
            margin: 4em 25%;
        }
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }
    .flex-item {
    }
    .margin {
        margin: 8px;
    }
</style>
