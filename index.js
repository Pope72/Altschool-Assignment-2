<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Assignment 2 Sing Up Individuals</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="mediaquary.css" />
  </head>
  <body>
    <main>
      <header>
        <img src="Logo.png" alt="logo" />
        <h1>For Individuals</h1>
        <p class="shown">
          "Start benefiting from the wellness experience. For"
          <br />
          "Companies looking on increasing productivity, and improving
          organisation wellness. "
        </p>
        <p class="hidden">
          "Inspiring wholesome harmony for the mind, "
          <br />
          "body and spirit, for everyone, everywhere,"
        </p>
      </header>
      <section>
        <form action="submit">
          <div>
            <label for="firstname">First Name</label>
            <input
              type="input"
              id="firstname"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label for="last name">Last Name</label>
            <input
              type="input"
              id="lastname"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <label for="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="null">Select here</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label for="dob">Date of Birth</label>
            <input
              class="input"
              type="date"
              id="dob"
              placeholder="select here"
            />
          </div>
          <div>
            <label for="weight">Weight</label>
            <input
              type="input"
              type="text"
              id="weight"
              placeholder="Enter Weight"
            />
          </div>
          <div>
            <label for="height">Height</label>
            <input
              type="input"
              type="text"
              id="height"
              placeholder="Enter Height"
            />
          </div>
          <div>
            <label for="activity-level">Activity Level</label>
            <select name="activity-level" id="activity-level">
              <option value="null">Select here</option>
              <option value="female">Strong</option>
              <option value="male">Weak</option>
            </select>
          </div>
          <div class="passowrd">
            <label for="password">Password</label>
            <img src="" alt />
            <input
              id="password"
              class="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <button>Register</button>
          <footer class="main-footer">
            "By clicking Register, you agree to go "
            <a href> Term of Use</a>
            "and our"
            <a href>Privacy Policy</a>
          </footer>
        </form>
      </section>
      <footer class="mobile-footer">
        "By clicking Register, you agree to our "
        <a href>
          "Term of "
          <br />
          " Use "
        </a>
        "and our "
      </footer>
    </main>
  </body>
</html>
