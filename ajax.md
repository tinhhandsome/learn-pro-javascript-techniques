Ajax is a term coined by Jesse James Garrett of Adaptive Path to explain the asynchronous
client-to-server communication that’s made possible using the XMLHttpRequest object,
provided by all modern browsers. Standing for Asynchronous JavaScript and XML, Ajax is
simply a term used to encapsulate the techniques necessary to create a dynamic web application. Additionally, the individual components of the Ajax technique are completely
interchangeable—using HTML instead of XML (for example) is perfectly valid.
In this chapter you’re going to see the details that make up the full Ajax process (which
is itself centered on making a request to a server from a browser). I discuss everything from
the physical request itself, to the JavaScript interaction, and the data manipulation necessary to get the job done. This includes the following:
• Examining the different types of HTTP requests and determining how to best send data
objects to a server.
• Looking at the entire HTTP response and attempting to handle all the errors that can
occur with it, including server time-outs.
• Reading, traversing, and manipulating the data result that comes from the server in its
response.
Through this full understanding of how the Ajax process works and how it can be
implemented, you’ll see how it can be used in everything from common situations to full
applications. In Chapters 11, 12, and 13, you will also explore a series of case studies that
utilize Ajax techniques.
Using Ajax
Much code isn’t required to create a simple Ajax implementation, however, what the implementation affords you is great. For example, instead of having to force the user to request 
an entirely new web page after a form submission, the submission process can be handled
asynchronously, and then a small portion of desired results can be loaded upon completion.
For example, the process of searching for available domain names (to purchase) can be slow
and laborious. Every time you want to search for a new name you have to type your request
into a form, submit it, and watch the page reload. By using Ajax, you can get an instantaneous result, such as with the online application site Instant Domain Search (http://
instantdomainsearch.com/), for example, which is shown in Figure 10-1.
215
C H A P T E R 10
■ ■ ■
7273ch10final.qxd 11/16/06 8:11 AM Page 215HTTP Requests
The most important and probably most consistent aspect of Ajax is the HTTP request portion
of the process. The Hypertext Transfer Protocol (HTTP) was designed to simply transfer HTML
documents and similar files. Thankfully, all modern browsers support a means of establishing
HTTP connections dynamically, using JavaScript. This proves to be incredibly useful in developing more responsive web applications.
Asynchronously sending data to the server and receiving additional data back is the ultimate purpose of Ajax. How the data is formatted ultimately depends on your specific requirements, which I discuss in detail in the “Handling Response Data” section of this chapter.
In the following sections you’re going see how to format data to be transferred to a server
using the different HTTP requests. You’re then going to look at how to establish basic connections with the server, and you’ll see the necessary details to make this happen in a
cross-browser environment.
Establishing a Connection
The primary aspect of the Ajax process is the opening of a connection to the server. There
are a number of different ways to achieve this goal, but we’ll be looking at a specific means
through which you can both send and receive data easily. This technique is generally called
“using the XMLHttpRequest object.”
The communication of data is conducted in two different ways using the
XMLHttpRequest object, depending on the user’s browser:
1. Internet Explorer, which pioneered this means of browser-based communication,
establishes all of its connections using an ActiveXObject (the exact version of which
changes depending on the version of Internet Explorer). Thankfully, Internet 
Explorer 7 has native support for the XMLHttpRequest object.
2. All other modern browsers have localized the capabilities of the XMLHttpRequest
object into an object of the same name. This includes Firefox, Opera, and Safari.
216 CHAPTER 10 ■ INTRODUCTION TO AJAX
Figure 10-1. An example of Instant Domain Search looking for domain names as you type
7273ch10final.qxd 11/16/06 8:11 AM Page 216Thankfully, even though Internet Explorer’s method of creating an XMLHttpRequest
object is different from all other modern browsers, it still has the same set of useful functionalities. The XMLHttpRequest object has a number of methods that are used to establish a
connection and read data from the server. Listing 10-1 shows how to establish a basic GET
request with the server.Ajax is a term coined by Jesse James Garrett of Adaptive Path to explain the asynchronous
client-to-server communication that’s made possible using the XMLHttpRequest object,
provided by all modern browsers. Standing for Asynchronous JavaScript and XML, Ajax is
simply a term used to encapsulate the techniques necessary to create a dynamic web application. Additionally, the individual components of the Ajax technique are completely
interchangeable—using HTML instead of XML (for example) is perfectly valid.
In this chapter you’re going to see the details that make up the full Ajax process (which
is itself centered on making a request to a server from a browser). I discuss everything from
the physical request itself, to the JavaScript interaction, and the data manipulation necessary to get the job done. This includes the following:
• Examining the different types of HTTP requests and determining how to best send data
objects to a server.
• Looking at the entire HTTP response and attempting to handle all the errors that can
occur with it, including server time-outs.
• Reading, traversing, and manipulating the data result that comes from the server in its
response.
Through this full understanding of how the Ajax process works and how it can be
implemented, you’ll see how it can be used in everything from common situations to full
applications. In Chapters 11, 12, and 13, you will also explore a series of case studies that
utilize Ajax techniques.
Using Ajax
Much code isn’t required to create a simple Ajax implementation, however, what the implementation affords you is great. For example, instead of having to force the user to request 
an entirely new web page after a form submission, the submission process can be handled
asynchronously, and then a small portion of desired results can be loaded upon completion.
For example, the process of searching for available domain names (to purchase) can be slow
and laborious. Every time you want to search for a new name you have to type your request
into a form, submit it, and watch the page reload. By using Ajax, you can get an instantaneous result, such as with the online application site Instant Domain Search (http://
instantdomainsearch.com/), for example, which is shown in Figure 10-1.
215
C H A P T E R 10
■ ■ ■
7273ch10final.qxd 11/16/06 8:11 AM Page 215HTTP Requests
The most important and probably most consistent aspect of Ajax is the HTTP request portion
of the process. The Hypertext Transfer Protocol (HTTP) was designed to simply transfer HTML
documents and similar files. Thankfully, all modern browsers support a means of establishing
HTTP connections dynamically, using JavaScript. This proves to be incredibly useful in developing more responsive web applications.
Asynchronously sending data to the server and receiving additional data back is the ultimate purpose of Ajax. How the data is formatted ultimately depends on your specific requirements, which I discuss in detail in the “Handling Response Data” section of this chapter.
In the following sections you’re going see how to format data to be transferred to a server
using the different HTTP requests. You’re then going to look at how to establish basic connections with the server, and you’ll see the necessary details to make this happen in a
cross-browser environment.
Establishing a Connection
The primary aspect of the Ajax process is the opening of a connection to the server. There
are a number of different ways to achieve this goal, but we’ll be looking at a specific means
through which you can both send and receive data easily. This technique is generally called
“using the XMLHttpRequest object.”
The communication of data is conducted in two different ways using the
XMLHttpRequest object, depending on the user’s browser:
1. Internet Explorer, which pioneered this means of browser-based communication,
establishes all of its connections using an ActiveXObject (the exact version of which
changes depending on the version of Internet Explorer). Thankfully, Internet 
Explorer 7 has native support for the XMLHttpRequest object.
2. All other modern browsers have localized the capabilities of the XMLHttpRequest
object into an object of the same name. This includes Firefox, Opera, and Safari.
216 CHAPTER 10 ■ INTRODUCTION TO AJAX
Figure 10-1. An example of Instant Domain Search looking for domain names as you type
7273ch10final.qxd 11/16/06 8:11 AM Page 216Thankfully, even though Internet Explorer’s method of creating an XMLHttpRequest
object is different from all other modern browsers, it still has the same set of useful functionalities. The XMLHttpRequest object has a number of methods that are used to establish a
connection and read data from the server. Listing 10-1 shows how to establish a basic GET
request with the server.