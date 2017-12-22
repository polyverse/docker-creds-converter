# web-docker-config-json
Provides a config.json &lt;-> plain credentials bi-way in browser transform

A frequent need when generating ImagePullSecrets for kubernetes, or passing in credentials to remote docker hosts, you need config.json.

Back in the day, you'd pick it up from ~/.docker/config.json . With Credentials Helpers, this can get annoying real fast.

You do 
```
echo "$username:$password" | base64
```
But then you forget to ask for padding, and the token doesn't work.

Ugh! No more. This tool will change your life!
