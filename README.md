## Brangr - *Br*owse *An*y *Gr*aph

Brangr is a simple, unique tool that any web server can host 
to provide a user-friendly browser/viewer for any GraphQL service (or many).

Brangr formats GraphQL results attractively, via a selection of user-configurable layouts.
It lets users extract the generated HTML, and its source JSON.
It provides a schema browser.
It has built-in docs.

Brangr enables sites hosting it to present users with 
a collection of pre-fab GraphQL requests, which they can edit if desired, 
and let them create their own requests.
And it allows sites to define custom CSS styling for all aspects of the formatted results.

It's fast &amp; small.[<img title="Public Brangr site" width="48%" hspace="0" align="right"
                            src="https://user-images.githubusercontent.com/458838/243126589-a9cfce13-fbac-4b7c-9eb9-61732c200e9a.png"
                            >](https://mnmnotmail.org/bgr/brangr.html)
It's a browser-based app, not a code module (although that might be arranged).
It's built with Vue.js, in ordinary Javascript & plain CSS, 
and employs the GraphQL.js language module&nbsp;[1].
It's tested on Firefox, Safari, and Chrome.

More features are on the drawing board &mdash; please convey what your GraphQL users need!

Try it at the [**public Brangr site**](https://mnmnotmail.org/bgr/brangr.html).

\
[1] https://graphql.org/graphql-js/language

### Example

```
query {
  heroes(_layout:{type:table}) { # _layout arg not sent to service
    first
    last
  }
}
```
Brangr renders the above query as roughly this HTML (though not in a quote block):
>heroes...
>| First  | Last |
>| ---    | ---  |
>| Arthur | Dent |
>| Ford   | Prefect |
>| Zaphod | Beeblebrox |

### Installation

1. Download the [latest release](https://github.com/networkimprov/brangr/releases), 
   and unpack its files into a website directory.
3. Copy `tmpl_brangr-config.js` to a new file, `brangr-config.js`.\
   Edit the new file to create the config for your site.
3. Copy `tmpl_brangr-local.css` to a new file, `brangr-local.css`.\
   No edits to this file are required at installation.
4. Direct your browser to `<site/dir>/brangr.html`.

### License

   Copyright 2023 Liam Breck  
   Published at https://github.com/networkimprov/brangr

   This Source Code Form is subject to the terms of the Mozilla Public  
   License, v. 2.0. If a copy of the MPL was not distributed with this  
   file, You can obtain one at http://mozilla.org/MPL/2.0/
