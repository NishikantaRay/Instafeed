## Instafeed

![image](https://user-images.githubusercontent.com/62615392/127748278-c1f06bac-c20a-4f7c-a19a-7abb80e4259f.png)

## Installation
Setting up Instafeed is pretty straight-forward - there are 3 main steps.

Create a Facebook app linked to Instagram, and add yourself as a test user. See Managing User Tokens.
Create an access token and provide it to an Instagram Token service
Add the instafeed.js script to your web page and provide some simple options. See Basic Usage
<script type="text/javascript" src="path/to/instafeed.min.js"></script>
Note: Instafeed.js is also compatible with require.js and commonJS exports

## Basic Usage
```
<div id="instafeed"></div>

<script type="text/javascript">
    var feed = new Instafeed({
      accessToken: 'your-token'
    });
    feed.run();
</script>

```

## Options

Here are some of the most commonly used options:

| Key  | Default Value  | Valid types | Description  |
|---|---|---|---|
| `accessToken` | `null` | String, Function | **Required.** The Instagram access token, either as a string, or a function which returns a string |
| `debug` | `false` | Boolean | Set to `true` to display debugging information |
| `filter` | `null` | Function | A function used to exclude images from your results. The function will be given the image data as an argument, and expects the function to return a boolean. |
| `limit` | `null` | Number | Display a maximum of this many posts |
| `sort` | `null` | Function | A custom function to sort the media, rather than the default 'most recent' sorting|
| `target` | `'instafeed'` | String, DOM Element | Either the ID or the DOM element itself where you want to add the images. |
| `template` | `'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'` | String | A mustache template used to produce HTML for the document. |
| `transform` | `null` | Function | A function used to transform the image data before it is rendered. |

See [Options](https://github.com/stevenschobert/instafeed.js/wiki/Options-Reference) in the wiki for the complete reference.
