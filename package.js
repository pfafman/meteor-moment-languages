Package.describe({
  name: "pfafman:moment-languages",
  summary: "Some Languages files for Moment.js. See http://momentjs.com.",
  version: "2.11.1_2",
  git: "https://github.com/pfafman/meteor-moment-languages.git",
});

Package.on_use(function (api, where) {
  api.use('momentjs:moment');

  api.addFiles('server.js','server');
  api.addFiles('client.js','client');
  api.add_files('lib/locales.js', ['client', 'server']);
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use([ 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    }
  });
}
