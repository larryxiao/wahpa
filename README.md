wahpa
=====

*   wahpa is a chrome extension that use markdown to organize your bookmarks/favorites/tabs
*   it's capable of
    1.   actions: get current tab/ tabs
    1.   organize: add tags, timestamp ...
    1.   save: to markdown file
    1.   use ...
*   why
    *   why markdown
### Work Progress
### Todo
*   name of the extension
    *   candidates: wahpa, saveinmd
1.  now
    *   [done][22 November 2013] get tags
    *   edit (add tags etc.)
        *   [done][24 November 2013] a preliminary draggable element organization
            *   unsorted elements, new tag (div), move bookmarks with mouse drag and drop
            *   jquery UI
    *   [done][24 November 2013] store
        *   output to markdown
1.  later
    *   shortcut
    *   make it beautiful
1.  might
    *   integrate with cloud service (or a server and frontend lol)
1.  anyway
    *   create sublimetext command to add this -> [done][22 November 2013]

### issues
*   accidently click "show" with discard unsaved result
*   code clean up: mix of javascript and jquery
*   probably should change the toolbar icon action to open editor directly
*   when moving (before release), original should not be removed, to minify movement of following elements
*   batch edit (preserving original order, as the tabs are usually organized in groups of topics )
*   format
    *   actually i use
    <pre>
        *   date
            *   topic (tag)
                *   tab
    </pre>