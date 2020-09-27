# 0.1: HTML
Review the basics of HTML by reading this tutorial from [Mozilla: HTML tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).

This exercise is not submitted to GitHub, it's enough to just read the tutorial


# 0.2: CSS
Review the basics of CSS by reading this tutorial from [Mozilla: CSS tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics).

This exercise is not submitted to GitHub, it's enough to just read the tutorial


# 0.3: HTML forms
Learn about the basics of HTML forms by reading [Mozilla's tutorial Your first form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form).

This exercise is not submitted to GitHub, it's enough to just read the tutorial


# 0.4: new note
In chapter Loading a page containing JavaScript - revised the chain of events caused by opening the page https://studies.cs.helsinki.fi/exampleapp/notes is depicted as a sequence diagram

The diagram was made using websequencediagrams service as follows:

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: HTML is easy, date: 2019-05-23 }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

If necessary, show operations on the browser or on the server as comments on the diagram.

The diagram does not have to be a sequence diagram. Any sensible way of presenting the events is fine.

All necessary information for doing this, and the next two exercises, can be found from the text of this part. The idea of these exercises is to read the text through once more, and to think through what is going on there. Reading the application code is not necessary, but it is of course possible.

<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgMC40IE5ldyBOb3RlCgoKbm90ZSBsZWZ0IG9mIEJyb3dzZXI6IFVzZXIgY2xpY2tzIGJ1dHRvbiB0byBzZW5kIGlucHV0IHRvIHRoZSBzZXJ2ZXIKADEHLT5TAAsFOiBIVFRQIFBPU1QgcmVxdWVzdCBzZW4AMQUvbmV3X25vdGUAdAZyaWdoAHYFADIIADwGIGNyZWF0ZXMgYSBuZXcgb2JqZWN0IGFuZCBhZGRzAHYIYXJyYXkgY2FsbGVkIG5vdGVzCgB7Bi0-AIFBCQCBBQVzdGF0dXMgY29kZSAzMDIgKHJlZGlyZWN0LWFza3MgYgCBcQYgdG8gZG8AbAcAgT0FR0VUAIEuBm90ZXMpAIFQF0dFAIFcCgAkCQB1FE1MAH0FACUiOiBtYWluLmNzAIE9EwARCQAeKGoALRhqcwCDZhcAg38HIHJlYWRzIGpzIHdoaWNoIHRyaWdnZXJzAIFkDWZvcgCCcwcAgXsiZm9yIGRhdGEuanNvbgCDGBIAEgkgKHJhdwAlBSBvZgCEYgUAgnkHAIERHndyaQCELQUAhBAFb2YAOwYAhSEHcGFnZQ&s=default">

# 0.5: Single page app
Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgMC41IFNpbmdsZSBQYWdlIEFwcAoKCm5vdGUgbGVmdCBvZiBCcm93c2VyOiBVc2VyIGdvZXMgdG8gL2V4YW1wbGVhcHAvc3BhCgoAIActPlNlcnZlcjogSFRUUCBHRVQgcmVxdWVzdAAxBXNwYQoAGwYtPgBQCUhUTUwgY29kZQAjIjogbWFpbi5jc3MANRIAEQkAIyNzcGEuagAxEwASBiBcKGpzIG1hbmlwdWxhdGVzIHMAgh4GaHRtbCBmaWxlIGNvbnRlbnQgaW4gU1BBJ3MpAIIeFwCCNwcgcmVhZHMAVwh3aGljaCB0cmlnZ2VycwCCGA1mb3Igbm90ZQCBIyMAJwVkYXRhLmpzb24AgkUSABIJIChyYXcAJQUgb2YgdGhlAFwGAIETIHdyaXRlcyBhcnJheSBvZgA7BnRvADwFcGFnZQ&s=default">


# 0.6: New note
Create a diagram depicting the situation where user creates a new note using the single page version of the app.

This was the last exercise, and it's time to push your answers to GitHub and mark the exercises as done in the submission application.

<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgMC42IE5ldyBOb3RlCgoKCm5vdGUgbGVmdCBvZiBCcm93c2VyOiBVc2VyIHN1Ym1pdHMgZm9ybSBhdCAvc3BhLiA8Rm9ybT4gZG9lcyBub3QgaGF2ZSBhY3Rpb24gb3IgbWV0aG9kIGF0dHJpYnV0ZXMASxdqcyBoYW5kbGVzIGV2ZW50OiBwcgAEBXMgZGVmYXVsdABMCWYgc2VuZGluZyBkYXRhIChhbmQgY2F1c2luZyBHRVQgcmVxdWVzdCksIGNyZWEAWRpuZXcgbm90ZSwgYW5kIGFkZHMgdG8gdGhlIGxpc3QuIFRoZSBiAIF8BiB0aGVuAHIFcwAcBQB0BXZpYSBKU09OAC4IU2VydmVyCgCCLgctPgAKBjogSFRUUCBQT1MAgREJIHRvIC9uZXdfbm90ZV9zcGEAgnAGcmlnaACCcgUAMQgASwYgdXBkYXRlcwCBEQUgd2l0aACBNQVjb250ZW50CgBwBi0-AIMjCQAvB3Jlc3BvbmRzACwGc3RhdHVzIGNvZGUgMjAxAIITB2QAg1gXAINxByBzdGF5cyBvbiBzYW1lIHBhZ2UAgiYFAIICBm5vIGZ1cnRoAGcFAIJtBXM&s=default">
