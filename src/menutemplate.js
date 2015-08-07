// Modified from Kitematic by Ash Wilson

var remote = require('remote');
var app = remote.require('app');
var shell = require('shell');
var router = require('./router');
var util = require('./utils/Util');
var setupUtil = require('./utils/SetupUtil');
var machine = require('./utils/DockerMachineUtil');
var dialog = remote.require('dialog');
import docker from './utils/DockerUtil';

// main.js
var MenuTemplate = function () {
  return [
    {
      label: 'Kite-Shell',
      submenu: [
      {
        label: 'About Kite-Shell',
        click: function () {
          router.get().transitionTo('about');
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: util.CommandOrCtrl() + '+Q',
        click: function() {
          app.quit();
        }
      }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+' + util.CommandOrCtrl() + '+I',
          click: function() { remote.getCurrentWindow().toggleDevTools(); }
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
      {
        label: 'Minimize',
        accelerator: util.CommandOrCtrl() + '+M',
        selector: 'performMiniaturize:'
      },
      {
        label: 'Close',
        accelerator: util.CommandOrCtrl() + '+W',
        click: function () {
          remote.getCurrentWindow().hide();
        }
      }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Report Issue or Suggest Feedback',
          click: function () {
            metrics.track('Opened Issue Reporter', {
              from: 'menu'
            });
            shell.openExternal('https://github.com/smashwilson/kite-shell/issues/new');
          }
        }
      ]
    }
  ];
};

module.exports = MenuTemplate;
