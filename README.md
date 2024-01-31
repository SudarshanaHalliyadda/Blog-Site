<h1>Blog Site</h1>

<p>This is blog site created for users to allow manage their posts. You can simply run this code by importing to machine and by importing to vs code. After that split terminal, one for backend(api) and
another for frontend(client). Navigate to those folders seperately and simply run command 'npm start'.
You can check backend from postman tool and below are api endpoints.</p>

<ul>
  <li>http://localhost:5000/api/auth/register - register new user</li>
  <li>http://localhost:5000/api/auth/login - login and authentication</li>
  <li>http://localhost:5000/api/users/:id - Get user by id (GET)</li>
  <li>http://localhost:5000/api/users/:id - update user (PUT)</li>
  <li>http://localhost:5000/api/users/:id - Delete user (DELETE)</li>
  <li>http://localhost:5000/api/posts/ - Get all posts</li>
  <li>http://localhost:5000/api/posts/:id - GET, PUT, DELETE post</li>
  <li>http://localhost:5000/api/categories - ADD and GET categories</li>
</ul>

In react frontend there is registration form and once user registered into system his/her details will saved in MnogoDB database. Password will be encrypted and saved. After successfull login user
will navigate to login page and by entering credentials they can navigate to homepage. If wrong credentials entered error will be pass in console. All available posts will shown in homepage and all categories will be fetched from db and shown in sidebar.
User can click on single post and read whole post. Edit and delete options available there for user who is the author of post. All backend api are working fine and there're some issues with
frontend and they're mentioned below.

<hr/>

(This is coded to handle from react context.But user data did not fetched and it gives null value in console. After the dispatch initial state of user should be updated with user details. Login
success in reducer will set payload to user object. I checked code several times but the issue remains same. Without user details we can't use authentication in create post page.
Therefore JSON format cannot be undefined error occurs. Because of that issue creating post is not working. Also there's some issue with multer dependency
and because of that uploaded images are not showing but content is available.)
