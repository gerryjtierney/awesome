Good morning,

Unfortunately I've run out of time to implement all functionality, struggled for time between my current work and the test
and have only managed 6 hours working on it but have made some inroads at least and am disappointed I couldn't get closer
to finished.

Notes:
There is a mismatch between the ID of each document and the route it takes up on the API.
Example: https://devtest.awesomebeta.com/api/ideas/1 actually GETs document of ID 3

Perhaps intentional and I've just missed something! But to work around mis-matched Fetches I've used the useLocation() hook
to pull in the necessary props. Unfortunately that means refreshing the page breaks things, but I've not managed any other
workaround in the time.

Creating POST request for the comments eluded me due to this - the wrong document would be updated. Moved on to other things.

Deleting attachments not implemented yet - just a matter of sending the function down as a prop but couldn't get to it.



Only nominally responsive, and even then only on the first page - just wanted to show that I could do it rather than
spend too much time on doing it for everything.

Most stuff is still placeholder, obviously, and I've not used the assets provided. The plan was to put them in once things
were being tidied up but ran out of time I'm afraid.

Apologies for high-contrast colours still in effect, I use these when working with Grid or Flex to more quickly and easily
see where everything is currently sitting.


