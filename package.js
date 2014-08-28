Package.describe({
  summary: "Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.1",
  git: "https://github.com/acreeger/meteor-moment.git"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  
  api.use(['moment'], where);
  api.add_files('lib/moment/min/locales.js', where);
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:moment@2.8.1', 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['moment', 'tinytest', 'test-helpers'], ['client', 'server']);
    }
  });
}
