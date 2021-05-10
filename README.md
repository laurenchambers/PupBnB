<br />
<p align="center">
  <a href="https://github.com/laurenchambers/PupBnB">
  </a>

  <h3 align="center">PupBnB</h3>

  <p align="center">
   Based on the popular website AirBnB, PupBnB is a place where dog owners can go to book their dog a 'stay' at one of the available doghouses! Dog Owners can also create their own 'spot' (listing) such that other dogs can book a stay with them.
    <br />
    <br />
    <a href="https://pup-bnb.herokuapp.com/">View Site</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
[Click here to view PupBnB live on the web!](https://pup-bnb.herokuapp.com/)
<br>
 <img src="./screenshots/landingpage.png"/>
   <img src="./screenshots/homepage.png"/>
  
</br>


### Built With

* [JavaScript]()
* [React]()
* [Redux]()
* [CSS]()
* [Express]()
* [Sequelize]()




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with DessertDash.

  * npm
  ```sh
  npm install npm@latest -g
  ```
  * pipenv
  ```
  pipenv install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tedjanton/Brewd
   ```
2. Install NPM packages in the React App
   ```sh
   npm install
   ```
3. Install Dependencies
   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

4. Add a '.env' with your environment variables to the root of your local directory

5. Create a postgreSQL user
    ```sh
    CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB
    ```
6. Create your database
    ```sh
   CREATE DATABASE <<database name>> WITH OWNER <<your username>>
    ```
7. Start a pipenv virtual environment
   ```bash
   pipenv shell
   ```
8. Migrate and seed your database
    ```sh
    flask db migrate
    ```
    ```bash
   flask db upgrade
   ```
   ```bash
   flask seed all
   ```
   ```bash
   flask run
   ```
9. Start your local development server in the React App
   ```bash
   npm start
   ```
## Obstacles

### SQLAlchemy Querying

Because of how we built our lean database, we needed to create unique ways to query data due to interdependent relationships. We defined the necessary relationships between tables and created new methods that allowed us to return information pertaining to multiple tables without running into major conflicts.


### Likes

We had issues with React updating and rendering the state of a like without refreshing our entire page. Through hours of debugging and collaboration, we realized we overcomplicated the issue from the start.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/tedjanton/DessertDash/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
