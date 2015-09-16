## raw css

Raw Assets

public/assets vs app/styles

To add images, fonts, or other assets, place them in the public/assets directory. For example, if you place logo.png in public/assets/images, you can reference it in templates with assets/images/logo.png or in stylesheets with url('/assets/images/logo.png').

## raw html 

```
    <div>{{{myOwnHTMLContent}}}</div>

```

## Error: EACCES, open '/home/zhyq/.cache/bower/registry/bower.herokuapp.com/lookup/ember-cli-test-loader_25e49'


sudo bower cache clean --allow-root

rm -rf .cahce/bower


## property should not be set


## ember addone permission denyed 

sudo chown -R zhyq /usr/local/lib/node_modules/ember-cli/blueprints/addon