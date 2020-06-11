# changeKibanaLogo7.6

To make this work, clone the repo locally, stop kibana, drag the `custom_css` folder into the plugins folder (usually at `/usr/share/kibana/plugins`), change `<yourbase64image>` in `main.less` to a 64 bit encoded svg image, then start Kibana.

In order for new plugins to work, Kibana needs to rebundle. 

Simply delete the 'optimize' folder and Kibana will be forced to rebundle again.

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
