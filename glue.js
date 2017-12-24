$( document ).ready(glue);

function glue() {
  const cjs = $('#configjson');
  const ips = $('#imagepullsecret');

  function credsChanged() {
    const creds = {};
    const auths = {}
    creds.auths = auths;

    const rows = $('#credsrowsholder').children();
    rows.each(function(ridx, row) {
      const cols = row.children;
      const registry = $(cols[0].children[0]).val();
      const username = $(cols[1].children[0]).val();
      const password = $(cols[2].children[0]).val();
      const email = $(cols[3].children[0]).val();

      auths[registry] = {
        Username: username,
        Password: password,
        Email: email
      };
    });

    cjs.val(credsToConfigJson(creds));
    ips.val(configJsonToImagePullSecret(cjs.val()));
  }

  $("#addcredrow").click(function() {
    addChangeDetectedRow("", "", "", "", credsChanged);
    credsChanged();
  });

  cjs.keyup(function() {
    ips.val(configJsonToImagePullSecret(cjs.val()));
    createCredRows(cjs.val(), credsChanged)
  })
  ips.keyup(function() {
    cjs.val(imagePullSecretToConfigJson(ips.val()));
    createCredRows(cjs.val(), credsChanged)
  })
}


function createCredRows(configJson, callback) {
  const creds = configJsonToCreds(configJson);
  const crh = $('#credsrowsholder');
  crh.empty();
  for (let registry in creds) {
    addChangeDetectedRow(registry, creds[registry].Username, creds[registry].Password, creds[registry].Email, callback);
  }
}


function addChangeDetectedRow(registry, username, password, email, callback) {
  const crh = $('#credsrowsholder');
  const row = $('<tr>');
  row.append(wrapInTd(addChangeDetectedInput(registry, callback)));
  row.append(wrapInTd(addChangeDetectedInput(username, callback)));
  row.append(wrapInTd(addChangeDetectedInput(password, callback)));
  row.append(wrapInTd(addChangeDetectedInput(email, callback)));

  const removeBtn = $('<input type="button" value="X">');
  row.append(wrapInTd(removeBtn));

  removeBtn.click(function() {
    row.remove();
    callback();
  })
  crh.append(row);
}

function wrapInTd(elem) {
  const td = $("<td/>");
  td.append(elem);
  return td;
}

function addChangeDetectedInput(value, callback) {
  const input = $('<input type="text" value="' + value + '"/>');
  input.keyup(callback);
  return input
}
