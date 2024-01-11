import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            ...Meteor.settings.private.serviceConfigurations.google,
        },
    },
    {
        "web":
        {
            "client_id": "400434601450-valuejpvclh869k2eolbuk82gsq7tcii.apps.googleusercontent.com",
            "project_id": "paper-410308",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_secret": "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"
        }
    }
)