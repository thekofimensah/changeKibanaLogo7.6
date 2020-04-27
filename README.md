# changeKibanaLogo7.6

To make this work, clone the repo locally, stop kibana, drag the `custom_css` folder into the plugins folder (usually at `/usr/share/kibana/plugins`), change `<yourbase64image>` in `main.less` to a 64 bit encoded svg image, then start Kibana.

In order for new plugins to work, kibana needs to rebundle. If that's not done automatically (check the logs -- and it can take 20 mins to finish), then download another plugin.
Stop kibana, `cd /usr/share/kibana` and I used `bin/kibana-plugin install https://github.com/prelert/kibana-swimlane-vis/releases/download/v7.6.2/prelert_swimlane_vis-7.6.2.zip` and then start kibana again. You can remove the plugin after kibana starts up successfully. 

