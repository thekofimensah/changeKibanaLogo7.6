# changeKibanaLogo7.6

To make this work, clone the repo locally, stop kibana, drag the `custom_css` folder into the plugins folder (usually at `/usr/share/kibana/plugins`), change `<yourbase64image>` in `main.less` to a 64 bit encoded svg image, then start Kibana.

In order for new plugins to work, kibana needs to rebundle. If that's not done automatically (check the logs -- and it can take 20 mins to finish), then download another plugin.
Stop kibana, `cd /usr/share/kibana` and I used `bin/kibana-plugin install https://github.com/prelert/kibana-swimlane-vis/releases/download/v7.6.2/prelert_swimlane_vis-7.6.2.zip` and then start kibana again. You can remove the plugin after kibana starts up successfully. 

If you want to change the logo when Kibana first loads, change `src/core/server/rendering/views/styles.js`and adjust `<yourbase64image>`. You may need to adjust some of the margins to center your logo correctly.
```
.kibanaWelcomeLogo {
            width: 60px;
            height: 60px;
            margin: 10px 0 0px 10px;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url('data:image/svg+xml;base64,<yourbase64image>');
          }
```
To change the start-up text "Loading Kibana", look in `src/core/server/rendering/views/template.js`.
