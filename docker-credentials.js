function credsToConfigJson(creds) {
    const newCreds = {
      auths: {}
    };
    for (let registry in creds.auths) {
      const cred = creds.auths[registry];
      const newCred = {};
      newCred.Auth = btoa(cred.Username + ":" + cred.Password);
      newCred.Email = cred.Email;
      newCreds.auths[registry] = newCred;
    }

    return JSON.stringify(newCreds, null, "  ");
}

function configJsonToImagePullSecret(configJson) {
  const configJsonB64 = btoa(configJson);
  const imagePullSecret  =
  'apiVersion: v1\n' +
  'kind: Secret\n' +
  'metadata:\n' +
  '  name: replace-before-injecting\n' +
  'data:\n' +
  '  .dockerconfigjson: ' + configJsonB64 + '\n' +
  'type: kubernetes.io/dockerconfigjson';

  return imagePullSecret;
}

function imagePullSecretToConfigJson(kubeYaml) {
  const lines = kubeYaml.split("\n");
  for (let lidx in lines) {
    const line = lines[lidx];
    if (line.includes(".dockerconfigjson")) {
      const parts = line.split(":");
      if (parts.length == 2) {
        const configJsonB64 = parts[1];
        const configJson = atob(configJsonB64);
        return configJson;
      }
    }
  }
}

function configJsonToCreds(configJson) {
  const creds = JSON.parse(configJson).auths;
  const newCreds = [];
  for (let idx in creds) {
    const cred = creds[idx];
    if (typeof(cred.Auth) !== 'undefined' && typeof(cred.Username) === 'undefined') {
      const up = atob(cred.Auth);
      const ups = up.split(":");
      if (ups.length == 2) {
        cred.Username = ups[0];
        cred.Password = ups[1];
      }
    }
    newCreds[idx] = cred;
  }
  return newCreds;
}
