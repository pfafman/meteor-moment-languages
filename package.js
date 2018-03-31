Package.describe({
  name: "pfafman:moment-languages",
  summary: "Some Languages files for Moment.js. See http://momentjs.com.",
  version: "2.11.1_5",
  git: "https://github.com/pfafman/meteor-moment-languages.git",
});

Package.on_use(function (api, where) {
  //api.versionsFrom("1.4.1");
  //api.use('momentjs:moment');
  
  api.use(['tmeasday:check-npm-versions@0.3.1', 'ecmascript'],['client', 'server']);

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
