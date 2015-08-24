Package.describe({
  name: 'acemtp:logentries',
  version: '1.0.14',
  summary: 'Override console.log (and others) to send logs to Logentries',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('logentries.js', 'server');
  api.export('Logger', 'server');
  api.export('log', 'server');
});

Npm.depends({
  le_node: "1.0.14",
});