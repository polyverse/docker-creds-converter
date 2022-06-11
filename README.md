# DEPRECATION NOTICE

Please note that this repository has been deprecated and is no longer actively maintained by Polyverse Corporation.  It may be removed in the future, but for now remains public for the benefit of any users.

Importantly, as the repository has not been maintained, it may contain unpatched security issues and other critical issues.  Use at your own risk.

While it is not maintained, we would graciously consider any pull requests in accordance with our Individual Contributor License Agreement.  https://github.com/polyverse/contributor-license-agreement

For any other issues, please feel free to contact info@polyverse.com

---

# Convert between docker registry credentials, config.json and kubernetes ImagePullSecrets live

Hosted using github pages here: https://polyverse.github.io/docker-creds-converter/

Generating registry secrets for Kubernetes is cumbersome. Extracting creds or updating the secret is annoying. Generating config.json is painful. But we need to do it all the time!

Just enter your registry credentials, and watch the config.json and your kubernetes yaml get populated live. It works both ways (or three ways). Edit any field and the others will reflect the updates. So post a registry secret in the yaml section, and watch the config.json as well as creds get populated.

Ugh! No more. This tool will change your life!
