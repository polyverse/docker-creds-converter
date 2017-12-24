# Convert between docker registry credentials, config.json and kubernetes ImagePullSecrets live

Hosted using github pages here: https://polyverse.github.io/docker-creds-converter/

Generating registry secrets for Kubernetes is cumbersome. Extracting creds or updating the secret is annoying. Generating config.json is painful. But we need to do it all the time!

Just enter your registry credentials, and watch the config.json and your kubernetes yaml get populated live. It works both ways (or three ways). Edit any field and the others will reflect the updates. So post a registry secret in the yaml section, and watch the config.json as well as creds get populated.

Ugh! No more. This tool will change your life!
